const pragatiData = [];

for (let i = 1; i <= 40; i++) {
  pragatiData.push({
    img: `https://farid-singledebt.github.io/hpcl/images/pragati/${i}.JPG`,
  });
}

const pragatiDiv = document.getElementById("pragati-div");
let pragatiResult = "";
pragatiData
  .map((item, index) => {
    pragatiResult += `
    <div class="item">
            <img
              src="${item.img}"
              class="view-pragati-image"
              alt="Image 1"
              data-index="${index}" data-bs-toggle="modal" data-bs-target="#imgModal"
            />
          </div>
    `;
  })
  .join("");
pragatiDiv.innerHTML = pragatiResult;

document.querySelectorAll(".view-pragati-image").forEach((item) => {
  item.addEventListener("click", function () {
    const index = this.getAttribute("data-index");

    const $owl = $("#modal-carousel");
    if ($owl.hasClass("owl-loaded")) {
      $owl.trigger("destroy.owl.carousel"); // Destroy current carousel
      $owl.removeClass("owl-loaded"); // Remove owl-loaded class
      $owl.find(".owl-stage-outer").children().unwrap(); // Remove wrapper generated by OwlCarousel
    }

    // Generate the Owl Carousel items with images
    let carouselItems = pragatiData
      .map(
        (pragatiItem, i) => `
      <div class="item">
        <img src="${pragatiItem.img}" alt="Image ${i + 1}" />
      </div>
    `
      )
      .join("");

    // Insert the carousel items into the modal
    document.getElementById("modal-carousel").innerHTML = carouselItems;

    // Re-initialize the Owl Carousel
    $("#modal-carousel").owlCarousel({
      items: 1,
      loop: true,
      nav: true,
      dots: false,
      startPosition: index,
    });
  });
});
