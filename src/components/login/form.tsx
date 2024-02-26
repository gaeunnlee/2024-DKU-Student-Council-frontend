import Input from 'components/ui/input';
import Button from 'components/ui/button';
import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { IIdPassword } from 'shared/interfaces/default-interfaces';
import Checkbox from 'components/ui/checkbox';
import { Link } from 'react-router-dom';
import { ROUTES } from 'constants/route';
import Text from 'components/ui/typo/text';

export default function LoginForm() {
   const initLoginInfo: IIdPassword = {
      studentId: '',
      password: '',
   };
   const [loginInfo, setLoginInfo] = React.useState<IIdPassword>(initLoginInfo);
   const { login } = useAuth();

   const handleLogin = () => {
      login(loginInfo);
   };

   return (
      <form className='flex flex-col mx-auto gap-3 mt-[76px]'>
         <Input
            value={loginInfo.studentId}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
               if (e.target.value.length < 9) {
                  setLoginInfo((prev) => {
                     return { ...prev, studentId: e.target.value };
                  });
               }
            }}
            type='number'
            placeholder='Student ID'
            className='rounded-[10px]'
            size='lg'
         />
         <Input
            value={loginInfo.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
               setLoginInfo((prev) => {
                  return { ...prev, password: e.target.value };
               });
            }}
            type='password'
            placeholder='Password'
            className='rounded-[10px]'
            size='lg'
         />
         <div className='flex justify-between mb-1'>
            <Checkbox>
               <Text className='text-xs'>Save ID</Text>
            </Checkbox>
            <Link to={ROUTES.SIGNUP.INFO}>
               <p className='text-xs'>Forgot password?</p>
            </Link>
         </div>
         <Button variant='default' type='submit' onClick={handleLogin} className='py-3 rounded-[15px]'>
            <Text className='text-base font-bold'>로그인</Text>
         </Button>
      </form>
   );
}
