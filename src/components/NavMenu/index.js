import React, { useContext, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import cx from "classnames";
import { DisabledByDefaultOutlined } from "@mui/icons-material";
import styles from "./NavMenu.module.scss";
import { MenuContext } from "../../contexts";

const NavMenu = () => {
  const [state, menuClose] = useContext(MenuContext);
  const classNames = cx(styles.container, {
    [styles.open]: state.isMenuOpen,
  });
  const navMenuRef = useRef(null);
  useEffect(() => {
    const handlerClick = ({ target }) => {
      if (navMenuRef.current.contains(target) === false && state.isMenuOpen) {
        menuClose();
      }
    };
    window.addEventListener("click", handlerClick);
    return () => {
      window.removeEventListener("click", handlerClick);
    };
  }, [state.isMenuOpen]);

  const keyCloseMenu = (event) => { //Accessibility
    if (event.keyCode === 13) {
      keyCloseMenu();
    }
  };

  return (
    <nav className={classNames} ref={navMenuRef}>
      <DisabledByDefaultOutlined
        className={styles.closeBtn}
        onClick={menuClose}
        tabIndex="0"
        onKeyDown={keyCloseMenu}
      />
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/signup">signup</NavLink>
        </li>
        <li>
          <NavLink to="/chat">chat</NavLink>
        </li>

        <li>
          <NavLink to="/todo-1">Todo_Reducer</NavLink>
        </li>
        <li>
          <NavLink to="/todo-2">Todo_UseState</NavLink>
        </li>

      </ul>
    </nav>
  );
};

export default NavMenu;
