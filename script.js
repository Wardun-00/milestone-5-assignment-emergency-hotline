
// heart icon react 
const heartCount = document.getElementById('heartCount');
const cardHeart = document.querySelectorAll('.card-heart');

let count = 0;

for (const heart of cardHeart) {
  heart.addEventListener('click', function () {
    if (heart.classList.contains('active')) {
      heart.classList.remove('active');
      heart.src = './assets/2heart.png'; 
      count--;
    } else {
      heart.classList.add('active');
      heart.src = './assets/heart.png'; 
      count++;
    }

    heartCount.textContent = count;
  });
}


// call button credit cut

const creditCount = document.getElementById('creditCount');

// call button all 
const callButton = document.querySelectorAll('.fa-phone');

let credit = 100;
for(const callBtn of callButton){
    callBtn.parentElement.addEventListener('click', function(){
        alert("📞 Calling Now... 📞");

        // 10ta credit kete nibe

        if(credit >= 10){
            credit -= 10;
            creditCount.textContent =credit;

        }

        else{
            alert('❌ Opps Sorry, Please Recharge credit ❌')
        }
    })
}


// copy button er kaz korar jonno
const copyCountHeader = document.getElementById('copyCount');
let copyCount = 0;

const copyButtons = document.querySelectorAll('.fa-copy');

copyButtons.forEach(copyBtn => {
  copyBtn.closest('button').addEventListener('click', function() {
    // card div 
    const card = copyBtn.closest('.rounded-2xl');
    if (!card) return;

    // number span
    const numberSpan = card.querySelector('span.font-extrabold');
    if (!numberSpan) return;

    const number = numberSpan.textContent.trim();

    navigator.clipboard.writeText(number)
      .then(() => {
        alert(`✅ Number ${number} copied to clipboard!`);

        // header copy count update
        copyCount++;
        copyCountHeader.textContent = copyCount;
      })
      .catch(() => alert('❌ Copy failed'));
  });
});



