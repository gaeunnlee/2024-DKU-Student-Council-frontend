import React, { useEffect } from 'react';
import { useLayout } from 'hooks/useLayout';
import { useParams } from 'react-router-dom';
import { useAlert } from 'hooks/useAlert';
import { API_PATH } from 'constant';
import axios from 'axios';

export default function RentalProduct() {
   const { id } = useParams<{ id: string }>();
   const { setTitle, setBackButton } = useLayout();
   const { alert } = useAlert();

   const fetchProduct = async () => {
      try {
         const { data } = await axios.get(API_PATH.RENTAL.ITEM_DETAIL(id ?? '0'));
         console.log(data);
         setTitle('테니');
      } catch (e) {
         alert(e);
      }
   };

   useEffect(() => {
      setBackButton(true);
      fetchProduct();
   }, [id]);
   return <div>asd</div>;
}
