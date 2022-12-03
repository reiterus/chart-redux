import EntryPoint from "./components/EntryPoint";
import styles from "./components/Styles.module.css";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getProducts} from "./helper/utility";
import {fillStore} from "./app/productSlice";
import itemsLocal from "./data/itemsLocal";

/**
 * Application
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
  const dispatch = useDispatch();

  // наполнение магазина на старте
  useEffect(() => {
    (async () => {
      // запрос данных из API
      const response = await fetch(`https://dummyjson.com/products`)
      const body = await response.json();
      const items = (response.ok && body.length)
        ? body.products
        : itemsLocal.products

      // заполняем магазин подготовленными данными
      const dataToStore = getProducts(items)
      dispatch(fillStore(dataToStore))
    })()
  }, [dispatch])

  return (
    <div className={styles.app}>
      <EntryPoint/>
    </div>
  );
}

export default App;
