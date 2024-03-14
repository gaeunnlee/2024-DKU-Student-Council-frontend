import Box from '@components/ui/box';
import { Button } from '@components/ui/button';
import Checkbox from '@components/ui/checkbox';
import { Label } from '@components/ui/label';
import { ROUTES } from '@constants/route';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Term() {
   const allDisagree = Array(3).fill(false);
   const allAgree = Array(3).fill(true);
   const [agreeCheck, setAgreeCheck] = React.useState(allDisagree);
   const allChecked = agreeCheck.every(Boolean);

   const navigate = useNavigate();

   const handleCheckboxChange = (index: number) => {
      const newAgreeCheck = [...agreeCheck];
      newAgreeCheck[index] = !newAgreeCheck[index];
      setAgreeCheck(newAgreeCheck);
   };
   const handleAllCheckboxChange = () => {
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

   const CHECKBOX = [
      {
         id: 'agreeCheck01',
         mainText: '[필수]',
         subText: '개인 정보 수집, 이용 동의',
      },
      {
         id: 'agreeCheck02',
         mainText: '[필수]',
         subText: '개인 정보 수집, 이용 동의',
      },
      {
         id: 'agreeCheck03',
         mainText: '[필수]',
         subText: '개인 정보 수집, 이용 동의',
      },
   ];

   return (
      <React.Fragment>
         <div className='flex flex-col gap-6'>
            <div className='ml-auto'>
               <Checkbox
                  id='allAgree'
                  direction='right'
                  checked={allChecked}
                  onCheckedChange={handleAllCheckboxChange}
               >
                  <Label htmlFor='allAgree' className='text-xs font-semibold'>
                     전체동의하기
                  </Label>
               </Checkbox>
            </div>
            {CHECKBOX.map((checkbox, index) => (
               <Box key={checkbox.id} className='h-[156px]'>
                  <Checkbox
                     id={checkbox.id}
                     checked={agreeCheck[index]}
                     onCheckedChange={() => handleCheckboxChange(index)}
                  >
                     <Label htmlFor={checkbox.id} className='text-xs'>
                        [필수]
                     </Label>
                     <Label htmlFor={checkbox.id} className='text-xs -ml-1 text-gray02'>
                        개인 정보 수집, 이용 동의
                     </Label>
                  </Checkbox>
               </Box>
            ))}
            <Button
               size='md'
               variant='default'
               className='rounded-[20px]'
               onClick={handleAgreeAll}
               disabled={!allChecked}
            >
               동의 완료
            </Button>
         </div>
      </React.Fragment>
   );
}
