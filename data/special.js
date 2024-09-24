const specialData = [
  {
    img: "https://images.pexels.com/photos/6169125/pexels-photo-6169125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Special Achievement",
    subtitle: "Recognizing Excellence",
  },
  {
    img: "https://images.pexels.com/photos/6169125/pexels-photo-6169125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Innovative Leadership",
    subtitle: "Driving the Future",
  },
  {
    img: "https://images.pexels.com/photos/6169125/pexels-photo-6169125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Team Collaboration",
    subtitle: "Strength in Unity",
  },
  {
    img: "https://images.pexels.com/photos/6169125/pexels-photo-6169125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Outstanding Growth",
    subtitle: "Exceeding Expectations",
  },
  {
    img: "https://images.pexels.com/photos/6169125/pexels-photo-6169125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Customer Centricity",
    subtitle: "Putting People First",
  },
  {
    img: "https://images.pexels.com/photos/6169125/pexels-photo-6169125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Innovation in Action",
    subtitle: "Transforming Ideas",
  },
  {
    img: "https://images.pexels.com/photos/6169125/pexels-photo-6169125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Commitment to Quality",
    subtitle: "Setting New Standards",
  },
];

const specialDiv = document.getElementById("special-div");
let specialResult = "";
specialData
  .map((item) => {
    specialResult += `
        <div class="special-card">
          <img src="${item.img}" alt="" />
          <div class="special-details"> 
            <p class="fw-bold">${item.title}</p>
            <p>${item.subtitle}</p>
          </div>
        </div>
    `;
  })
  .join("");
specialDiv.innerHTML += specialResult;
