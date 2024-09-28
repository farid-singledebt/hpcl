let mediaGalleryDay2Data = [];
const randomBorders = [
  "random-border-1",
  "random-border-2",
  "random-border-3",
  "random-border-4",
];

$(document).ready(function () {
  for (let i = 1; i <= 76; i++) {
    const randomClass =
      randomBorders[Math.floor(Math.random() * randomBorders.length)];
    mediaGalleryDay2Data.push({
      img: `https://farid-singledebt.github.io/hpcl/images/media_gallery/day2/${i}.jpg`,
      className: randomClass,
    });
  }

  const mediaGalleryDay1 = document.getElementById("media-gallery-day1");
  const mediaGalleryDay2 = document.getElementById("media-gallery-day2");
  const mediaGalleryDay3 = document.getElementById("media-gallery-day3");

  let mediaGalleryDay1Result = "";
  let mediaGalleryDay2Result = "";
  let mediaGalleryDay3Result = "";

  let media1Count = 10;
  let media2Count = 15;
  let media3Count = 20;

  function loadMedia1() {
    mediaGalleryDay2Data
      .slice(0, media1Count)
      .map((item) => {
        mediaGalleryDay1Result += `
      <div class="masonry-item ${item.className}">
      <img src="${item.img}"
                alt="Image 1"
              />
      </div>
      `;
      })
      .join("");
    mediaGalleryDay1.innerHTML = mediaGalleryDay1Result;
  }
  loadMedia1();
  //
  function loadMedia2() {
    mediaGalleryDay2Data
      .slice(0, media2Count)
      .map((item) => {
        mediaGalleryDay2Result += `
      <div class="masonry-item ${item.className}">
      <img src="${item.img}"
                alt="Image 1"
              />
      </div>
      `;
      })
      .join("");
    mediaGalleryDay2.innerHTML = mediaGalleryDay2Result;
  }
  loadMedia2();
  //
  function loadMedia3() {
    mediaGalleryDay2Data
      .slice(0, media3Count)
      .map((item) => {
        mediaGalleryDay3Result += `
      <div class="masonry-item ${item.className}">
      <img src="${item.img}"
                alt="Image 1"
              />
      </div>
      `;
      })
      .join("");
    mediaGalleryDay3.innerHTML = mediaGalleryDay3Result;
  }
  loadMedia3();

  const media1LoadMore = document.getElementById("media1-load-more");
  const media2LoadMore = document.getElementById("media2-load-more");
  const media3LoadMore = document.getElementById("media3-load-more");

  media1LoadMore.addEventListener("click", () => {
    if (media1Count < mediaGalleryDay2Data.length) {
      media1Count += 10;
    } else if (media1Count > mediaGalleryDay2Data.length) {
      media1Count = 10;
      media1LoadMore.textContent = "Load more";
    }
    if (media1Count >= mediaGalleryDay2Data.length) {
      media1LoadMore.textContent = "Reset";
    }
    loadMedia1();
  });

  media2LoadMore.addEventListener("click", () => {
    if (media2Count < mediaGalleryDay2Data.length) {
      media2Count += 10;
    } else if (media2Count > mediaGalleryDay2Data.length) {
      media2Count = 10;
      media2LoadMore.textContent = "Load more";
    }
    if (media2Count >= mediaGalleryDay2Data.length) {
      media2LoadMore.textContent = "Reset";
    }
    loadMedia2();
  });

  media3LoadMore.addEventListener("click", () => {
    if (media3Count < mediaGalleryDay2Data.length) {
      media3Count += 10;
    } else if (media3Count > mediaGalleryDay2Data.length) {
      media3Count = 10;
      media3LoadMore.textContent = "Load more";
    }
    if (media3Count >= mediaGalleryDay2Data.length) {
      media3LoadMore.textContent = "Reset";
    }
    loadMedia3();
  });
});
