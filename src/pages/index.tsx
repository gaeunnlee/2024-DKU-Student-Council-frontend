import Button from 'components/ui/button';
import { useModal } from 'hooks/useModal';
import React from 'react';

export default function Main() {
   const { open } = useModal();
   return (
      <div>
         <Button
            onClick={() =>
               open(<div>테스트 모달</div>, {
                  title: '테스트',
                  accept: {
                     text: '확인',
                     onClick: () => {
                        console.log('확인');
                     },
                  },
                  cancel: {
                     text: '취소',
                     onClick: () => {
                        console.log('취소');
                     },
                  },
               })
            }
         >
            모달 열기
         </Button>
      </div>
   );
}
