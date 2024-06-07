import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trading, TradingInfo } from '@/types';
import Highcharts from 'highcharts';
import HighchartsMap from 'highcharts/modules/map';
import React from 'react';
import TopTradingByRegion from './components/TopTradingByRegion';
import TradeCountryTable from './components/TradeCountryTable';
import TradingArea from './components/TradingArea';
import { TradingUnit, getChartData, getData } from './helper';

HighchartsMap(Highcharts);

function HomePage() {
  const [chartData, setChartData] = React.useState<TradingInfo[]>([]);
  const [chartDataType, setChartDataType] = React.useState<TradingUnit>('shipments');
  const [tableData, setTableDate] = React.useState<Trading[]>([]);

  React.useEffect(() => {
    (async (type: TradingUnit) => {
      try {
        const response = await getChartData(type);
        setChartData(response);
      } catch (error) {
        console.log(error);
      }
    })(chartDataType);
  }, [chartDataType]);

  React.useEffect(() => {
    (async () => {
      try {
        const response = await getData();
        setTableDate(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <main className="bg-foreground py-10">
      <div className="container space-y-4">
        <Card className="p-sm-2 space-y-2 overflow-hidden border-none p-4 shadow-sm">
          <div className="flex items-center justify-between px-2">
            <h6 className="text-xl font-semibold">Top 5 Trading Area</h6>
            <div className="flex items-center gap-2">
              <span className="text-sm">Unit By</span>
              <Tabs value={chartDataType}>
                <TabsList className="h-auto p-0">
                  <TabsTrigger onClick={() => setChartDataType('shipments')} className="text-xs" value="shipments">
                    Shipments
                  </TabsTrigger>
                  <TabsTrigger onClick={() => setChartDataType('weight')} className="text-xs" value="weight">
                    Weight
                  </TabsTrigger>
                  <TabsTrigger onClick={() => setChartDataType('teu')} className="text-xs" value="teu">
                    Teu
                  </TabsTrigger>
                  <TabsTrigger
                    onClick={() => setChartDataType('value-usd')}
                    className="text-xs"
                    value="value-usd"
                    disabled
                  >
                    Value (USD)
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
          <TradingArea data={chartData} activeUnit={chartDataType} />
          <div>
            <TopTradingByRegion data={chartData} activeUnit={chartDataType} />
          </div>
        </Card>
        <Card className="p-sm-2 space-y-2 overflow-hidden border-none p-4 shadow-sm">
          <div className="flex items-center justify-between px-2">
            <h6 className="text-xl font-semibold">Trade Country Table Data</h6>
            <Select value="export">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a action" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="import">Import</SelectItem>
                  <SelectItem value="export">Export</SelectItem>
                  <SelectItem value="all">All</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <TradeCountryTable data={tableData} />
        </Card>
      </div>
    </main>
  );
}

export default React.memo(HomePage);
