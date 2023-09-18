import { AxiosError } from 'axios';

export type MessagedAxiosError = AxiosError<{
   message: string[] | string;
}>;
