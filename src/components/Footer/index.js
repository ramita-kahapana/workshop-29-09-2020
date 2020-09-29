import React from "react";
import style from "./main.module.css";

function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.text}>Coppy right Saro </div>
        <button>Login</button>
      </div>
    </div>
  );
}
export default Footer;
