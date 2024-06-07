import { Button } from '@/components/ui/button';
import { TradingInfo } from '@/types';
import { EnterFullScreenIcon, ZoomInIcon, ZoomOutIcon } from '@radix-ui/react-icons';
import Highcharts from 'highcharts';
import HighchartsReact, { HighchartsReactRefObject } from 'highcharts-react-official';
import HighchartsFullScreen from 'highcharts/modules/full-screen';
import HighchartsMap from 'highcharts/modules/map';
import React from 'react';
import { TradingUnit } from '../helper';

HighchartsMap(Highcharts);
HighchartsFullScreen(Highcharts);

type Props = {
  data: TradingInfo[];
  activeUnit: TradingUnit;
};

const TradingArea: React.FC<Props> = ({ data, activeUnit }) => {
  const [mapData, setMapData] = React.useState([]);
  const chartRef = React.useRef<HighchartsReactRefObject | null>(null);

  React.useEffect(() => {
    chartRef.current?.chart.showLoading();
    fetch('https://code.highcharts.com/mapdata/custom/world.topo.json')
      .then((response) => response.json())
      .then((data) => setMapData(data))
      .catch((error) => console.error(error))
      .finally(() => chartRef.current?.chart.hideLoading());
  }, []);

  const options = React.useMemo<Highcharts.Options>(
    () => ({
      chart: {
        map: mapData,
        marginTop: 50,
        marginBottom: 50,
        marginLeft: 20,
        marginRight: 20,
        height: 600,
        backgroundColor: '#f9f9f9',
      },
      title: { text: '' },
      legend: {
        layout: 'vertical',
        borderWidth: 0,
        floating: true,
        verticalAlign: 'bottom',
        align: 'left',
        x: 0,
        y: 0,
        reversed: false,
      },

      mapNavigation: {
        enabled: true,
        enableButtons: false,
      },

      colorAxis: {
        min: 1,
        type: 'linear',
        minColor: '#EEEEFF',
        maxColor: '#4438CA',
        labels: {
          enabled: false,
        },
        stops: [
          [0, '#EFEFFF'],
          [0.5, '#4444FF'],
          [1, '#4438CA'],
        ],
      },
      series: [
        {
          data: data,
          joinBy: ['iso-a2', 'code'],
          type: 'map',
        },
      ],
      tooltip: {
        useHTML: true,
        formatter: function () {
          const item = this.point as unknown as TradingInfo & { name: string };
          return `
          <div class="px-2 py-2 bg-slate-800 rounded-sm text-white block">
            <p class="text-base">${item.formatter.percentage}</p>
            <div class="flex gap-1 align-center my-1" style="padding-right: 32px;">
              <img src="${item.formatter.flag}" class="object-contain" />
              <span class="text-xs">${item.name}</span>
            </div>
            <p class="text-xs mb-0">${item.formatter.value} <span class="text-xs text-gray-400 capitalize">${activeUnit}</span></p>
          </div>
          `;
        },
        padding: 0,
      },
    }),
    [activeUnit, data, mapData],
  );

  const handleMapAction = React.useCallback(
    (action: 'zoomIn' | 'zoomOut' | 'fullScreen') => {
      if (chartRef.current) {
        switch (action) {
          case 'zoomIn':
            chartRef.current.chart?.mapZoom(0.5);
            break;
          case 'zoomOut':
            chartRef.current.chart?.mapZoom(2);
            break;
          case 'fullScreen':
            chartRef.current.chart?.fullscreen?.open?.();
            break;
          default:
            break;
        }
      }
    },
    [chartRef],
  );

  return (
    <div className="relative">
      <HighchartsReact highcharts={Highcharts} constructorType="mapChart" options={options} ref={chartRef} />
      <div className="absolute right-3 top-3 flex gap-1">
        <Button
          onClick={() => handleMapAction('fullScreen')}
          variant="ghost"
          size="sm"
          className="h-8 w-8 p-1 text-gray-500"
        >
          <EnterFullScreenIcon className="h-5 w-5 stroke-1" />
        </Button>
        <Button
          onClick={() => handleMapAction('zoomIn')}
          variant="ghost"
          size="sm"
          className="h-8 w-8 p-1 text-gray-500"
        >
          <ZoomInIcon className="h-6 w-6 stroke-1" />
        </Button>
        <Button
          onClick={() => handleMapAction('zoomOut')}
          variant="ghost"
          size="sm"
          className="h-8 w-8 p-1 text-gray-500"
        >
          <ZoomOutIcon className="h-6 w-6 stroke-1" />
        </Button>
      </div>
    </div>
  );
};

export default React.memo(TradingArea);
