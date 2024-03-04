import { useMutation } from 'react-query';
import { useAlert } from 'hooks/useAlert';
import { uploadForm } from 'api/upload/upload';
import { useNavigate } from 'react-router-dom';

export const usePostFormUpload = (NAVIGATE_PATH: string) => {
   const { alert } = useAlert();
   const navigate = useNavigate();

   return useMutation({
      mutationFn: uploadForm,
      onSuccess: (data) => {
         if (data !== undefined && data.status === 200) {
            navigate(NAVIGATE_PATH);
            alert('완료');
         }
      },
   });
};
