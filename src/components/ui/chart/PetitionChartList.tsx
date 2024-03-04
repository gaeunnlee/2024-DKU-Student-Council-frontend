import { IPetitionStatistic } from 'pages/petition/[id]';
import React from 'react';

export default function PetitionChartList({
   statisticList,
   sum,
}: {
   statisticList: IPetitionStatistic[];
   sum: number;
}) {
   return (
      <ol className='py-5 flex flex-col gap-2'>
         {statisticList.map((item, idx) => (
            <li key={idx} className={`flex justify-between ${idx === 0 && 'font-bold'}`}>
               <span>
                  {idx + 1}. {item.department}
               </span>
               <span>({Math.floor((item.agreeCount / sum) * 100)}%)</span>
            </li>
         ))}
      </ol>
   );
}
