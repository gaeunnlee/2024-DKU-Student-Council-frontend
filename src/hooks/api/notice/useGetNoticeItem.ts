import { API_PATH } from '@constants/api';
import { get } from '@libs/api';
import { useSuspenseQuery } from '@tanstack/react-query';

import { ContentResponse } from '@/types/page';

interface NoticeContentResponse extends ContentResponse {
   liked: boolean;
   mine: boolean;
}

export const useGetNoticeItem = (id: string) => {
   return useSuspenseQuery<NoticeContentResponse>({
      queryKey: ['getNoticeItem'],
      queryFn: () => get(API_PATH.NOTICE.ID(id)),
   });
};
