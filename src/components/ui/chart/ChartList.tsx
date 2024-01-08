import React from 'react';
import { IPetitionStatistic } from './DoughnutChart';

export default function ChartList({
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
               <span>({(item.agreeCount / sum) * 100}%)</span>
            </li>
         ))}
      </ol>
   );
}
