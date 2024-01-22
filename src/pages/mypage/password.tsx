import React from 'react';
import MyPageLayout from 'layouts/MyPageLayout';
import Text from 'components/ui/text';
import Input from 'components/ui/input';
import Button from 'components/ui/button';

export default function MyPagePassword() {
   return (
      <MyPageLayout>
         <div className='p-4 flex flex-col gap-4 mt-[-40px] justify-center h-[calc(100%-200px)]'>
            <Text length={4} className='font-bold'>
               비밀번호를 입력해주세요
            </Text>
            <Input placeholder='password' className='rounded-lg w-full' />
            <Button variant='black' className='rounded-lg'>
               확인
            </Button>
         </div>
      </MyPageLayout>
   );
}
