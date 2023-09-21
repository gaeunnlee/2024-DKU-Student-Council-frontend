import axios from 'axios';
import { useEffectOnce } from 'hooks/useEffectOnce';
import { useModal } from 'hooks/useModal';
import React from 'react';

interface Banner {
   id: number;
   redirectUrl: string;
   url: string;
}

export default function Main() {
   const { open } = useModal();
   // const [banner, setBanner] = React.useState<Banner[]>([{ id: 0, redirectUrl: '', url: '' }]);

   useEffectOnce(() => {
      axios.get<Banner[]>('/main/carousel').then((res) => {
         // setBanner(res.data);
         console.log(res.data);
      });
   });

   return (
      <main>
         <div className='px-4 pt-5 pb-10'>
            <h1 className='text-4xl font-bold'>Dankook University</h1>
            <h2 className='text-2xl font-medium mb-2'>도전하는 지성, 세계를 향한 창조</h2>
            <span className='text-xs'>DANKOOK UNIVERSITY STUDENT COUNCIL</span>
         </div>
         <img
            src={
               'https://kr1-api-object-storage.nhncloudservice.com/v1/AUTH_34f4838a2b3047f39ac9cb0701558e46/main-storage/carousel-d2dd283a-bb34-43a9-9180-9d93bf1c4c37.png'
            }
            style={{ width: '100vw' }}
            alt='banner'
         />
         <button
            onClick={() => {
               open(<div>테스트 모달</div>, {
                  title: '테스트 모달 제목',
                  cancel: {
                     text: '닫기',
                     onClick: () => {
                        console.log('닫기');
                     },
                  },
                  accept: {
                     text: '확인',
                     onClick: () => {
                        console.log('확인');
                     },
                  },
               });
            }}
         >
            모달 열기
         </button>
      </main>
   );
}
