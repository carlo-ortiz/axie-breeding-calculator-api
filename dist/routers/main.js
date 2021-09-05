"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const constants_1 = require("../utils/constants");
const utils_1 = __importDefault(require("../utils/utils"));
const router = express_1.default.Router();
const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();
router.get('/coins', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = {
        tickers: false,
        community_data: false,
        developer_data: false,
        localization: false,
        sparkline: false,
    };
    try {
        const { data: ethData, code: ethCode, success: ethSuccess } = yield CoinGeckoClient.coins.fetch(constants_1.COINS.ETH.id, params);
        const { data: slpData, code: slpCode, success: slpSuccess } = yield CoinGeckoClient.coins.fetch(constants_1.COINS.SLP.id, params);
        const { data: axsData, code: axsCode, success: axsSuccess } = yield CoinGeckoClient.coins.fetch(constants_1.COINS.AXS.id, params);
        const coins = [utils_1.default.mapCoinData(ethData), utils_1.default.mapCoinData(slpData), utils_1.default.mapCoinData(axsData)];
        if (ethSuccess)
            res.send(coins).status(200);
    }
    catch (error) {
        res.status(400).send(`An Error Occurred: ${error}`);
    }
}));
exports.default = router;
//# sourceMappingURL=main.js.map