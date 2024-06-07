export type TradingInfo = {
  value: number;
  code: string;
  formatter: {
    value: string;
    percentage: string;
    flag: string;
    name: string;
    region: string;
  };
};

export type Trading = {
  code: string;
  name: string;
  shipments: number;
  weight: number;
  teu: number;
  'value-usd': number;
  region: string;
  icon: string;
  proportion: string;
};
