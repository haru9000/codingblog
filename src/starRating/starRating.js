const starRating = document.querySelector('.star-rating');
const stars = starRating.querySelectorAll('.fa-star');
const rating = starRating.getAttribute('data-rating');

function setRating(rating) {
  stars.forEach((star, index) => {
    if (index < rating) {
      star.classList.add('active');
    } else {
      star.classList.remove('active');
    }
  });
}

setRating(parseFloat(rating));
