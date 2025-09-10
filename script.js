
let credit = 100; 
let heartCountValue = 0; 
let copyCount = 0;

const heartCount = document.getElementById('heartCount');
const cardHeart = document.querySelectorAll('.card-heart');
const creditCount = document.getElementById('creditCount');
const copyCountHeader = document.getElementById('copyCount');
const historyContainer = document.getElementById('historyContainer');
const clearBtn = document.getElementById('clearBtn');



// Heart Icon 
cardHeart.forEach(heart => {
  heart.addEventListener('click', function() {
    if (heart.classList.contains('active')) {
      heart.classList.remove('active');
      heart.src = './assets/2heart.png'; 
      heartCountValue--;
    } else {
      heart.classList.add('active');
      heart.src = './assets/heart.png'; 
      heartCountValue++;
    }
    heartCount.textContent = heartCountValue;
  });
});



// Copy Button for copy
const copyButtons = document.querySelectorAll('.fa-copy');

copyButtons.forEach(copyBtn => {
  copyBtn.closest('button').addEventListener('click', function() {
    const card = copyBtn.closest('.rounded-2xl');
    if (!card) return;

    const numberSpan = card.querySelector('span.font-extrabold');
    if (!numberSpan) return;

    const number = numberSpan.textContent.trim();

    navigator.clipboard.writeText(number)
      .then(() => {
        alert(`✅ Number ${number} copied to clipboard!`);
        copyCount++;
        copyCountHeader.textContent = copyCount;
      })
      .catch(() => alert('❌ Copy failed'));
  });
});


// total history sectin
const callButtons = document.querySelectorAll(".bg-\\[\\#fcfffd\\] button.bg-\\[\\#00A63E\\]");

// time er function
function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

callButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (credit >= 10) {


      // credit kome jabe 10 kore
      credit -= 10;
      creditCount.textContent = credit;

      // History add  er jnno
      const card = btn.closest(".rounded-2xl"); 
      const name = card.querySelector("h2").innerText;
      const number = card.querySelector("span.font-extrabold").innerText;
      const logo = card.querySelector("img.w-24").src;
      const time = getCurrentTime();

      const item = document.createElement("div");
      item.classList.add(
        "p-3",
        "rounded-xl",
        "border",
        "border-gray-200",
        "bg-[#f9f9f9]",
        "flex",
        "items-center",
        "justify-between",
        "gap-3",
        "mt-3"
      );

      item.innerHTML = `
        <div class="flex items-center gap-3">
          <img src="${logo}" alt="logo" class="w-10 h-10 rounded-lg bg-gray-100 p-1"/>
          <div>
            <p class="font-bold text-base">${name}</p>
            <p class="text-gray-600 text-sm">${number}</p>
          </div>
        </div>
        <span class="text-xs text-gray-500">${time}</span>
      `;
      historyContainer.appendChild(item);

      alert("📞 Calling Now... 📞");

    } else {
      alert('❌ Opps Sorry, Please Recharge credit ❌');
    }
  });
});

// Clear History Button
clearBtn.addEventListener("click", () => {
  const items = historyContainer.querySelectorAll("div.mt-3");
  items.forEach(el => el.remove());
});
