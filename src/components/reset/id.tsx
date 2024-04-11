import { Button } from '@components/ui/button/index';
import { Input } from '@components/ui/input';
import { usePostFindId } from '@hooks/api/reset/usePostFindId';
import { useAlert } from '@hooks/useAlert';
import { formatphoneNumber } from '@utils/tell';
import React, { ChangeEvent } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function IdForm() {
   const [phoneNumber, setPhoneNumber] = React.useState<string>('');
   //TODO) 인증번호 전송 여부 Toast 추가
   const navigate = useNavigate();
   const [searchParams] = useSearchParams();
   const { alert } = useAlert();

   const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
      setPhoneNumber(e.target.value);
   };

   const { mutate } = usePostFindId({
      onSuccess: () => {
         alert('휴대전화로 아이디가 전송되었습니다.');
         redirectLogin();
      },
   });

   const handleFindId = (e: React.FormEvent) => {
      e.preventDefault();
      if (phoneNumber.length === 11) {
         const formattedPhoneNumber = formatphoneNumber(phoneNumber);
         //TODO) 타입 수정
         mutate({ phoneNumber: formattedPhoneNumber });
      } else {
         alert('올바른 휴대폰번호를 입력해주세요.');
      }
   };

   const redirectLogin = () => {
      if (searchParams.has('redirectUrl')) {
         window.location.href = searchParams.get('redirectUrl') || '';
         return;
      }
      navigate('/login');
   };

   return (
      <form className='flex flex-col items-center gap-16'>
         <div className='flex mx-auto'>
            <Input
               size='md'
               type='number'
               value={phoneNumber}
               placeholder='가입시 입력한 휴대전화번호 입력'
               onChange={handlePhoneChange}
            />
         </div>
         <Button onClick={handleFindId} size='md' variant='default' className='rounded-[30px]' type='button'>
            요청
         </Button>
      </form>
   );
}
