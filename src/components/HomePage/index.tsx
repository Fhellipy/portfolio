import { Aside } from "../Aside";
import { CarouselProject } from "../CarouselProject";
import { RedesSociais } from "../RedesSociais";
import css from "./styles.module.css";

function HomePage() {
  return (
    <article className={css.container}>
      <article className={css.information}>
        <RedesSociais />

        <main className={css.main}>
          <div className={css.content}>
            <article className={css.work}>
              <h2>Work</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem commodi, vitae nostrum aut laboriosam distinctio quod
                neque eius dolor omnis itaque rem nihil, minima consequatur
                harum esse. Voluptatibus, debitis itaque! Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Delectus nisi nihil autem
                reprehenderit repellat, molestiae ut corporis labore totam
                molestias sit distinctio tempore unde consequuntur, nesciunt
                eligendi quos, sequi suscipit?
              </p>
            </article>

            <article className={css.bio}>
              <h2>BIO</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
                voluptate voluptatibus et recusandae similique excepturi nulla
                provident consequatur, fuga cupiditate praesentium debitis
                temporibus repudiandae, esse sit maiores, ex perferendis
                aliquam. Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Voluptatum debitis rem non vero? Eius, perferendis
                inventore! Non dicta, quod pariatur suscipit possimus enim sint
                vero saepe quisquam officia, eveniet consectetur.
              </p>
            </article>
          </div>
        </main>

        <Aside />
      </article>

      <section className={css.portfolio}>
        <button className={css.btnMyPortfolio}>
          <p>My Portfolio</p>
        </button>

        <CarouselProject />
      </section>
    </article>
  );
}

export { HomePage };
