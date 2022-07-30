import { HTMLAttributes, useState } from "react";
import {
  GiHamburgerMenu,
  FaPhp,
  FaReact,
  FaLinux,
  FaHtml5,
  SiJavascript,
  SiTypescript,
  DiCss3,
} from "../../styles/Icons";

import css from "./styles.module.css";

function Aside() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className={css.aside}>
      <button
        className={css.buttonOpen}
        onClick={() => {
          setIsOpen((stateOld) => !stateOld);
        }}
      >
        <GiHamburgerMenu className={css.iconHamburguer} />
      </button>

      <div className={isOpen ? css.itemVisible : css.item}>
        <div>
          <p className={css.tecnologia}>Tecnologias</p>
        </div>

        <ul>
          <li className={css.itemList}>
            <FaPhp className={css.iconList} />
          </li>

          <li className={css.itemList}>
            <FaReact className={css.iconList} />
          </li>

          <li className={css.itemList}>
            <FaLinux className={css.iconList} />
          </li>

          <li className={css.itemList}>
            <FaHtml5 className={css.iconList} />
          </li>

          <li className={css.itemList}>
            <SiJavascript className={css.iconList} />
          </li>

          <li className={css.itemList}>
            <SiTypescript className={css.iconList} />
          </li>

          <li className={css.itemList}>
            <DiCss3 className={css.iconList} />
          </li>
        </ul>
      </div>
    </aside>
  );
}

export { Aside };
