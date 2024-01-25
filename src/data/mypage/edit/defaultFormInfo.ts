export const defaultFormInfo = ({
   originNickname,
   originMajor,
}: {
   originNickname: string;
   originMajor: string;
}) => [
   [
      {
         id: 'nickname',
         title: '닉네임',
         inputType: 'text',
         placeholder: originNickname,
         bigButton: '변경',
         validation: validationInfo.nickname,
         value: null,
      },
   ],
   [
      {
         id: 'password',
         title: '비밀번호 변경',
         inputType: 'password',
         placeholder: '새로운 비밀번호를 입력해주세요',
         validation: validationInfo.password,
         value: null,
      },
      {
         id: 'passwordConfirm',
         title: '비밀번호 재확인',
         inputType: 'password',
         placeholder: '새로운 비밀번호를 재입력해주세요',
         bigButton: '변경',
         validation: validationInfo.passwordConfirm,
         value: null,
      },
   ],
   [
      {
         id: 'major',
         title: '학과 및 재학 여부',
         inputType: 'text',
         placeholder: originMajor,
         button: '변경',
         value: null,
      },
   ],
   [
      {
         id: 'phoneNumber',
         title: '휴대폰번호 변경',
         inputType: 'number',
         bigButton: '인증번호 전송',
         value: null,
      },
      {
         id: 'verficationCode',
         title: '인증번호 입력',
         inputType: 'number',
         bigButton: '확인',
         validation: validationInfo.verficationCode,
         value: null,
      },
   ],
];

const validationInfo = {
   nickname: {
      result: null,
      successMessage: '사용 가능한 닉네임입니다',
      errorMessage: '사용 불가능한 닉네임입니다',
   },
   password: {
      result: null,
      defaultMessage: '비밀번호는 영문과 숫자를 1자 이상 포함하는 8-16 자리여야 합니다.',
      successMessage: '알맞게 입력하였습니다.',
      errorMessage: '비밀번호는 영문과 숫자를 1자 이상 포함하는 8-16 자리여야 합니다.',
   },
   passwordConfirm: {
      result: null,
      bigButton: '확인',
      errorMessage: '비밀번호가 같지 않습니다.',
      successMessage: '비밀번호가 변경되었습니다.',
   },
   verficationCode: {
      result: null,
      errorMessage: '인증번호를 다시 입력해주세요',
      successMessage: '인증 완료되었습니다',
   },
};
