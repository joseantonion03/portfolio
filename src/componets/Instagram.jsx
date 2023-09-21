import { useEffect } from "react";
import "./css/instagram.css";
const Instagram = () => {
  useEffect(() => {
    var splideInstagram;
    const feed = new Instafeed({
      accessToken:
        "IGQWRPTGZAoa0hpUVc0bG90VmM1OWV6NnN6b0plMjZAJLS1zNGFfZAS13RGRtb1JXZAC1uX0t4UDl4eDJHZAUNGdkYzVDA5SEFpTHFNeVNzUVRZAd3BueUkzdVltZAXUyYnA5X0ZANOHh2VWh1bmRxNGJVbUlsWDhIUC15Mm8ZD",
      limit: 10, //mostrar na tela as 10 últimas postagens
      template: `<div class="splide__slide">
                    <div class="slide__instagram__content">
                        <img title="{{username}}" alt="{{id}}" class="aspect-square object-cover object-center" src="{{image}}" />
                        <a aria-label="Imagem do meu Instagram" class="text-decoration-none" href="{{link}}" target="_blank">
                            <div class="slide__instagram__content__click flex justify-center items-center">
                                <i class="fab fa-instagram"></i>
                            </div>
                        </a>
                    </div>
                </div>`,
      after: function () {
        splideInstagram = new Splide(".slide__instagram", {
          type: "loop",
          perPage: 4,
          perMove: 1,
          breakpoints: {
            1200: {
              perPage: 3,
            },
            850: {
              perPage: 2,
            },
            600: {
              perPage: 1,
            },
          },
        });
        splideInstagram.mount();
      },
    });
    feed.run();
  }, []);
  return (
    <section id="instagram" className="w-full block mx-auto max-w-8xl pt-20 pb-20 px-6">
      <p data-aos="fade-up" className="font-sans text-xl font-medium normal-case mb-3 text-indigo-100 text-center">
        Meu Instagram
      </p>
      <div data-aos="fade-up" className="py-4 my-3 slide__instagram splide">
        <div className="splide__slider">
          <div className="splide__track">
            <div
              id="instafeed"
              className="instagram__content instafeed splide__list"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Instagram;
