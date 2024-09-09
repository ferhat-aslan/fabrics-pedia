import Swiper from "swiper";

// Import Swiper modules
import {
  Navigation,
  Pagination,
  Thumbs,
  Mousewheel,
  Autoplay,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

// Initialize main swiper
const main_swiper = new Swiper(".swiper", {
  modules: [Navigation, Thumbs, Mousewheel, Autoplay, Pagination],
  spaceBetween: 0,
  slidesPerView: 1,
  /* mousewheel: true, */
  freeMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 1500,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
