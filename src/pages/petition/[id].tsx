import PostBox, { FileBox } from 'components/ui/box/PostBox';
import { API_PATH } from 'constants/api';
import React, { ComponentProps, ReactNode, useEffect, useState } from 'react';
import Collapse from 'components/ui/collapse';
import { useFetchPost } from 'hooks/useFetchPost';
import { getDaysBetween, getPetitionStatus } from '.';
import { IWithReactChildren } from 'shared/interfaces/default-interfaces';
import DoughnutChart from 'components/ui/chart/DoughnutChart';
import Text from 'components/ui/text';
import PetitonChartList from 'components/ui/chart/PetitionChartList';
import { TbThumbUp, TbThumbUpFilled } from 'react-icons/tb';
import { useAlert } from 'hooks/useAlert';
import { useApi } from 'hooks/useApi';
import FloatingButton from 'components/ui/button/FloatingButton';
import PostDetailLayout from 'layouts/PostDetailLayout';

export default function PetitionDetail() {
   const [updatePost, setUpdatePost] = useState(false);
   const [chartData, setChartData] = useState({ labels: [''], data: [0] });
   const { post: petition, postId } = useFetchPost<IPetition>({
      api: API_PATH.POST.PETITION.ROOT,
      update: updatePost,
   });
   const [petitionStatus, setPetitionStatus] = useState('');
   const [remainingDays, setRemainingDays] = useState<number>();
   const [sum, setSum] = useState(0);
   const { alert } = useAlert();
   const { post } = useApi();

   const getSum = (post: IPetition) => {
      setSum(0);
      return post.statisticList.forEach((item) => setSum((prev) => prev + item.agreeCount)); // 단과대 총 투표수
   };

   useEffect(() => {
      if (petition !== undefined) {
         setPetitionStatus(getPetitionStatus(petition.status)); // 청원 상태
         setRemainingDays(getDaysBetween(petition.expiresAt)); // 청원 잔여일
         getSum(petition);
         processData(petition.statisticList);
      }
   }, [petition, updatePost]);

   const processData = (data: IPetitionStatistic[]) => {
      setChartData({ labels: [], data: [] }); // 차트 초기화
      /* 단과대 투표 데이터 가공 */
      data.forEach((item) => {
         setChartData((prev) => {
            return {
               labels: [...prev.labels, item.department],
               data: [...prev.data, item.agreeCount],
            };
         });
      });
   };

   const handlePostAgree = async () => {
      try {
         await post(`${API_PATH.POST.PETITION.AGREE.ID(postId!)}`, null, {
            authenticate: true,
         });
         setUpdatePost(true);
      } catch (error) {
         alert;
      }
   };

   const handleAgreeButtonClick = () => {
      if (petition?.agree) {
         alert('이미 동의하셨습니다');
      } else {
         handlePostAgree();
      }
   };

   return (
      <>
         {petition !== undefined && (
            <PostDetailLayout>
               {/* 청원글 */}
               <Box>
                  <div className='flex gap-4 text-gray-400'>
                     <span>{petitionStatus}</span>
                     <span>
                        {remainingDays !== undefined && remainingDays > 0
                           ? `D-${remainingDays}`
                           : '기간 만료'}
                     </span>
                     <span>{`${petition.agreeCount}/150`}</span>
                  </div>
                  <Title>{petition.title}</Title>
                  <p>{petition.body}</p>
               </Box>

               {/* 첨부파일 */}
               {petition.files.length > 0 && <FileBox className='p-0 mt-0' files={petition?.files} />}

               {/* 동의현황 */}
               <PostBox className='shadow-none px-0 py-0 text-center'>
                  <Collapse status={false} size='text-2xl' title={<Title className='mr-1'>동의현황</Title>}>
                     <PostBox className='mx-0 mt-2 flex flex-col gap-3 px-6'>
                        <Text length={4}>어떤 과에서 가장 동의를 많이 했을까요?</Text>
                        <hr />
                        <DoughnutChart chartData={chartData} sum={sum} />
                        <PetitonChartList statisticList={petition.statisticList} sum={sum} />
                     </PostBox>
                  </Collapse>
               </PostBox>

               {/* 답변 */}
               {petition.answer !== null && (
                  <Box>
                     <Title>총학생회 답변</Title>
                     <p>{petition.answer}</p>
                  </Box>
               )}

               {/* 플로팅 버튼 */}
               <FloatingButton
                  event={() => {
                     handleAgreeButtonClick();
                  }}
               >
                  {petition.agree ? (
                     <TbThumbUpFilled color='white' size={40} />
                  ) : (
                     <TbThumbUp color='white' size={40} />
                  )}
               </FloatingButton>
            </PostDetailLayout>
         )}
      </>
   );
}

function Box({ children }: { children: ReactNode }) {
   return <PostBox className='flex flex-col gap-3'>{children}</PostBox>;
}

function Title({ children, className }: IWithReactChildren & ComponentProps<'p'>) {
   return <p className={`text-xl font-bold ${className ?? ''}`}>{children}</p>;
}

interface IPetition {
   id: number;
   title: string;
   body: string;
   author: string;
   tag: [{ id: number; name: string }];
   createdAt: string;
   images: [
      {
         id: number;
         url: string;
         thumbnailUrl: string;
         originalName: string;
         mimeType: string;
      },
   ];
   files: [
      {
         id: number;
         url: string;
         originalName: string;
         mimeType: string;
      },
   ];
   likes: number;
   views: number;
   status: string;
   answer: null | string;
   expiresAt: string;
   agreeCount: number;
   statisticList: IPetitionStatistic[];
   agree: true;
   liked: boolean;
   mine: boolean;
   blinded: boolean;
}

export interface IPetitionStatistic {
   agreeCount: number;
   department: string;
}
