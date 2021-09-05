import { Coin } from "./coin";

export interface CoinGeckoBaseResponse {
    success: boolean;
    message: string;
    code: number;
    data: Coin;
}