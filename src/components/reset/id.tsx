import { Button } from '@components/ui/button/index';
import { Input } from '@components/ui/input';
import { usePostFindId } from '@hooks/api/reset/usePostFindId';
import { useAlert } from '@hooks/useAlert';
import { formatphoneNumber } from '@utils/tell';
import React, { ChangeEvent } from 'react';

export default function IdForm() {
   const [phoneNumber, setPhoneNumber] = React.useState<string>('');
   //TODO) 인증번호 전송 여부 Toast 추가
   const { alert } = useAlert();

   const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
      setPhoneNumber(e.target.value);
   };

   const { mutate: findId } = usePostFindId();

   const handleFindId = (e: React.FormEvent) => {
      e.preventDefault();
      if (phoneNumber.length === 11) {
         const formattedPhoneNumber = formatphoneNumber(phoneNumber);
         //TODO) 타입 수정
         findId({ phoneNumber: formattedPhoneNumber });
      } else {
         alert('올바른 휴대폰번호를 입력해주세요.');
      }
   };

   return (
      <form onSubmit={handleFindId} className='flex flex-col items-center gap-16'>
         <div className='flex mx-auto'>
            <Input
               size='md'
               type='number'
               value={phoneNumber}
               placeholder='가입시 입력한 휴대전화번호 입력'
               onChange={handlePhoneChange}
            />
            <Button variant='ghost' className='ml-[-40px] z-10 text-[13px]'>
               요청
            </Button>
         </div>
      </form>
   );
}
