import PostBox, { FileBox } from 'components/ui/box/PostBox';
import { API_PATH } from 'constant';
import React, { ComponentProps, ReactNode, useEffect, useState } from 'react';
import Collapse from 'components/ui/collapse';
import { useFetchPost } from 'hooks/useFetchPost';
import { getDaysBetween, getPetitionStatus } from '.';
import { IWithReactChildren } from 'shared/interfaces/default-interfaces';
import DoughnutChart from 'components/ui/chart/DoughnutChart';
import Text from 'components/ui/text';
import ChartList from 'components/ui/chart/ChartList';
import { TbThumbUp, TbThumbUpFilled } from 'react-icons/tb';
import { useAlert } from 'hooks/useAlert';
import { useApi } from 'hooks/useApi';

export default function PetitionDetail() {
   const { post: petition, postId } = useFetchPost<IPetition>({ api: API_PATH.POST.PETITION.ROOT });
   const [petitionStatus, setPetitionStatus] = useState('');
   const [remainingDays, setRemainingDays] = useState<number>();
   const [sum, setSum] = useState(0);
   const { alert } = useAlert();
   const { post } = useApi();

   useEffect(() => {
      if (petition !== undefined) {
         setPetitionStatus(getPetitionStatus(petition.status)); // 청원 상태
         setRemainingDays(getDaysBetween(petition.expiresAt)); // 청원 잔여일
         petition.statisticList.forEach((item) => setSum((prev) => prev + item.agreeCount)); // 단과대 총 투표수
      }
   }, [petition]);

   const handlePostAgree = async () => {
      try {
         const data = await post(`${API_PATH.POST.PETITION.AGREE.ID(postId!)}`, null, {
            authenticate: true,
         });
         console.log(data);
         window.location.reload();
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
      petition !== undefined && (
         <div className='min-h-screen flex flex-col gap-2'>
            {/* 청원글 */}
            <Box>
               <div className='flex gap-4 text-gray-400'>
                  <span>{petitionStatus}</span>
                  <span>{`D-${remainingDays}`}</span>
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
                     <DoughnutChart statisticList={petition.statisticList} sum={sum} />
                     <ChartList statisticList={petition.statisticList} sum={sum} />
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
            <div className='flex justify-end'>
               <button
                  onClick={() => {
                     handleAgreeButtonClick();
                  }}
                  className='rounded-full fixed bottom-[80px] mr-5 bg-black w-[70px] h-[70px] flex justify-center items-center'
               >
                  {petition.agree ? (
                     <TbThumbUpFilled color='white' size={40} />
                  ) : (
                     <TbThumbUp color='white' size={40} />
                  )}
               </button>
            </div>
         </div>
      )
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
   statisticList: [
      {
         department: string;
         agreeCount: number;
      },
   ];
   agree: true;
   liked: boolean;
   mine: boolean;
   blinded: boolean;
}
