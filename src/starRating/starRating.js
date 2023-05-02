export default class starRating {
  constructor() {
  }

  setRating(starRating) {
    const stars = starRating.querySelectorAll('.fa-star');
    const rating = starRating.getAttribute('data-rating');
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const halfStar = stars[fullStars];

    stars.forEach((star, index) => {
      if (index < fullStars) {
        star.classList.add('active');
      } else {
        star.classList.remove('active');
      }
    });

    if (hasHalfStar) {
      halfStar.classList.add('fa-star-half');
    }
  }

  setAllRating() {
    const starRatings = document.querySelectorAll('.star-rating');
    starRatings.forEach((starRating) => {
      this.setRating(starRating);
    });
  }
}
