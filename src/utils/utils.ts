import { Coin } from '../models/coin';

export default class Utils {
  static mapCoinData = ({ id, name, links, image, market_data, last_updated }: Coin) => {
    const coinData: Coin = { id, name, links, image, market_data, last_updated };
    return coinData;
  };
}
