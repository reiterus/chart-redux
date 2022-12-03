import styles from "./Styles.module.css";
import React, {Profiler} from "react";

/**
 * Button Component
 * @param text
 * @param handleClick
 * @returns {JSX.Element}
 * @constructor
 */
function Button({text, handleClick}) {
  return (
    <>
      {/* профилируем кнопку */}
      <Profiler id="Button" onRender={
        (id, phase, actualDuration) => {
          console.log(id, phase, ', duration:', actualDuration)
        }
      }>
        <button
          className={styles.button}
          onClick={handleClick}>
          {text}
        </button>
      </Profiler>
    </>
  )
}

export default Button;
