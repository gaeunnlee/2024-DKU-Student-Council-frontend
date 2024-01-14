import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

export interface IChartData {
   labels: string[];
   data: number[];
}

export default function DoughnutChart({ chartData, sum }: { chartData: IChartData; sum: number }) {
   ChartJS.register(ArcElement, Tooltip, Legend, Title, ChartDataLabels);

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
         // props으로 받아온 총 투표 수가 업데이트시 반영되지 않아 다시 작성
         let total = 0;
         chart.data.datasets[0].data.forEach((item) => {
            if (typeof item === 'number') {
               total += item;
            }
         });
         ctx.save();
         ctx.font = 'bold 20px sans-serif';
         ctx.textAlign = 'center';
         ctx.textBaseline = 'middle';
         ctx.fillText(`${total}명`, xCoor, yCoor);
      },
   };

   return <Doughnut data={data} plugins={[textCenter]} />;
}
