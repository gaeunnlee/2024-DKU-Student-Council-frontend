import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants';
import axios from 'axios';

export default function SignupVerify() {
   const navigate = useNavigate();

   const [userInput, setUserInput] = useState({
      studentId: '',
      password: '',
   });

   const handle = {
      signupVerify: async (e: FormEvent<HTMLFormElement>) => {
         e.preventDefault();
         try {
            const response = await axios.post('http://localhost:5000/signup/verify', {
               studentId: userInput.studentId,
               password: userInput.password,
            });
            if (response.status === 200) {
               alert(response.data.msg);
               navigate(ROUTES.MAIN);
            }
         } catch (error) {
            alert('인증에 실패하였습니다.');
         }
      },
   };

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setUserInput({
         ...userInput,
         [e.target.name]: e.target.value,
      });
   };

   return (
      <form onSubmit={handle.signupVerify}>
         <input
            type='text'
            name='studentId'
            placeholder='학번'
            value={userInput.studentId}
            onChange={handleInputChange}
         />
         <input
            type='password'
            name='password'
            placeholder='비밀번호'
            value={userInput.password}
            onChange={handleInputChange}
         />
         <button>인증</button>
      </form>
   );
}
