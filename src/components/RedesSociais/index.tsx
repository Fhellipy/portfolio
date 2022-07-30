import { BsGithub, BsTwitter, AiOutlineInstagram } from "../../styles/Icons";

import css from "./styles.module.css";

function RedesSociais() {
  return (
    <nav className={css.nav}>
      <ul>
        <a href="https://github.com/Fhellipy">
          <li>
            <BsGithub className={css.icons} />
          </li>
        </a>
        <a href="https://instagram.com/_fhellipy">
          <li>
            <AiOutlineInstagram className={css.icons} />
          </li>
        </a>
        <a href="https://twitter.com/_Fhellipy">
          <li>
            <BsTwitter className={css.icons} />
          </li>
        </a>
      </ul>
    </nav>
  );
}

export { RedesSociais };
