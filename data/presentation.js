const presentationData = [
  {
    title: "Exploring the Unknown",
    subtitle: "A journey through the wilderness",
    img: "../images/presentation/channel_partners.jpg",
    body: "Join us as we embark on an adventure to discover the hidden beauty of nature.",
    overlay: "Step into adventure",
    pdf: "../pdf/Channel_partners_as_Force_Multipliers.pdf",
  },
  {
    title: "Mountain Serenity",
    subtitle: "Finding peace at the summit",
    img: "../images/presentation/CX.jpg",
    body: "The stillness of the mountain top provides a perfect retreat from the chaos of daily life.",
    overlay: "Breathe the silence",
    pdf: "../pdf/Customer_Focused_Transformation.pdf",
  },
  {
    title: "A Winter Wonderland",
    subtitle: "Capturing the beauty of snow-covered peaks",
    img: "../images/presentation/journey.jpg",
    body: "In this magical landscape, every corner offers a breathtaking view of snow-laden scenery.",
    overlay: "Pure winter magic",
    pdf: "../pdf/HPCL's_Ascent_to_an_Iconic_Brand.pdf",
  },
  {
    title: "Chasing the Horizon",
    subtitle: "An adventure beyond limits",
    img: "../images/presentation/mission.jpg",
    body: "There's always a new horizon to explore, and the thrill of the unknown keeps us going.",
    overlay: "Endless possibilities await",
    pdf: "../pdf/Mission_60_@_T25.pdf",
  },
];

const presentation = document.getElementById("presentation");
let presentationResult = "";
presentationData
  .map((item, index) => {
    presentationResult += `
        <div class="presentation-card">
          <div class="presentation-border">
            <p class="fw-bold">${item.title}</p>
            <p>${item.subtitle}</p>
          </div>
          <a href="javascript:void(0)" class="presentation-img" data-pdf="${item.pdf}" data-bs-toggle="modal" data-bs-target="#pdfModal">
            <img
              src=${item.img}
              alt="card"
            />
            <div class="overlay">
              <p>${item.overlay}</p>
            </div>
          </a>
          <p>${item.body}</p>
        </div>
    `;
  })
  .join("");
presentation.innerHTML = presentationResult;

//
document.querySelectorAll(".presentation-img").forEach((item) => {
  item.addEventListener("click", function () {
    const pdfUrl = this.getAttribute("data-pdf");
    document.getElementById("pdfIframe").src = pdfUrl;
  });
});
