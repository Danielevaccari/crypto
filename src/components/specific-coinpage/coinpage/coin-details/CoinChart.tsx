import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { IMarketChartData } from '../../../../interfaces/interfaces';
import { CoinAPI } from '../../../../services/coingecko/coingeckoApi.service';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  coinId: string | undefined
}

interface Dataset {
  label: string,
  backgroundColor: string,
  borderColor: string,
  data: number[],
}

const data = {
  labels: [],
  datasets: Array<Dataset>,
};

const CoinChart: React.FC<Props> = ({ coinId }) => {
  const [chartData, setChartData] = React.useState<IMarketChartData>();

  React.useEffect(() => {
    if (coinId) {
      CoinAPI.getMarketChart(coinId).then((response) => {
        setChartData(response);
      });
    }
  }, []);

  return(
    <Line data={{
      labels: chartData?.prices.map((price) => {
        let date = new Date(price[0]);
        return date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
      }),
      datasets: [{
        label: 'Price',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: chartData?.prices.map((price) => price[1]),
      }]
    }}></Line>
  );
};

export default CoinChart;