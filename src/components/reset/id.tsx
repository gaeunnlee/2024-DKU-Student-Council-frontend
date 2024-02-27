import Button from 'components/ui/button';
import Input from 'components/ui/input';
import { usePostFindId } from 'hooks/query/reset/mutation';
import React, { ChangeEvent } from 'react';

export default function IdForm() {
   const [phoneNumber, setPhoneNumber] = React.useState<string>('');

   const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
      setPhoneNumber(e.target.value);
   };

   const { mutate } = usePostFindId();

   const handleFindId = (e: React.FormEvent) => {
      e.preventDefault();
      mutate(phoneNumber);
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
            <button className='ml-[-40px] z-10 text-[13px]'>요청</button>
         </div>
         <Button type='submit' size='md' variant='default' borderRadius='30px' className='!w-[311px]'>
            확인
         </Button>
      </form>
   );
}
