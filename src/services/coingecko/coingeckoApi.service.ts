import axios, { AxiosResponse } from 'axios';
import { PATH_TOP_100_CRYPTO } from '../../utils/constants';
import { PATH_SPECIFIC_CRYPTO_DATA_BY_ID } from '../../utils/constants';
import { Coin } from '../../models/coin.interface';

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
  getCoins(): Promise<Coin[]> {
    return requests.get(PATH_TOP_100_CRYPTO);
  },

  getSpecificCoin(coinID: string | undefined) {
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