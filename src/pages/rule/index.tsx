import Board from '@components/common/board';
import { Date } from '@components/ui/text/board';
import { HEADING_TEXT, HEADING_STYLE } from '@constants/heading';
import { useGetRule } from '@hooks/api/rule/useGetRule';
import { RuleContentResponse } from '@hooks/api/rule/useGetRule';
import { useEffectOnce } from '@hooks/useEffectOnce';
import { useLayout } from '@hooks/useLayout';
import React from 'react';

export default function RuleBoard() {
   const { setLayout } = useLayout();
   const { data: rule } = useGetRule();

   useEffectOnce(() => {
      setLayout({
         title: HEADING_TEXT.COUNCIL.HEAD,
         backButton: true,
         isMain: false,
         fullscreen: false,
         headingText: HEADING_TEXT.COUNCIL.HEAD,
         subHeadingText: HEADING_TEXT.RULE.SUBHEAD,
         headingStyle: HEADING_STYLE.COUNCIL.HEAD,
         subHeadingStyle: HEADING_STYLE.COUNCIL.SUBHEAD,
         rounded: true,
         dropDown: HEADING_STYLE.COUNCIL.DROPDOWN,
      });
   });

   const handleOpenFile = (item: RuleContentResponse) => {
      window.open(item.files[0].url);
   };

   return (
      <Board>
         {rule?.pages.map((page) =>
            page.content.map((item) => (
               <Board.Cell key={item.id} onClick={() => handleOpenFile(item)}>
                  <div className='flex gap-2 p-3'>
                     <p className='grow text-center truncate'>{item.title}</p>
                     <Date date={item.createdAt} />
                  </div>
               </Board.Cell>
            )),
         )}
      </Board>
   );
}
