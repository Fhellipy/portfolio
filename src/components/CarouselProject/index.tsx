/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
import css from "./styles.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CarouselProject() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };

  const logoDiscord = "/discord.png";
  const logoTwitter = "/twitter.jpeg";
  const logoFake_app = "/fake-app.jpeg";

  return (
    <article className={css.container}>
      <Slider className={css.carousel} {...settings}>
        <ul>
          <li>
            <a href="https://github.com/Fhellipy/discord-clone" target="blank">
              <img src={logoDiscord} className={css.image} />
              <p className={css.titleProject}>
                <strong>Clone Discord</strong>
              </p>
            </a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="https://github.com/Fhellipy/twitter-clone" target="blank">
              <img src={logoTwitter} className={css.image} />
              <p className={css.titleProject}>
                <strong>Clone Twitter</strong>r
              </p>
            </a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="https://github.com/Fhellipy/fake-app" target="blank">
              <img src={logoFake_app} className={css.image} />
              <p className={css.titleProject}>
                <strong>Fake app</strong>
              </p>
            </a>
          </li>
        </ul>
      </Slider>
    </article>
  );
}

export { CarouselProject };
