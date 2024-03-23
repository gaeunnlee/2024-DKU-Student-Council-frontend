export interface WithReactChildren {
   children?: React.ReactNode;
}

export interface IdPassword {
   studentId: string;
   password: string;
}

export interface ErrorResponse {
   code: number;
   message: string;
}
