import styles from "./Styles.module.css";
import {ucFirst} from "../helper/utility";
import React, {useContext} from "react";
import {useSelector} from "react-redux";
import {selectMenu} from "../app/productSlice";
import {ChartContext} from "./ChartContext";

/**
 * Drop-Down Menu
 * @returns {JSX.Element}
 * @constructor
 */
function DropDownMenu() {
  const menu = useSelector(selectMenu);
  const [,setCategory] = useContext(ChartContext);

  return (
    <>
      <select className={styles.select} onChange={(e) => setCategory(e.target.value)}>
        {menu.map((item, i) => <option key={i} value={item}>{ucFirst(item)}</option>)}
      </select>
    </>
  )
}

export default DropDownMenu;