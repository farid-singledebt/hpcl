let mediaGalleryDay2Data = [];
for (let i = 1; i <= 76; i++) {
  mediaGalleryDay2Data.push({
    img: `https://farid-singledebt.github.io/hpcl/images/media_gallery/day2/${i}.jpg`,
  });
}

const mediaGalleryDay1 = document.getElementById("media-gallery-day1");
const mediaGalleryDay2 = document.getElementById("media-gallery-day2");
const mediaGalleryDay3 = document.getElementById("media-gallery-day3");
let mediaGalleryDay2Result = "";
mediaGalleryDay2Data
  .map((item) => {
    mediaGalleryDay2Result += `
    <div class="masonry-item" onclick="openPhotoModal()">
    <img src="${item.img}"
              alt="Image 1"
            />
    </div>
    `;
  })
  .join("");

mediaGalleryDay1.innerHTML = mediaGalleryDay2Result;
mediaGalleryDay2.innerHTML = mediaGalleryDay2Result;
mediaGalleryDay3.innerHTML = mediaGalleryDay2Result;
