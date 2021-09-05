interface Currency {
  aud: number;
  btc: number;
  cad: number;
  cny: number;
  eth: number;
  eur: number;
  gbp: number;
  php: number;
  sgd: number;
  usd: number;
}

interface ReposUrl {
  github: string[];
  bitbucket: any[];
}

interface Links {
  homepage: string[];
  blockchain_site: string[];
  twitter_screen_name: string;
  facebook_username: string;
  bitcointalk_thread_identifier?: any;
  telegram_channel_identifier: string;
  subreddit_url: string;
  repos_url: ReposUrl;
}

interface Image {
  thumb: string;
  small: string;
  large: string;
}

interface CurrentPrice extends Currency {}

interface High24h extends Currency {}

interface Low24h extends Currency {}

interface PriceChange24hInCurrency extends Currency {}

interface PriceChangePercentage24hInCurrency extends Currency {}

interface MarketData {
  current_price: CurrentPrice;
  high_24h: High24h;
  low_24h: Low24h;
  price_change_24h_in_currency: PriceChange24hInCurrency;
  price_change_percentage_24h_in_currency: PriceChangePercentage24hInCurrency;
  last_updated: Date;
}

export interface Coin {
  id: string;
  name: string;
  links: Links;
  image: Image;
  market_data: MarketData;
  last_updated: Date;
}
