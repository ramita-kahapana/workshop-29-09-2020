import React from "react";
import style from "./main.module.css";
function NavBar() {
  return (
    <div className={style.header}>
      <div className={style.container}>
        logo
        <button>Sign in</button>
      </div>
    </div>
  );
}
export default NavBar;
