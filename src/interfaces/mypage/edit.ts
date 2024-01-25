export interface IMyInfo {
   studentId: string;
   username: string;
   nickname: string;
   yearOfAdmission: string;
   major: string;
   department: string;
   phoneNumber: string;
   writePostCount: number;
   commentedPostCount: number;
   likedPostCount: number;
   admin: boolean;
}

export interface IInputValue {
   nickname: string;
   password: string;
   passwordConfirm: string;
   major: string;
   phoneNumber: string;
   verficationCode: string;
}
export interface IFormInfo {
   id: string;
   title: string;
   inputType: string;
   placeholder?: string;
   button?: string;
   bigButton?: string;
   validation?: IValidationInfo;
}

export interface IValidationInfo {
   result: null | boolean;
   defaultMessage?: string;
   errorMessage: string;
   successMessage: string;
}
