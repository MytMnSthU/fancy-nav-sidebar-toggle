const links = document.querySelectorAll("a");
const bgactive = document.querySelector(".bg-active");
const togglebtn = document.getElementById('togglebtn');
const nav = document.querySelector('nav');

links.forEach((link) => {
   link.addEventListener("click", (e) => {
      links.forEach((lk) => lk.classList.remove("active"));
      const offsetTopVal = e.target.offsetTop;
      bgactive.style.translate = `0 ${offsetTopVal}px`;
      link.classList.add("active");
   });
});

togglebtn.addEventListener('click', () => {
    nav.classList.toggle('minimize');
})