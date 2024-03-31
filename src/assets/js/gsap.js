import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const tl = gsap.timeline();

tl.fromTo(".header__logotype", { y: -100 }, { y: 0, duration: 0.3 });

const headerItems = document.querySelectorAll(".header__item");
headerItems.forEach((headerItem) => {
  tl.fromTo(headerItem, { y: -100 }, { y: 0, duration: 0.3 });
});

tl.fromTo(".header__phone", { y: -100, stagger: 0.3 }, { y: 0, duration: 0.3 });

const heroText = new SplitType("#hero__text");
tl.fromTo(".char", { y: 250 }, { y: 0, duration: 0.3, stagger: 0.08 });

tl.fromTo(".hero__link", { opacity: 0 }, { opacity: 1, duration: 0.3 });

if (window.matchMedia("(max-width: 767px)").matches) {
  gsap.fromTo(
    ".hero__subtitle ",
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".hero__wrapper",
        start: "-40% 30%",
        end: "-20% 30%",
        scrub: true,
        once: true,
      },
    }
  );
} else {
  gsap.fromTo(
    ".hero__subtitle ",
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".hero__wrapper",
        start: "-10% 30%",
        end: "30% 30%",
        scrub: true,
        once: true,
      },
    }
  );
}

gsap.fromTo(
  ".hero__image_right",
  { y: 100, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".hero__wrapper",
      start: "5% center",
      end: "center center",
      scrub: true,
      once: true,
    },
  }
);

gsap.fromTo(
  ".hero__image_left",
  { y: 100, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".hero__wrapper",
      start: "5% center",
      end: "center center",
      scrub: true,
      once: true,
    },
  }
);

gsap.fromTo(
  ".about__title",
  { y: 100, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".about__row",
      start: "5% 60%",
      end: "center 60%",
      scrub: true,
      once: true,
    },
  }
);

const aboutRowSubtitiles = document.querySelectorAll(
  ".about__row_subtitiles p"
);
aboutRowSubtitiles.forEach((aboutRowSubtitile) => {
  gsap.fromTo(
    aboutRowSubtitile,
    { y: 20, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: aboutRowSubtitile,
        start: "5% 60%",
        end: "bottom 60%",
        scrub: true,
        once: true,
      },
    }
  );
});

const infoItems = document.querySelectorAll(".info__item");
infoItems.forEach((infoItem) => {
  gsap.fromTo(
    infoItem,
    { x: -20, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: infoItem,
        start: "top center",
        end: "bottom center",
        scrub: true,
        once: true,
      },
    }
  );
});

gsap.fromTo(
  ".work__row",
  { y: 100, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".work__row",
      start: "top center",
      end: "center center",
      scrub: true,
      once: true,
    },
  }
);

const projectsItems = document.querySelectorAll(".projects__item");
projectsItems.forEach((projectsItem) => {
  gsap.fromTo(
    projectsItem,
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".projects__row",
        start: "top center",
        end: "30% center",
        scrub: true,
        once: true,
      },
    }
  );
});

const projectItemSoverlay = document.querySelectorAll(".project__item_overlay");
projectItemSoverlay.forEach((projectItemOverlay) => {
  gsap.fromTo(
    projectItemOverlay,
    { y: "0%" },
    {
      y: "100%",
      scrollTrigger: {
        trigger: projectItemOverlay,
        start: "top center",
        end: "bottom center",
        scrub: true,
        once: true,
      },
    }
  );
});

gsap.fromTo(
  ".reviews__title",
  { y: 100, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".reviews ",
      start: "top center",
      end: "center center",
      scrub: true,
      once: true,
    },
  }
);

gsap.fromTo(
  ".reviews__wrapper",
  { y: 100, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".reviews",
      start: "10% center",
      end: "70% center",
      scrub: true,
      once: true,
    },
  }
);

gsap.fromTo(
  ".order__image",
  { x: -100, opacity: 0 },
  {
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".order",
      start: "top center",
      end: "30% center",
      scrub: true,
      once: true,
    },
  }
);

if (window.matchMedia("(max-width: 767px)").matches) {
  gsap.fromTo(
    ".order__form",
    { x: 100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".order",
        start: "-10% 70%",
        end: "30% 70%",
        scrub: true,
        once: true,
      },
    }
  );
} else {
  gsap.fromTo(
    ".order__form",
    { x: 100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".order",
        start: "top center",
        end: "30% center",
        scrub: true,
        once: true,
      },
    }
  );
}
