import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useLayout } from 'hooks/useLayout';
import { useAlert } from 'hooks/useAlert';
import { API_PATH } from 'constant';
import { IPaging } from 'api/axios-interface';
import Board from 'components/common/board';
import Text from 'components/ui/text';

interface IProduct {
   body: string;
   id: number;
   itemName: string;
   lender: string;
   rentalAt: string;
   rentalEnd: string;
   rentalStart: string;
   title: string;
   userClass: string;
}

export default function RentalProduct() {
   const { id } = useParams<{ id: string }>();
   const { setTitle, setBackButton } = useLayout();
   const { alert } = useAlert();
   const [product, setProduct] = React.useState<IProduct[] | null>(null);
   const [isEmpty, setIsEmpty] = React.useState(false);

   const fetchProduct = async () => {
      try {
         const { data } = await axios.get<IPaging<IProduct>>(API_PATH.POST.RENTAL.ITEM_DETAIL(id ?? '0'));
         setProduct(data.content);
         setTitle(data.content[0]?.itemName ?? '');
      } catch (e) {
         alert(e);
      }
   };

   useEffect(() => {
      setBackButton(true);
      fetchProduct();
   }, [id]);

   useEffect(() => {
      if (product && product.length === 0) {
         setIsEmpty(true);
      }
   }, [product]);

   return (
      <Board>
         {isEmpty ? (
            <Board.NoData />
         ) : (
            product?.map((item) => (
               <Board.Cell key={item.id}>
                  <Text length={4}>{item.title}</Text>
               </Board.Cell>
            ))
         )}
      </Board>
   );
}
