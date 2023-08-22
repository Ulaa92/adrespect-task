document.addEventListener("DOMContentLoaded", function() {
  var searchButton = document.getElementById("searchButton");
  var searchBar = document.getElementById("searchBar");

  var isSearchBarVisible = false;

  searchButton.addEventListener("click", function() {
    isSearchBarVisible = !isSearchBarVisible;
    searchBar.style.maxHeight = isSearchBarVisible ? "300px" : "0";
    searchBar.style.opacity = isSearchBarVisible ? "1" : "0";
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const grid = document.querySelector('.grid');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');

  const masonry = new Masonry(grid, {
      itemSelector: '.grid-item',
      columnWidth: '.grid-item',
  });

  grid.addEventListener('click', function (event) {
      if (event.target.matches('.grid-item img')) {
          const imgSrc = event.target.src;
          lightboxImg.src = imgSrc;
          lightbox.style.display = 'block';
      }
  });

  lightboxClose.addEventListener('click', function () {
      lightbox.style.display = 'none';
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var showGalleryButton = document.getElementById("showGalleryButton");
  var expandedGallery = document.getElementById("expandedGallery");

  showGalleryButton.addEventListener("click", function(e) {
      e.preventDefault();
      
      expandedGallery.style.display = "block";
      this.style.display = "none";
      
      var masonry = new Masonry(expandedGallery.querySelector('.grid'), {
          itemSelector: '.grid-item',
          columnWidth: '.grid-item',
          percentPosition: true
      });
  });
});

const showGalleryButton = document.getElementById("showGalleryButton");
    const gallery = document.getElementById("gallery");

    showGalleryButton.addEventListener("click", function () {
        gallery.classList.add("expanded");
    });