import React from "react";
import style from "./main.module.css";
function ContainerLayout(props) {
  return <div className={style.container}>{props.children}</div>;
}
export default ContainerLayout;
