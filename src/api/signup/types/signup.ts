export interface IVerifyInfo {
   dkuStudentId: string;
   dkuPassword: string;
}

export interface StudentVerifyResponse {
   signupToken: string;
   student: {
      studentName: string;
      studentId: string;
      major: string;
   };
}

export interface IUserRegistration {
   nickname: string;
   password: string;
}

export type confirmCodeParams = {
   signupToken: string;
   code: string;
};

export type SignupParams = {
   signupInfo: IUserRegistration;
   signupToken: string;
};

export type PhoneVerifyParams = {
   signupToken: string;
   phoneNumber: string;
};
