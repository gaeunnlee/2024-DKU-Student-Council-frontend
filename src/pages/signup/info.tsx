import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useLocation } from 'react-router-dom';
import Input from 'components/ui/input';
import Button from 'components/ui/button';

export default function SignupInfo() {
   const location = useLocation();
   const { data } = location.state || {};
   localStorage.setItem('signup-token', data.signupToken);
   console.log(data);

   // 입력 필드의 상태
   const [formData, setFormData] = useState({
      phoneInput: '',
      passwordInput: '',
      passwordConfirmInput: '',
   });

   // 입력 값 변경 핸들러
   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value,
      });
   };

   // 폼 제출 핸들러
   const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      // formData 객체를 사용하여 데이터 처리
      console.log(formData);
   };

   if (!data) {
      return <div>데이터 없음</div>;
   }
   return (
      <form onSubmit={handleSubmit}>
         <section className={'mb-6'}>
            <Input label='이름' value={data.student.studentName}></Input>
         </section>
         <section className={'mb-6'}>
            <Input
               label='아이디'
               value={data.student.studentId + '@dankook@ac.kr'}
            ></Input>
         </section>
         <section className={'mb-6'}>
            <Input
               label='비밀번호'
               type='password'
               placeholder='비밀번호 입력'
               name='passwordInput'
               value={formData.passwordInput}
               onChange={handleInputChange}
            ></Input>
            <Input
               type='password'
               placeholder='비밀번호 확인'
               name='passwordConfirmInput'
               value={formData.passwordConfirmInput}
               onChange={handleInputChange}
            ></Input>
         </section>
         <section className={'mb-6'}>
            <Input
               label='학부/학과'
               placeholder='학부/학과를 선택하세요.'
               value={data.student.major}
            ></Input>
         </section>
         <section className={'flex mb-6'}>
            <Input label='닉네임' type='text' placeholder='닉네임 입력'></Input>
            <button className={'ml-[-5rem] text-blue-600'}>중복확인</button>
         </section>
         <section className={'flex-col mb-6'}>
            <div className={'flex'}>
               <Input
                  label='휴대폰 인증'
                  type='number'
                  placeholder='-는 제외하고 입력해주세요.'
                  name='phoneInput'
                  value={formData.phoneInput}
                  onChange={handleInputChange}
               ></Input>
               <button className={'px-0 h-auto inline-block ml-[-5rem] text-blue-600'}>
                  인증요청
               </button>
            </div>
            <div className={'flex'}>
               <Input
                  type='number'
                  placeholder='인증번호 6자리를 입력해주세요.'
               ></Input>
               <button className={'ml-[-3rem] text-blue-600'}>확인</button>
            </div>
         </section>
         <Button type='submit' className='w-full p-2 rounded'>
            확인
         </Button>
      </form>
   );
}
