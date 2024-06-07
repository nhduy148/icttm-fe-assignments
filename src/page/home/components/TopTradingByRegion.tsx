import { toPercent } from '@/lib';
import { TradingInfo } from '@/types';
import flatMap from 'lodash-es/flatMap';
import groupBy from 'lodash-es/groupBy';
import orderBy from 'lodash-es/orderBy';
import sumBy from 'lodash-es/sumBy';
import take from 'lodash-es/take';
import toPairs from 'lodash-es/toPairs';
import React from 'react';
import { TradingUnit } from '../helper';

interface IProps {
  data: TradingInfo[];
  activeUnit: TradingUnit;
}

const TopTradingByRegion: React.FC<IProps> = ({ data, activeUnit }) => {
  const total = sumBy(flatMap(Object.values(data)), 'value');
  const renderItem = React.useCallback((item: TradingInfo) => {
    return (
      <div className="flex items-center" key={`${item.formatter.region}-${item.formatter.name}`}>
        <p className="flex-1 text-left text-xs text-gray-500">
          <div className="align-center flex gap-1">
            <img
              width="20"
              height="20"
              src={item.formatter.flag}
              className="object-contain"
              alt={item.formatter.name}
            />
            <span className="text-xs leading-[1.2]">{item.formatter.name}</span>
          </div>
        </p>
        <p className="text-right text-xs capitalize text-gray-500">{item.formatter.value}</p>
      </div>
    );
  }, []);

  const formattedData = React.useMemo(() => {
    const grouppedData = groupBy(data, (item) => item.formatter.region);
    const rawParsedData = toPairs(grouppedData);
    const parsedData = rawParsedData.map(([label, items]) => {
      const totalOfRegion = sumBy(items, 'value');
      return { totalOfRegion, items, label };
    });
    return orderBy(parsedData, ['totalOfRegion'], ['desc']);
  }, [data]);

  const renderGroup = React.useCallback(
    ({ label, items, totalOfRegion }: typeof formattedData[0], index: number) => {
      const totalPercent = toPercent(totalOfRegion, total);

      return (
        <div className="min-w-[260px] flex-1 flex-col gap-2 rounded-sm border border-gray-300 p-2" key={index}>
          <p className="text-center text-base font-bold text-gray-500">{label}</p>
          <p className="text-primary text-nowrap text-center text-2xl font-bold">{totalPercent}</p>
          <div className="flex-col gap-1">
            <div className="flex items-center">
              <p className="flex-1 text-left text-xs font-bold text-gray-500">Country</p>
              <p className="flex-1 text-right text-xs font-bold capitalize text-gray-500">{activeUnit}</p>
            </div>
            {take(orderBy(items, 'value', 'desc'), 10).map(renderItem)}
          </div>
        </div>
      );
    },
    [activeUnit, renderItem, total],
  );
  return <div className="flex flex-wrap gap-2">{formattedData.map(renderGroup)}</div>;
};

export default React.memo(TopTradingByRegion);
