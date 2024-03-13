import Box from '@components/ui/box';
import { Button } from '@components/ui/button';
import Checkbox from '@components/ui/checkbox';
import { ROUTES } from '@constants/route';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Term() {
   const allDisagree = Array(3).fill(false);
   const allAgree = Array(3).fill(true);
   const [agreeCheck, setAgreeCheck] = React.useState(allDisagree);
   const allChecked = agreeCheck.every(Boolean);

   const navigate = useNavigate();

   const onCheckboxChange = (index: number) => {
      const newAgreeCheck = [...agreeCheck];
      newAgreeCheck[index] = !newAgreeCheck[index];
      setAgreeCheck(newAgreeCheck);
   };
   const onAllCheckboxChange = () => {
      const newAgreeCheck = allChecked ? allDisagree : allAgree;
      setAgreeCheck(newAgreeCheck);
   };

   const handleAgreeAll = () => {
      if (allChecked) {
         navigate(ROUTES.SIGNUP.VERIFY);
      } else {
         alert('약관에 동의해야 회원가입이 가능합니다.');
      }
   };

   return (
      <React.Fragment>
         <div className='flex flex-col gap-6'>
            <div className='ml-auto'>
               <Checkbox
                  label='allAgree'
                  checked={allChecked}
                  onCheckedChange={onAllCheckboxChange}
                  text='전체동의하기'
               />
            </div>
            <Box className='h-[156px]'>
               <Checkbox
                  label='agreeCheck_1'
                  checked={agreeCheck[0]}
                  onCheckedChange={() => onCheckboxChange(0)}
                  text='[필수] 개인 정보 수집, 이용 동의'
               />
            </Box>
            <Box className='h-[156px]'>
               <Checkbox
                  label='agreeCheck_1'
                  checked={agreeCheck[1]}
                  onCheckedChange={() => onCheckboxChange(1)}
                  text='[필수] 개인 정보 수집, 이용 동의'
               />
            </Box>
            <Box className='h-[156px] mb-8'>
               <Checkbox
                  label='agreeCheck_1'
                  checked={agreeCheck[2]}
                  onCheckedChange={() => onCheckboxChange(2)}
                  text='[필수] 개인 정보 수집, 이용 동의'
               />
            </Box>
         </div>
         <Button
            size='md'
            variant='default'
            className='rounded-[20px]'
            onClick={handleAgreeAll}
            disabled={!allChecked}
         >
            동의 완료
         </Button>
      </React.Fragment>
   );
}
