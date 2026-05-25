const CONTACT = {
  phone: "+351 922 273 354",
  whatsappDigits: "351922273354",
  mapsUrl:
    "https://www.google.com/maps/place/Dower+Advocacia+Internacional/@38.7197933,-9.1438756,17z/data=!4m16!1m9!3m8!1s0xd193382441c71e5:0x47cf0a20ef675534!2sR.+S%C3%A3o+Jos%C3%A9+149,+1150-325+Lisboa,+Portugal!3b1!8m2!3d38.7197933!4d-9.1438756!10e3!16s%2Fg%2F11snp_x6wt!3m5!1s0xd19339c49530a09:0xa72d0e8f3f52cac2!8m2!3d38.719835!4d-9.1438278!16s%2Fg%2F11tsr4h196?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D",
  instagramUrl: "https://www.instagram.com/doweradvocacia/",
  message:
    "Olá, Dra. Carla Dower. Gostaria de solicitar uma análise confidencial em defesa penal em Portugal.",
};

const whatsappUrl = `https://wa.me/${CONTACT.whatsappDigits}?text=${encodeURIComponent(CONTACT.message)}`;

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.setAttribute("href", whatsappUrl);
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");
});

document.querySelectorAll("[data-map-link]").forEach((link) => {
  link.setAttribute("href", CONTACT.mapsUrl);
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");
});

document.querySelectorAll("[data-instagram]").forEach((link) => {
  link.setAttribute("href", CONTACT.instagramUrl);
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");
});

const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = document.querySelectorAll("[data-nav] a");

if (header && navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("nav-active");
    document.body.classList.toggle("nav-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("nav-active");
      document.body.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Abrir menu");
    });
  });
}

const track = document.querySelector("[data-testimonial-track]");
const prevButton = document.querySelector("[data-prev]");
const nextButton = document.querySelector("[data-next]");

function scrollTestimonials(direction) {
  if (!track) return;

  const card = track.querySelector(".testimonial-card");
  const gap = 22;
  const distance = card ? card.getBoundingClientRect().width + gap : 360;
  track.scrollBy({ left: distance * direction, behavior: "smooth" });
}

if (track && prevButton && nextButton) {
  prevButton.addEventListener("click", () => scrollTestimonials(-1));
  nextButton.addEventListener("click", () => scrollTestimonials(1));

  let autoplay = window.setInterval(() => {
    const maxScroll = track.scrollWidth - track.clientWidth - 2;
    if (track.scrollLeft >= maxScroll) {
      track.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      scrollTestimonials(1);
    }
  }, 7000);

  track.addEventListener("mouseenter", () => window.clearInterval(autoplay));
  track.addEventListener("mouseleave", () => {
    autoplay = window.setInterval(() => {
      const maxScroll = track.scrollWidth - track.clientWidth - 2;
      if (track.scrollLeft >= maxScroll) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollTestimonials(1);
      }
    }, 7000);
  });
}

window.renderIcons = () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
};

window.addEventListener("load", window.renderIcons);
