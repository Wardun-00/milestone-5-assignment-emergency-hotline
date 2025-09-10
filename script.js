
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



// history

// time set korar jnno
function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
// call button ta  select er jnno
const callButtons = document.querySelectorAll(
  ".bg-\\[\\#fcfffd\\] button.bg-\\[\\#00A63E\\]"
);

const historyContainer = document.getElementById("historyContainer");
const clearBtn = document.getElementById("clearBtn");

// call button click event 
callButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".bg-\\[\\#fcfffd\\]"); 
    const name = card.querySelector("h2").innerText;
    const number = card.querySelector("span.font-extrabold").innerText;
    const logo = card.querySelector("img.w-24").src;
    const time = getCurrentTime();

    // history item make
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
// inner html
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
  });
});

clearBtn.addEventListener("click", () => {
  const items = historyContainer.querySelectorAll("div.mt-3");
  items.forEach((el) => el.remove());
});

