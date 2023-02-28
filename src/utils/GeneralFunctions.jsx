export const TabTitle = (newTitle) => {
  return (document.title = `${newTitle} - Hello Uda`);
};

export const Reveal = () => {
  return window.addEventListener("scroll", function () {
    let reveals = document.querySelectorAll(".reveal");
    for (let index = 0; index < reveals.length; index++) {
      let windowheight = window.innerHeight;
      let revealtop = reveals[index].getBoundingClientRect().top;
      let revealpoint = 0;

      if (revealtop < windowheight - revealpoint) {
        reveals[index].classList.add("active");
      } else {
        reveals[index].classList.remove("active");
      }
    }
  });
};
