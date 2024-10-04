let mediaGalleryDay1Data = [];
let mediaGalleryDay2Data = [];
let mediaGalleryDay3Data = [];

const randomBorders = ["random-border-1", "random-border-2", "random-border-3"];

$(document).ready(function () {
  for (let i = 1; i <= 20; i++) {
    const sequentialClass = randomBorders[(i - 1) % randomBorders.length];

    mediaGalleryDay1Data.push({
      img: `https://farid-singledebt.github.io/hpcl/images/media_gallery/day1/${i}.webp`,
      className: sequentialClass,
    });
  }

  for (let i = 1; i <= 78; i++) {
    const sequentialClass = randomBorders[(i - 1) % randomBorders.length];

    mediaGalleryDay2Data.push({
      img: `https://farid-singledebt.github.io/hpcl/images/media_gallery/day2/${i}.webp`,
      className: sequentialClass,
    });
  }

  for (let i = 1; i <= 32; i++) {
    const sequentialClass = randomBorders[(i - 1) % randomBorders.length];

    mediaGalleryDay3Data.push({
      img: `https://farid-singledebt.github.io/hpcl/images/media_gallery/day3/${i}.webp`,
      className: sequentialClass,
    });
  }

  const mediaGalleryDay1 = document.getElementById("media-gallery-day1");
  const mediaGalleryDay2 = document.getElementById("media-gallery-day2");
  const mediaGalleryDay3 = document.getElementById("media-gallery-day3");

  let mediaGalleryDay1Result = "";
  let mediaGalleryDay2Result = "";
  let mediaGalleryDay3Result = "";

  let media1Start = 0;
  let media1End = 10;

  let media2Start = 0;
  let media2End = 10;

  let media3Start = 0;
  let media3End = 10;

  const openImage = () => {
    document.querySelectorAll(".mansory-image").forEach((item) => {
      item.addEventListener("click", function () {
        document
          .getElementById("modal-img-div")
          .setAttribute("src", this.getAttribute("src"));
      });
    });
  };

  function loadMedia1() {
    mediaGalleryDay1Data
      .slice(media1Start, media1End)
      .map((item) => {
        mediaGalleryDay1Result += `
          <div class="masonry-item ${item.className}">
            <img src="${item.img}"
                alt="Image 1"
                    class="mansory-image"
                    data-bs-toggle="modal" data-bs-target="#imgModal"
                  />
            </div>
      `;
      })
      .join("");
    mediaGalleryDay1.innerHTML = mediaGalleryDay1Result;
    openImage();
  }
  loadMedia1();
  //
  function loadMedia2() {
    mediaGalleryDay2Data
      .slice(media2Start, media2End)
      .map((item) => {
        mediaGalleryDay2Result += `
      <div class="masonry-item ${item.className}">
      <img src="${item.img}"
                alt="Image 1" class="mansory-image"
                    data-bs-toggle="modal" data-bs-target="#imgModal"
              />
      </div>
      `;
      })
      .join("");
    mediaGalleryDay2.innerHTML = mediaGalleryDay2Result;
    openImage();
  }
  loadMedia2();
  //
  function loadMedia3() {
    mediaGalleryDay3Data
      .slice(media3Start, media3End)
      .map((item) => {
        mediaGalleryDay3Result += `
      <div class="masonry-item ${item.className}">
      <img src="${item.img}"
                alt="Image 1" class="mansory-image"
                    data-bs-toggle="modal" data-bs-target="#imgModal"
              />
      </div>
      `;
      })
      .join("");
    mediaGalleryDay3.innerHTML = mediaGalleryDay3Result;
    openImage();
  }
  loadMedia3();

  const media1LoadMore = document.getElementById("media1-load-more");
  const media2LoadMore = document.getElementById("media2-load-more");
  const media3LoadMore = document.getElementById("media3-load-more");

  media1LoadMore.addEventListener("click", () => {
    if (media1End < mediaGalleryDay1Data.length) {
      media1Start += 10;
      media1End += 10;
    } else if (media1End > mediaGalleryDay1Data.length) {
      media1Start = 0;
      media1End = 10;
      media1LoadMore.textContent = "Load more";
    }
    if (media1End >= mediaGalleryDay1Data.length) {
      media1LoadMore.textContent = "Back";
    }
    loadMedia1();
  });

  media2LoadMore.addEventListener("click", () => {
    if (media2End < mediaGalleryDay2Data.length) {
      media2Start += 10;
      media2End += 10;
    } else if (media2End > mediaGalleryDay2Data.length) {
      media2Start = 0;
      media2End = 10;
      media2LoadMore.textContent = "Load more";
    }
    if (media2End >= mediaGalleryDay2Data.length) {
      media2LoadMore.textContent = "Back";
    }
    loadMedia2();
  });

  media3LoadMore.addEventListener("click", () => {
    if (media3End < mediaGalleryDay3Data.length) {
      media3Start += 10;
      media3End += 10;
    } else if (media3End > mediaGalleryDay3Data.length) {
      media3Start = 0;
      media3End = 10;
      media3LoadMore.textContent = "Load more";
      return;
    }
    if (media3End >= mediaGalleryDay3Data.length) {
      media3LoadMore.textContent = "Back";
    }
    loadMedia3();
  });
  //
});
