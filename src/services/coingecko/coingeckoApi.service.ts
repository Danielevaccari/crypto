import axios, { AxiosResponse } from 'axios';
import { PATH_TOP_100_CRYPTO } from '../../utils/constants';
import { PATH_SPECIFIC_CRYPTO_DATA_BY_ID } from '../../utils/constants';
import { ICoin } from '../../models/coin.interface';
import { ICryptoCoin } from '../../interfaces/interfaces';

const instance = axios.create({
  baseURL: process.env.COINGECKO_API_URL,
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  async get(url: string) {
    const res = await instance.get(url);
    return responseBody(res);
  },
};

export const CoinAPI = {
  getCoins(): Promise<ICoin[]> {
    return requests.get(PATH_TOP_100_CRYPTO);
  },

  getSpecificCoin(coinID: string): Promise<ICryptoCoin> {
    return requests.get(PATH_SPECIFIC_CRYPTO_DATA_BY_ID + coinID);
  },
};

// export async function getCoinsData(): Promise<Array<object>> {
//   const config: object = {
//     Accept: 'application/json',
//   };

//   const res = await axios.get<Array<Coin>>(PATH_TOP_100_CRYPTO, config).catch((error) => console.log(error));

//   return res ? res.data : [];
// }