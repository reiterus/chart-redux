import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {selectCategory} from '../app/productSlice';
import WrapHighcharts from './WrapHighcharts';
import ActionColumn from "./ActionColumn";
import ActionGadget from "./ActionGadget";
import DropDownMenu from "./DropDownMenu";
import styles from "./Styles.module.css";
import {ChartContext} from "./ChartContext";

/**
 * Main Component
 * @returns {JSX.Element}
 * @constructor
 */
function EntryPoint() {
  const [category, setCategory] = useState('smartphones');
  const chartItems = useSelector(state => selectCategory(state, category))

  return (
    <div className="pix-robotics">
      {/* отрисовываем диаграмму только по готовности данных */}
      {chartItems && chartItems.length > 0
        ?
        <>
          {/* оборачиваем всё в контекст */}
          <ChartContext.Provider value={[category, setCategory]}>
            {/* выводим диаграмму */}
            <WrapHighcharts items={chartItems}/>
            <center className={styles.center}>
              <h3 className={styles.marginTop}>Выберите что-нибудь</h3>
              {/* список гаджетов в выпадающем меню */}
              <DropDownMenu/>
              <h3 className={styles.marginTop}>Действия над магазином</h3>
              {/* добавляем новый гаджет */}
              <ActionGadget/>
              {/* добавляем/удаляем колонки диаграммы */}
              <ActionColumn/>
            </center>
          </ChartContext.Provider>
        </>
        : <center className={styles.loading}>Loading...</center>
      }
    </div>
  );
}

export default EntryPoint;
