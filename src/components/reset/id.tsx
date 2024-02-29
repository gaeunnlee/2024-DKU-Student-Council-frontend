import Button from 'components/ui/button';
import Input from 'components/ui/input';
import { usePostFindId } from 'hooks/query/reset/mutation';
import { useAlert } from 'hooks/useAlert';
import React, { ChangeEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function IdForm() {
   const [phoneNumber, setPhoneNumber] = React.useState<string>('');
   const { alert } = useAlert();
   const navigate = useNavigate();

   const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
      setPhoneNumber(e.target.value);
   };

   const { mutate, isSuccess } = usePostFindId();

   const handleFindId = (e: React.FormEvent) => {
      e.preventDefault();
      mutate(phoneNumber);
   };

   useEffect(() => {
      isSuccess && alert('문자로 ID를 전송하였습니다.');
   }, [isSuccess]);

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
            <button className='ml-[-40px] z-10 text-[13px]'>요청</button>
         </div>
         <Button
            onClick={() => navigate('/login')}
            size='md'
            variant='default'
            borderRadius='30px'
            className='!w-[311px]'
         >
            확인
         </Button>
      </form>
   );
}
