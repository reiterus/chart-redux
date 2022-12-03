import {createSlice} from '@reduxjs/toolkit';
import {randFloat, randColLabel} from '../helper/utility'

const initialState = {
  items: {},
  status: 'idle',
};

// делаем слайс
export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // заполняем магазин данными
    fillStore: (state, action) => {
      state.items = action.payload
    },
    // добавляем новый гаджет
    addGadget: (state, action) => {
      const gadget = {[action.payload]: [[randColLabel(), randFloat()]]}
      Object.assign(state.items, gadget)
    },
    // добавляем колонку в диаграмму
    addColumn: (state, action) => {
      state.items[action.payload].push([randColLabel(), randFloat()])
    },
    // удаляем колонку из диаграммы
    removeColumn: (state, action) => {
      state.items[action.payload].pop()
    },
  },
});

// экспортируем редьюсеры
export const {fillStore, addGadget, addColumn, removeColumn} = productSlice.actions;

// выбираем определённую категорию гаджетов/вещей
export const selectCategory = (state, category) => state.product.items[category] ?? [];

// выбираем список пунктов меню
export const selectMenu = (state) => Object.keys(state.product.items)

export default productSlice.reducer;
