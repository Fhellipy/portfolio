import { Avatar } from "../Avatar";
import css from "./styles.module.css";

function Header() {
  return (
    <article className={css.container}>
      <Avatar />
      <section className={css.banner}>
        <p className={css.name}>Fhellipy Conceição Santana</p>

        <p className={css.office}>Developer Font-end/Back-end</p>
      </section>
    </article>
  );
}

export { Header };
