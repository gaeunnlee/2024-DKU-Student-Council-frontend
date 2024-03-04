import { client } from 'api';
import { IFormInfo } from './types/upload';
import { CONSTANTS } from 'constants/api';

export const uploadForm = async ({ formInfo, API_PATH }: { formInfo: IFormInfo; API_PATH: string }) => {
   const token = localStorage.getItem(CONSTANTS.atk_key);

   try {
      const data = await client.post<IFormInfo>(API_PATH, formInfo, {
         headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
         },
      });

      return data;
   } catch (e) {
      console.log(e);
   }
};
