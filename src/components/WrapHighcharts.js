import React, {useContext} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {ucFirst} from '../helper/utility';
import {ChartContext} from "./ChartContext";

/**
 * Chart Wrapper
 * @param category
 * @param items
 * @returns {JSX.Element}
 * @constructor
 */
function WrapHighcharts({items}) {
  const [category,] = useContext(ChartContext);
  const options = {
    accessibility: {
      enabled: false
    },
    chart: {
      type: 'column'
    },
    title: {
      text: 'Рейтинг: ' + ucFirst(category)
    },
    xAxis: {
      type: 'category',
      labels: {
        rotation: 0,
        style: {
          fontSize: '14px'
        }
      },
      title: {
        text: 'Название'
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Рейтинг'
      },
      labels: {
        rotation: 0,
        style: {
          fontSize: '14px'
        }
      },
    },
    legend: {
      enabled: false
    },
    series: [
      {
        data: items
      }
    ]
  };

  return (
    <div className="wrap-highcharts">
      <HighchartsReact highcharts={Highcharts} options={options}/>
    </div>
  );
}

export default WrapHighcharts;
