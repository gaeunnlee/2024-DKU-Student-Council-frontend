import React from 'react';
import { ReactComponent as SUCCESSICON } from '../../assets/images/signup_success.svg';
import Button from 'components/ui/button';

export default function SignupSuccess() {
   return (
      <div className='flex-col mx-auto'>
         <h1 className='mb-3'>
            <SUCCESSICON />
         </h1>
         <h2 className='mb-3'>회원가입 완료</h2>
         <p className='mb-32'>회원가입이 완료되었습니다.</p>
         <Button variant='primary'>확인</Button>
      </div>
   );
}
