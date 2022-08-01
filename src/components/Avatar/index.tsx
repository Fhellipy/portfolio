/* eslint-disable @next/next/no-img-element */
import css from "./styles.module.css";

function Avatar() {
  const logo = "/Logo.jpg";

  return (
    <div className={css.container}>
      <div className={css.photoUser}>
        <img src={logo} alt="Icone do usuário" />
      </div>
    </div>
  );
}

export { Avatar };
