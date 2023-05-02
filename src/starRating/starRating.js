export default class starRating {
  constructor() {
  }

  setRating(starRating) {
    const stars = starRating.querySelectorAll('.fa-star');
    const rating = starRating.getAttribute('data-rating');

    stars.forEach((star, index) => {
      if (index < Math.ceil(num)) {
        star.classList.add('active');
      } else {
        star.classList.remove('active');
      }
    });
  }

  setAllRating() {
    const starRatings = document.querySelectorAll('.star-rating');
    starRatings.forEach((starRating) => {
      this.setRating(starRating);
    });
  }
}
