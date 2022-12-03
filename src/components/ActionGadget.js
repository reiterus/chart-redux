import styles from "./Styles.module.css";
import React, {useCallback, useRef} from "react";
import {addGadget} from "../app/productSlice";
import {useDispatch} from "react-redux";
import Button from "./Button";

/**
 * Add new gadget/thing/entity/etc
 * @returns {JSX.Element}
 * @constructor
 */
function ActionGadget() {
  const entity = useRef(null);
  const dispatch = useDispatch();

  // мемоизируем callback обработки кликов
  const handleAddGadget = useCallback(() => {
    const title = entity.current.value.trim()
    title
      ? dispatch(addGadget(title))
      : alert('Gadget title can not be empty!')
  }, [dispatch, entity]);

  return (
    <>
      <p>
        <input
          ref={entity}
          className={styles.justPadding}
          placeholder="Example: Cars"
        />
        <Button text={`Add Gadget`} handleClick={() => handleAddGadget()}/>
      </p>
    </>
  )
}

export default ActionGadget;