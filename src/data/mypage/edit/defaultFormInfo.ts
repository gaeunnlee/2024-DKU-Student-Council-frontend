import { IInputValue, IValidationInfo } from 'interfaces/mypage/edit';

export const defaultFormInfo = ({
   originNickname,
   originMajor,
   originPhoneNumber,
   inputsValue,
}: {
   originNickname: string;
   originMajor: string;
   originPhoneNumber: string;
   inputsValue: IInputValue;
}) => [
   [
      {
         id: 'nickname',
         title: '닉네임',
         inputType: 'text',
         placeholder: originNickname,
         bigButton: '변경',
         validation: checkValidation('nickname', inputsValue.nickname.validation),
         value: null,
      },
   ],
   [
      {
         id: 'originPassword',
         title: '기존 비밀번호 입력',
         inputType: 'password',
         placeholder: '기존 비밀번호를 입력해주세요',
         value: null,
      },
      {
         id: 'password',
         title: '비밀번호 변경',
         inputType: 'password',
         placeholder: '새로운 비밀번호를 입력해주세요',
         validation: checkValidation('password', inputsValue.password.validation),
         value: null,
      },
      {
         id: 'passwordConfirm',
         title: '비밀번호 재확인',
         inputType: 'password',
         placeholder: '새로운 비밀번호를 재입력해주세요',
         bigButton: '변경',
         validation: checkValidation('passwordConfirm', inputsValue.passwordConfirm.validation),
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
         placeholder: originPhoneNumber,
         bigButton: '인증번호 전송',
         validation: checkValidation('phoneNumber', inputsValue.phoneNumber.validation),
         value: null,
         maxLength: 11,
      },
      {
         id: 'verficationCode',
         title: '인증번호 입력',
         inputType: 'number',
         bigButton: '확인',
         value: null,
      },
   ],
];

const checkValidation = (name: string, value: boolean | null): IValidationInfo => {
   return {
      result: value,
      defaultMessage: Object.getOwnPropertyDescriptor(validationInfo, name)?.value.defaultMessage,
      successMessage: Object.getOwnPropertyDescriptor(validationInfo, name)?.value.successMessage,
      errorMessage: Object.getOwnPropertyDescriptor(validationInfo, name)?.value.errorMessage,
   };
};

const validationInfo = {
   nickname: {
      result: null,
      successMessage: '',
      errorMessage: '3자 이상, 16자 이하의 닉네임을 입력해주세요.',
   },
   password: {
      result: null,
      defaultMessage: '비밀번호는 영문과 숫자를 1자 이상 포함하는 8-16 자리여야 합니다.',
      successMessage: '알맞게 입력하였습니다.',
      errorMessage: '비밀번호는 영문과 숫자를 1자 이상 포함하는 8-16 자리여야 합니다.',
   },
   passwordConfirm: {
      result: null,
      errorMessage: '비밀번호가 같지 않습니다.',
      successMessage: '알맞게 입력하였습니다.',
   },
   phoneNumber: {
      result: null,
      defaultMessage: '숫자만 입력해주세요 (11자리 숫자)',
      errorMessage: '숫자만 입력해주세요 (11자리 숫자)',
      successMessage: '알맞게 입력하였습니다.',
   },
};
