var links = document.getElementsByClassName('nav-link');

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function(e) {
    e.preventDefault();
    var anchor = e.target.getAttribute("href");
    document.querySelector(anchor).scrollIntoView({behavior: 'smooth'});
  })
}

baguetteBox.run('.gallery');
baguetteBox.run('.samples');
