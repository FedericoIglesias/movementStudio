import Swiper from "swiper";
import { Navigation, FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";

document.addEventListener("DOMContentLoaded", function () {
  const main_swiper = new Swiper(".main", {
    modules:[Autoplay],
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    slidesPerView:'auto',
    loop: true,
  });
});
