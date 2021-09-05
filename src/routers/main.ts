import express from 'express';

import { Coin } from '../models/coin';
import { CoinGeckoBaseResponse } from '../models/coingecko-base-response';
import { COINS } from '../utils/constants';
import Utils from '../utils/utils';

const router = express.Router();

const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

router.get('/coins', async (_req, res) => {
  const params = {
    tickers: false,
    community_data: false,
    developer_data: false,
    localization: false,
    sparkline: false,
  };
  try {
    const { data: ethData, code: ethCode, success: ethSuccess }: CoinGeckoBaseResponse = await CoinGeckoClient.coins.fetch(COINS.ETH.id, params);
    const { data: slpData, code: slpCode, success: slpSuccess }: CoinGeckoBaseResponse = await CoinGeckoClient.coins.fetch(COINS.SLP.id, params);
    const { data: axsData, code: axsCode, success: axsSuccess }: CoinGeckoBaseResponse = await CoinGeckoClient.coins.fetch(COINS.AXS.id, params);

    const coins: Coin[] = [Utils.mapCoinData(ethData), Utils.mapCoinData(slpData), Utils.mapCoinData(axsData)];
    if (ethSuccess) res.send(coins).status(200);
  } catch (error) {
    res.status(400).send(`An Error Occurred: ${error}`);
  }
});

export default router;
