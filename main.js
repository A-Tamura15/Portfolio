$(".js-jump").click(function () {
  let link = $(this).data("to");
  let position = $(link).offset().top - 100;
  let speed = 400;
  $("html,body").animate({ scrollTop: position }, speed, "swing");
});

let appears = document.querySelectorAll(".appear");
const cb = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("inview");
      observer.unobserve(entry.target);
    }
  });
};
const io = new IntersectionObserver(cb);

appears.forEach((appear) => {
  io.observe(appear);
});

window.onload = function () {
  let lead = document.querySelector(".lead");
  const texts = "Welcome to my Portfolio.".split("");
  texts.forEach((text, index) => {
    setTimeout(() => {
      textAnimate(text);
    }, 200 * index);
  });

  function textAnimate(text, cur_text) {
    cur_text = cur_text + text;
    lead.innerHTML += text;
  }
};

let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  document.querySelector(".hamburger_menu").classList.toggle("active");
});

// モーダルを開く
jQuery(".js-open").click(function (e) {
  e.preventDefault();
  let target = jQuery(this).data("target");
  jQuery(target).fadeIn('slow');
});

// モーダルを閉じる
jQuery(".js-close").click(function (e) {
  e.preventDefault();
  let target = jQuery(this).data("target");
  jQuery(target).fadeOut('slow');
});
