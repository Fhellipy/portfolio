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
        },
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const logo = "/Logo.jpg";

  return (
    <article className={css.container}>
      <Slider className={css.carousel} {...settings}>
        <ul>
          <li>
            <img src={logo} className={css.image} />
          </li>
        </ul>

        <ul>
          <li>
            <img className={css.image} src={logo} />
          </li>
        </ul>

        <ul>
          <li>
            <img className={css.image} src={logo} />
          </li>
        </ul>

        <ul>
          <li>
            <img className={css.image} src={logo} />
          </li>
        </ul>

        <ul>
          <li>
            <img className={css.image} src={logo} />
          </li>
        </ul>

        <ul>
          <li>
            <img className={css.image} src={logo} />
          </li>
        </ul>
      </Slider>
    </article>
  );
}

export { CarouselProject };
