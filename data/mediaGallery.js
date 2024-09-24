let mediaGalleryDay2Data = [];
for (let i = 1; i <= 76; i++) {
  mediaGalleryDay2Data.push({
    img: `../images/media_gallery/day2/${i}.jpg`,
  });
}

const mediaGalleryDay2 = document.getElementById("media-gallery-day2");
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

mediaGalleryDay2.innerHTML = mediaGalleryDay2Result;
