
// ----------import default、global style-----------
import "./index.css";

// -------------- import swiper.js ---------------
import Swiper, { Navigation, Manipulation } from 'swiper';
import 'swiper/css'; // import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/manipulation';
import autoprefixer from "autoprefixer";
Swiper.use([Navigation, Manipulation]); // configure Swiper to use modules

// ----------------- header panel -------------------------------
// btn
const plusBtn = document.getElementById("plus-btn");
const msgBtn = document.getElementById("msg-btn");
const notificationBtn = document.getElementById("notification-btn");
const moreBtn = document.getElementById("more-btn");

// panel
const plusPanel = document.getElementById("plus-panel");
const msgPanel = document.getElementById("msg-panel");
const notificationPanel = document.getElementById("notification-panel");
const morePanel = document.getElementById("more-panel");

const panels = [plusPanel, msgPanel, notificationPanel, morePanel];

function openPanel(index) {
  panels.forEach((item, idx) => {
    if (idx === index && item.classList.contains("hidden")) {
      item.classList.remove("hidden");
      return;
    }

    if (!item.classList.contains("hidden")) {
      item.classList.add("hidden");
    }
  });
}

window.addEventListener("click", function (e) {
  e.stopPropagation();
  openPanel(-1);
});
plusBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  openPanel(0);
});
msgBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  openPanel(1);
});
notificationBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  openPanel(2);
});
moreBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  openPanel(3);
});

// ----------------- 左側邊欄位 -------------------------------

function renderLeftItem(name, image) {
  const left_item = `
  <div class="flex items-center w-full p-2 mb-1 rounded hover:bg-fb-input cursor-pointer">
    <div class="w-[32px] overflow-hidden rounded-full mr-4">
      <img src="${image}" alt="">
    </div>
    <p class="text-white text-[.9rem]">${name}</p>
  </div>`;
  return left_item;
}

function renderLeftItemBlock() {
  const leftBlock = document.getElementById("left-block");
  const leftArr = [
    {
      name: "布魯斯",
      img: "https://bruce-fe-fb.web.app/image/avator.png",
    },
    {
      name: "活動",
      img: "https://bruce-fe-fb.web.app/image/left/activity.svg",
    },
    {
      name: "天氣",
      img: "https://bruce-fe-fb.web.app/image/left/cloudy.png",
    },
    {
      name: "災害應變中心",
      img: "https://bruce-fe-fb.web.app/image/left/dynamic.svg",
    },
    {
      name: "新冠病毒資訊中心",
      img: "https://bruce-fe-fb.web.app/image/left/facemask.svg",
    },
    {
      name: "社團",
      img: "https://bruce-fe-fb.web.app/image/left/friend.svg",
    },
    {
      name: "企業管理平台",
      img: "https://bruce-fe-fb.web.app/image/left/job.png",
    },
    {
      name: "Messenger",
      img: "https://bruce-fe-fb.web.app/image/left/messenger.svg",
    },
    {
      name: "近期廣告動態",
      img: "https://bruce-fe-fb.web.app/image/left/pay.png",
    },
    {
      name: "朋友名單",
      img: "https://bruce-fe-fb.web.app/image/left/sale.png",
    },
    {
      name: "最愛",
      img: "https://bruce-fe-fb.web.app/image/left/star.svg",
    },
    {
      name: "Marketplace",
      img: "https://bruce-fe-fb.web.app/image/left/store.svg",
    },
    {
      name: "Watch",
      img: "https://bruce-fe-fb.web.app/image/left/watchingTv.svg",
    },
  ];
  let htmlStr = "";
  for (let i = 0; i < leftArr.length; i++) {
    htmlStr += renderLeftItem(leftArr[i].name, leftArr[i].img);
  }
  leftBlock.innerHTML = htmlStr;
}

renderLeftItemBlock();

// ----------------- 右側邊欄位 -------------------------------
function renderRightItem(name, image) {
  const right_item = `
  <div class="flex items-center w-full py-2 px-1 rounded hover:bg-fb-input cursor-pointer">
    <div class="w-[45px]">
      <div class="relative w-[32px] cursor-pointer">
        <div class="overflow-hidden rounded-full">
          <img src="${image}" alt="">
        </div>
        <div class="w-[8px] h-[8px] rounded-full bg-green-500 absolute bottom-0 right-0 right-gray-900 ring"></div>
      </div>
    </div>
    <p class="text-white text-[.9rem]">${name}</p>
  </div>`;
  return right_item;
}

