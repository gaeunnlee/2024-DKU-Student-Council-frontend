import Box from 'components/ui/box';
import Checkbox from 'components/ui/checkbox';
import Button from 'components/ui/button';
import Text from 'components/ui/typo/text';
import { ROUTES } from 'constants/route';
import { useNavigate } from 'react-router-dom';
import React, { Fragment, useState } from 'react';

export default function Term() {
   const allDisagree = Array(3).fill(false);
   const allAgree = Array(3).fill(true);
   const [agreeCheck, setAgreeCheck] = useState(allDisagree);
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
      <Fragment>
         <div className='flex flex-col gap-6'>
            <div className='ml-auto'>
               <Checkbox name='AllAgree' isChecked={allChecked} onChange={onAllCheckboxChange}>
                  <Text fontSize='10px' fontWeight={600}>
                     전체동의하기
                  </Text>
               </Checkbox>
            </div>
            <Box className='h-[156px]'>
               <Checkbox isChecked={agreeCheck[0]} onChange={() => onCheckboxChange(0)}>
                  <Text as='span' className='text-[11px]'>
                     [필수]
                  </Text>
                  <Text as='span' color='gray02' className='text-[11px]'>
                     개인 정보 수집, 이용 동의
                  </Text>
               </Checkbox>
            </Box>
            <Box className='h-[156px]'>
               <Checkbox isChecked={agreeCheck[1]} onChange={() => onCheckboxChange(1)}>
                  <Text as='span' fontSize='11px'>
                     [필수]
                  </Text>
                  <Text as='span' color='gray02' fontSize='11px'>
                     개인 정보 수집, 이용 동의
                  </Text>
               </Checkbox>
            </Box>
            <Box className='h-[156px] mb-8'>
               <Checkbox isChecked={agreeCheck[2]} onChange={() => onCheckboxChange(2)}>
                  <Text as='span' fontSize='11px'>
                     [필수]
                  </Text>
                  <Text as='span' color='gray02' fontSize='11px'>
                     개인 정보 수집, 이용 동의
                  </Text>
               </Checkbox>
            </Box>
         </div>
         <Button size='md' variant='default' rounded='20px' onClick={handleAgreeAll} isDisabled={!allChecked}>
            동의 완료
         </Button>
      </Fragment>
   );
}
