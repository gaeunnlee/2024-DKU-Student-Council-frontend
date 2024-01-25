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

export interface IFormInfo {
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
