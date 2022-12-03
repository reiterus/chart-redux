import styles from "./Styles.module.css";
import {addColumn, removeColumn} from "../app/productSlice";
import React, {useCallback, useContext, useMemo, useReducer} from "react";
import {useDispatch} from "react-redux";
import {ChartContext} from "./ChartContext";
import Button from "./Button";

/**
 * Chart Column: Add/Remove
 * @returns {JSX.Element}
 * @constructor
 */
function ActionColumn() {
  const dispatch = useDispatch();
  const [category,] = useContext(ChartContext);

  // хранилище счетчиков действий
  const initCountColumnState = {added: 0, removed: 0};

  // обработчик действий добавления/удаления
  const reducer = (state, action) => {
    switch (action.type) {
      case 'add':
        return {...state, added: state.added + 1}
      case 'remove':
        return {...state, removed: state.removed + 1}
      default:
        return state
    }
  }

  // пример использования useReducer
  const [colState, colAction] = useReducer(reducer, initCountColumnState);

  // мемоизируем callback обработки кликов
  const clickAddRemove = useCallback(action => {
    if (action === 'add') {
      dispatch(addColumn(category))
    } else if (action === 'remove') {
      dispatch(removeColumn(category))
    }
    colAction({type: action});
  }, [category, dispatch])

  // избыточно мемоизируем подсчет всех действий: и добавления, и удаления
  const memoCountActions = useMemo(
    () => colState.added + colState.removed,
    [colState]
  )

  return (
    <>
      <p>
        {/* добавляем колонку к диаграмме */}
        <Button text={`Add Colum`} handleClick={() => clickAddRemove('add')}/>
        {/* удаляем колонку из диаграммы */}
        <Button text={`Remove Colum`} handleClick={() => clickAddRemove('remove')}/>
      </p>
      <h3 className={styles.marginTop}>Работа с колонками</h3>
      <p>Добавлено: {colState.added} шт.</p>
      <p>Удалено: {colState.removed} шт.</p>
      <p>Всего: {memoCountActions} шт.</p>
    </>
  )
}

export default ActionColumn;