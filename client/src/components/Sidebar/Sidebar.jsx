import React from "react";
import { useSelector } from "react-redux";

import styles from "../../styles/Sidebar.module.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { list } = useSelector(({ categories }) => categories);

  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>Categories</div>
      <nav>
        <ul className={styles.menu}>
          {list.map(({ id, name }) => (
            <li key={id}>
              <NavLink
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ""}`
                }
                to={`/categories/${id}`}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.footer}>
        <a
          className={styles.footer}
          href="/help"
          target="_blank"
          rel="noreferrer"
        >
          Help
        </a>
        <a
          className={styles.footer}
          href="/terms"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "underline " }}
        >
          Terms & Conditions
        </a>
      </div>
    </section>
  );
};

export default Sidebar;
