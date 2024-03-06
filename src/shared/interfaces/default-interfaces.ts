export interface IWithReactChildren {
   children?: React.ReactNode;
}

export interface IIdPassword {
   studentId: string;
   password: string;
}

export interface ErrorResponse {
   code: number;
   message: string;
}
