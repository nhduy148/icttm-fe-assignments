import { TradingAreaData } from '@/assets/data';
import { FlagIcons } from '@/assets/icons';
import { formatNumber, sleep, toPercent } from '@/lib';
import { Trading, TradingInfo } from '@/types';
import maxBy from 'lodash-es/maxBy';

export type TradingUnit = 'shipments' | 'weight' | 'teu' | 'value-usd';

export const getChartData = async (type: TradingUnit): Promise<TradingInfo[]> => {
  const _total = maxBy(TradingAreaData as any[], type)[type];
  const formattedData = TradingAreaData.map((item) => {
    const value = item[type];
    return {
      code: item.code,
      value: value,
      formatter: {
        value: formatNumber(value),
        percentage: toPercent(value, _total),
        flag: (FlagIcons as any)?.[item.code as any],
        name: item.name as string,
        region: item.region,
      },
    };
  });
  sleep(300);
  return Promise.resolve(formattedData);
};

export const getData = async (): Promise<Trading[]> => {
  sleep(300);
  const result = TradingAreaData.map((item) => ({
    ...item,
    name: item.name as string,
    icon: (FlagIcons as any)?.[item.code as any],
    proportion: '0',
  }));
  const total = maxBy(result, 'shipments')?.shipments ?? 0;
  result.forEach((item) => {
    item.proportion = toPercent(item.shipments, total, true);
  });
  return Promise.resolve(result);
};
