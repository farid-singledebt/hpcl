const leadershipData = [
  {
    img: "https://82.112.226.178/images/leadership/CMD.webp",
    title: "Address by Chairman & Managing Director",
    name: "Guiding the Future",
    body: "HPCL is not an organisation, HPCL is a family, HPCL is a way of life, HPCL is a spirit.",
  },
  {
    img: "https://82.112.226.178/images/leadership/DM.webp",
    title: "Address by Director Finance",
    name: "Inspiring Growth",
    body: "We are primarily a marketing company and as a marketing company customer comes first.",
  },
  {
    img: "https://82.112.226.178/images/leadership/DF.webp",
    title: "Address by Director Refinery",
    name: "Leading with Purpose",
    body: "Arise, awake & stop not, ill the goal is reached.",
  },
  {
    img: "https://82.112.226.178/images/leadership/DR.webp",
    title: "Address by Director Marketing",
    name: "Driving Success",
    body: "Leaders at our company prioritize teamwork and collaboration, ensuring that every voice is heard and valued.",
  },
  {
    img: "https://82.112.226.178/images/leadership/HR.webp",
    title: "Address by Director HR",
    name: "Building for the Future",
    body: "It is important we network with our channel partners and build on legacy of relaionship.",
  },
  {
    img: "https://82.112.226.178/images/leadership/CVO.webp",
    title: "Address by Cheif Vigiliance Officer",
    name: "Leading by Example",
    body: "Our objective is to eliminate complaints all together.",
  },
];

$(document).ready(function () {
  let leadershipSection = document.getElementById("leadership-section");
  leadershipSection.innerHTML = "";

  leadershipData.forEach((item) => {
    let box = document.createElement("div");
    box.classList.add("leadership-flex");
    box.classList.add("mb-5");
    box.innerHTML = `
          <div class="leader-image">
            <img src="${item.img}" alt="" />
          </div>
          <div class="leader-details">
            <h2>${item.title}</h2>
            <p class="fw-bold my-3">
            ${item.body}
            </p>
            <button class="button">Click here</button>
          </div>
    `;
    leadershipSection.appendChild(box);
  });
});
