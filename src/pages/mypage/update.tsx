import Button from 'components/ui/button';
import Input from 'components/ui/input';
import Text, { Title } from 'components/ui/text';
import { API_PATH, CONSTANTS } from 'constants/api';
import { useAlert } from 'hooks/useAlert';
import { useApi } from 'hooks/useApi';
import { useEffectOnce } from 'hooks/useEffectOnce';
import { useLayout } from 'hooks/useLayout';
import React, { useState } from 'react';
import { GoDotFill } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
import { useEnrollmentStore } from 'stores/enrollment-store';
import { checkInputRegex } from 'utils/checkInputRegex';

export default function MyPageUpdate() {
   const { setLayout } = useLayout();
   const [loginInfo, setLoginInfo] = useState({ dkuStudentId: '', dkuPassword: '' });
   const { post, patch } = useApi();
   const { alert } = useAlert();
   const navigate = useNavigate();
   const { setEnrollment } = useEnrollmentStore();

   useEffectOnce(() => {
      setLayout({
         title: '',
         backButton: true,
         isMain: false,
         fullscreen: false,
         headingStyle: 'h-[15vh]',
         subHeadingStyle: '',
         margin: '',
         rounded: true,
      });
   });

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (loginInfo.dkuStudentId.length > 0 && loginInfo.dkuPassword.length > 0) {
         try {
            await patch(`${CONSTANTS.SERVER_URL}${API_PATH.USER.DKU.INDEX}`, loginInfo, {
               authenticate: true,
            });
            await post(`${CONSTANTS.SERVER_URL}${API_PATH.USER.DKU.REFRESH}`, loginInfo, {
               authenticate: true,
            });
            alert('인증되었습니다.');
            navigate('/mypage');
            setEnrollment(true);
         } catch (error) {
            alert(error);
         }
      } else {
         alert('모두 입력해주세요.');
      }
   };

   return (
      <form
         className='border-none mt-10 flex flex-col gap-3 px-6'
         onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            handleSubmit(e);
         }}
      >
         <Title className='text-2xl font-bold'>회원 정보 업데이트</Title>
         <Text length={4} className='flex text-sm items-center'>
            <GoDotFill />
            학생 인증
         </Text>
         <div>
            <Input
               onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setLoginInfo((prev) => ({
                     ...prev,
                     dkuStudentId: checkInputRegex(e.target.value, 'number') ?? '',
                  }));
               }}
               maxLength={8}
               placeholder='학번 입력'
               className='w-full rounded-lg'
               value={loginInfo.dkuStudentId}
            />
            <Input
               onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setLoginInfo((prev) => ({ ...prev, dkuPassword: e.target.value }));
               }}
               placeholder='비밀번호 입력'
               type='password'
               className='w-full rounded-lg'
               value={loginInfo.dkuPassword}
            />
         </div>
         <Text length={4} className='flex text-sm gap-1 text-neutral-400'>
            <GoDotFill size={30} />
            단국대학교 웹정보 로그인 시 사용 되는 ID, PW를 통해 학생인증이 진행됩니다. (입력한 정보는 인증 후
            즉시 폐기됩니다)
         </Text>
         <Button variant='black' className='w-full'>
            인증
         </Button>
      </form>
   );
}
