import axios from 'axios';
import { API_PATH } from 'constant';
import { useEffectOnce } from 'hooks/useEffectOnce';
import React from 'react';

export default function PetitionBoard() {
   /* 청원게시판 글 목록 불러오기 */
   useEffectOnce(() => {
      fetchBoard();
   });

   const fetchBoard = () => {
      axios.get(API_PATH.POST.PETITON).then(({ data }) => {
         console.log(data.content);
      });
   };
   return <>청원게시판</>;
}
