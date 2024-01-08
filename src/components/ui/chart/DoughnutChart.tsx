import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

export interface IPetitionStatistic {
   agreeCount: number;
   department: string;
}

export default function DoughnutChart({
   statisticList,
   sum,
}: {
   statisticList: IPetitionStatistic[];
   sum: number;
}) {
   const [chartData, setChartData] = useState({ labels: [''], data: [0] });
   ChartJS.register(ArcElement, Tooltip, Legend, Title, ChartDataLabels);

   useEffect(() => {
      setChartData({ labels: [], data: [] }); // 차트 초기화

      /* 단과대 투표 데이터 가공 */
      statisticList.forEach((item) => {
         setChartData((prev) => {
            return {
               labels: [...prev.labels, item.department],
               data: [...prev.data, item.agreeCount],
            };
         });
      });
   }, [statisticList]);

   const data = {
      labels: chartData.labels,
      datasets: [
         {
            label: '동의 수',
            data: chartData.data,
            // 투표율 데이터 라벨로 표시
            datalabels: {
               color: 'white',
               font: {
                  size: 15,
               },
               formatter: (value: number) => {
                  const percentage = `${Math.floor((value / sum) * 100)}%`;
                  return percentage;
               },
            },
            backgroundColor: ['#010101', '#868686', '#3A3A3A', '#C7C7C7', '#E9E9E9'],
            borderColor: ['#010101', '#868686', '#3A3A3A', '#C7C7C7', '#E9E9E9'],
            borderWidth: 1,
         },
      ],
   };

   // 차트 중앙에 총 투표 수 배치
   const textCenter = {
      id: 'textCenter',
      afterDatasetsDraw: (chart: ChartJS<'doughnut', number[], unknown>) => {
         const ctx = chart.ctx;
         const xCoor = chart.chartArea.left + (chart.chartArea.right - chart.chartArea.left) / 2;
         const yCoor = chart.chartArea.top + (chart.chartArea.bottom - chart.chartArea.top) / 2;
         ctx.save();
         ctx.font = 'bold 20px sans-serif';
         ctx.textAlign = 'center';
         ctx.textBaseline = 'middle';
         ctx.fillText(`${sum}명`, xCoor, yCoor);
      },
   };

   return <Doughnut data={data} plugins={[textCenter]} />;
}
