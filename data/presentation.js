const presentationData = [
  {
    title: "Exploring the Unknown",
    subtitle: "A journey through the wilderness",
    img: "https://images.pexels.com/photos/17805250/pexels-photo-17805250/free-photo-of-black-and-white-photograph-of-a-snowy-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    body: "Join us as we embark on an adventure to discover the hidden beauty of nature.",
    overlay: "Step into adventure",
  },
  {
    title: "Mountain Serenity",
    subtitle: "Finding peace at the summit",
    img: "https://images.pexels.com/photos/17805250/pexels-photo-17805250/free-photo-of-black-and-white-photograph-of-a-snowy-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    body: "The stillness of the mountain top provides a perfect retreat from the chaos of daily life.",
    overlay: "Breathe the silence",
  },
  {
    title: "A Winter Wonderland",
    subtitle: "Capturing the beauty of snow-covered peaks",
    img: "https://images.pexels.com/photos/17805250/pexels-photo-17805250/free-photo-of-black-and-white-photograph-of-a-snowy-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    body: "In this magical landscape, every corner offers a breathtaking view of snow-laden scenery.",
    overlay: "Pure winter magic",
  },
  {
    title: "Chasing the Horizon",
    subtitle: "An adventure beyond limits",
    img: "https://images.pexels.com/photos/17805250/pexels-photo-17805250/free-photo-of-black-and-white-photograph-of-a-snowy-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    body: "There's always a new horizon to explore, and the thrill of the unknown keeps us going.",
    overlay: "Endless possibilities await",
  },
  {
    title: "A Journey to the Peaks",
    subtitle: "Discovering the majesty of mountains",
    img: "https://images.pexels.com/photos/17805250/pexels-photo-17805250/free-photo-of-black-and-white-photograph-of-a-snowy-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    body: "The towering mountains stand tall, inviting explorers to reach their peaks and witness the view from above.",
    overlay: "Reach the summit",
  },
];

const presentation = document.getElementById("presentation");
let presentationResult = "";
presentationData
  .map((item) => {
    presentationResult += `
        <div class="presentation-card">
          <div class="presentation-border">
            <p class="fw-bold">${item.title}</p>
            <p>
              ${item.subtitle}
            </p>
          </div>
          <div class="presentation-img">
            <img
              src=${item.img}
              alt="card"
            />
            <div class="overlay">
              <p>${item.overlay}</p>
            </div>
          </div>
          <p>
            ${item.body}
          </p>
        </div>
    `;
  })
  .join("");
presentation.innerHTML = presentationResult;
