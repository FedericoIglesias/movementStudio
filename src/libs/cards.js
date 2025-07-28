const card = document.getElementById("card");
const html = document.getElementsByTagName("html");
const footer = document.getElementsByTagName("footer");
const condition = window.scrollY + window.innerHeight >= html[0].scrollHeight;
document.addEventListener("scroll", function () {
  console.log(window.scrollY + window.innerHeight >= html[0].scrollHeight);
  if (window.scrollY + window.innerHeight  >= html[0].scrollHeight)
    card.setAttribute("style", "display: flex;");
  else card.setAttribute("style", "display: none;");
});