function renderRightItemBlock() {
  const rightBlock = document.getElementById("right-block");
  const rightArr = [
    {
      name: "布魯斯",
      img: "https://bruce-fe-fb.web.app/image/avator.png",
    },
    {
      name: "布魯斯",
      img: "https://bruce-fe-fb.web.app/image/avator.png",
    },
    {
      name: "布魯斯",
      img: "https://bruce-fe-fb.web.app/image/avator.png",
    },
    {
      name: "布魯斯",
      img: "https://bruce-fe-fb.web.app/image/avator.png",
    },
    {
      name: "布魯斯",
      img: "https://bruce-fe-fb.web.app/image/avator.png",
    },
    {
      name: "布魯斯",
      img: "https://bruce-fe-fb.web.app/image/avator.png",
    },
    {
      name: "布魯斯",
      img: "https://bruce-fe-fb.web.app/image/avator.png",
    },
    {
      name: "布魯斯",
      img: "https://bruce-fe-fb.web.app/image/avator.png",
    },
    {
      name: "布魯斯",
      img: "https://bruce-fe-fb.web.app/image/avator.png",
    },
    {
      name: "布魯斯",
      img: "https://bruce-fe-fb.web.app/image/avator.png",
    },
  ];
  // 初始化添加聯絡人html
  let htmlStr = `<p class="mb-2 text-lg text-gray-400">聯絡人</p>`;
  for (let i = 0; i < rightArr.length; i++) {
    htmlStr += renderRightItem(rightArr[i].name, rightArr[i].img);
  }
  rightBlock.innerHTML = htmlStr;
}

renderRightItemBlock();

// ----------現實動態相關----------------
const storyList = document.getElementById("story-list");

function renderStoryItem() {
  for (let i = 0; i < 5; i++) {
    const divBox = document.createElement("div");
    divBox.classList.add("flex-1", "min-w-[120px]", "px-[4px]", "cursor-pointer");
    divBox.innerHTML =
      `<div class="relative overflow-hidden" id="story-${i}">
        <div class="absolute hidden w-full h-full top-0 left-0 bg-black/20" id="story-mask-${i}"></div>
        <div
        <div
          class="w-[32px] h-[32px] absolute top-4 left-4 ring-4 ring-fb bg-fb-card rounded-full flex justify-center items-center z-10">
          <p class="text-white text-sm">布</p>
        </div>
        <div class="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-black/30 z-20 border border-black/20"></div>
        <img id="story-image-${i}" src="https://bruce-fe-fb.web.app/image/story.png" alt=""
          class="w-full h-full duration-500 hover:scale-105">
        <p class="absolute bottom-2 left-2 text-white z-10">布魯斯</p>
      </div>`;
    storyList.appendChild(divBox);

    const storyMask = document.getElementById(`story-mask-${i}`);
    const storyImage = document.getElementById(`story-image-${i}`);
    divBox.addEventListener("mouseover", function () {
      storyMask.classList.remove("hidden");
      storyImage.classList.add("scale-105");
    });
    divBox.addEventListener("mouseout", function () {
      storyMask.classList.add("hidden");
      storyImage.classList.remove("scale-105");
    });
  }
}
renderStoryItem();

//-------------輪播相關-------------
function renderLiveItem() {
  const item = `
      <div class="swiper-slide">
        <div class="w-[55px]">
          <div class="relative w-[40px] cursor-pointer">
            <div class="overflow-hidden rounded-full">
              <img src="https://bruce-fe-fb.web.app/image/avator.png" alt="">
            </div>
            <div class="w-[10px] h-[10px] rounded-full bg-green-500 absolute bottom-0 right-0 ring ring-gray-900">
            </div>
          </div>
        </div>
      </div>`;
  // init Swiper:
  const swiper = new Swiper(".swiper.fb-live", {
    direction: "horizontal",
    loop: false,
    slidesPerView: "auto",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  for (let i = 1; i < 20; i++) {
    swiper.appendSlide(item);
  }
}
renderLiveItem();
