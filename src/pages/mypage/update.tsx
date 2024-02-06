import Box from 'components/ui/box';
import Button from 'components/ui/button';
import Input from 'components/ui/input';
import Text, { Title } from 'components/ui/text';
import { useEffectOnce } from 'hooks/useEffectOnce';
import { useFetchMyInfo } from 'hooks/useFetchMyInfo';
import { useLayout } from 'hooks/useLayout';
import React, { useEffect } from 'react';
import { GoDotFill } from 'react-icons/go';

export default function MyPageUpdate() {
   const { setLayout } = useLayout();
   const { myInfo, fetchMyInfo } = useFetchMyInfo();

   useEffectOnce(() => {
      fetchMyInfo();
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

   useEffect(() => {
      console.log(myInfo);
   }, [myInfo]);
   return (
      <Box className='border-none mt-10 flex flex-col gap-3 px-6'>
         <Title className='text-2xl font-bold'>회원 정보 갱신</Title>
         <Text length={4} className='flex text-sm items-center'>
            <GoDotFill />
            학생 인증
         </Text>
         <div>
            <Input placeholder='학번 입력' className='w-full rounded-lg' />
            <Input placeholder='비밀번호 입력' type='password' className='w-full rounded-lg' />
         </div>
         <Text length={4} className='flex text-sm gap-1 text-neutral-400'>
            <GoDotFill size={30} />
            단국대학교 웹정보 로그인 시 사용 되는 ID, PW를 통해 학생인증이 진행됩니다. (입력한 정보는 인증 후
            즉시 폐기됩니다)
         </Text>
         <Button variant='black' className='w-full'>
            인증
         </Button>
      </Box>
   );
}
