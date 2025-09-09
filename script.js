const heartCount = document.getElementById('heartCount');
const cardHeart = document.querySelectorAll('.card-heart');

let count = 0;

for (const heart of cardHeart) {
  heart.addEventListener('click', function () {
    if (heart.classList.contains('active')) {
      heart.classList.remove('active');
      heart.src = './assets/2heart.png'; // unliked
      count--;
    } else {
      heart.classList.add('active');
      heart.src = './assets/heart.png'; // liked
      count++;
    }

    heartCount.textContent = count;
  });
}
