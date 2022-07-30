import Slider from "react-slick";
import css from "./styles.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CarouselProject() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 2,
    slidesToShow: 2,
  };

  return (
    <article className={css.container}>
      <Slider className={css.carousel} {...settings}>
        <ul>
          <li>
            <img className={css.image} src="/Logo.jpg" alt="" />
          </li>
        </ul>

        <ul>
          <li>
            <img className={css.image} src="/Logo.jpg" alt="" />
          </li>
        </ul>

        <ul>
          <li>
            <img className={css.image} src="/Logo.jpg" alt="" />
          </li>
        </ul>

        <ul>
          <li>
            <img className={css.image} src="/Logo.jpg" alt="" />
          </li>
        </ul>

        <ul>
          <li>
            <img className={css.image} src="/Logo.jpg" alt="" />
          </li>
        </ul>

        <ul>
          <li>
            <img className={css.image} src="/Logo.jpg" alt="" />
          </li>
        </ul>
      </Slider>
    </article>
  );
}

export { CarouselProject };
