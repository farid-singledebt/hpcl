const seniorData = [
  {
    img: "https://farid-singledebt.github.io/hpcl/images/seniors/8.webp",
    name: "PRANAY KUMAR",
    designation: "Chief Executive Officer - HBL",
  },
  {
    img: "https://farid-singledebt.github.io/hpcl/images/seniors/4.webp",
    name: "SANJAY DASGUPTA",
    designation: "Chief General Manager - ERP",
  },
  {
    img: "https://farid-singledebt.github.io/hpcl/images/seniors/2.webp",
    name: "PRAVEEN KUMAR",
    designation: "Principal - HPMDI",
  },
  {
    img: "https://farid-singledebt.github.io/hpcl/images/seniors/1.webp",
    name: "BALAGURUNATHAN K",
    designation: "Chief General Manager - Tax",
  },
  {
    img: "https://farid-singledebt.github.io/hpcl/images/seniors/14.webp",
    name: "KOTA SREENIVASA RAO",
    designation: "Executive Director - Natural Gas",
  },
  {
    img: "https://farid-singledebt.github.io/hpcl/images/seniors/10.webp",
    name: "VIJAY SHRIKRISHNA AGASHE",
    designation: "Executive Director - Integrated Margin Management",
  },
  {
    img: "https://farid-singledebt.github.io/hpcl/images/seniors/11.webp",
    name: "AMITAVA MUKHOPADHYAY",
    designation:
      "Executive Director - Engineering Projects & Facilities Planning",
  },
  {
    img: "https://farid-singledebt.github.io/hpcl/images/seniors/12.webp",
    name: "RAJEEV GOEL",
    designation: "Executive Director - Corporate Social Responsibility & PRCC",
  },
  {
    img: "https://farid-singledebt.github.io/hpcl/images/seniors/13.webp",
    name: "SHUVENDU GUPTA",
    designation: "Chief Executive Officer",
  },
  {
    img: "https://farid-singledebt.github.io/hpcl/images/seniors/7.webp",
    name: "SANJAY MALHOTRA",
    designation: "Chief Executive Officer - HINCOL",
  },
  {
    img: "https://farid-singledebt.github.io/hpcl/images/seniors/9.webp",
    name: "KANURU SRINIVAS",
    designation:
      "Executive Director - Marketing Strategy and  Business Development",
  },
  {
    img: "https://farid-singledebt.github.io/hpcl/images/seniors/5.webp",
    name: "K Loganathan",
    designation: "Cheif general manager - HSE marketing",
  },
  {
    img: "https://farid-singledebt.github.io/hpcl/images/seniors/5.webp",
    name: "P Veerabhadra rao",
    designation: "Executive director - Visakh refinery modernisation project",
  },
];

$(document).ready(function () {
  const seniorDiv = document.getElementById("senior-div");
  let seniorResult = "";
  seniorData
    .map((item, index) => {
      seniorResult += `
    <div class="seniors-card" data-index="${index}" data-bs-toggle="modal" data-bs-target="#imgModal">
        <img
          src="${item.img}"
          alt="profile"
        />

        <div class="senior-details">
          <p class="fw-bold text-capitalize">${item.name}</p>
          <p class="text-capitalize">${item.designation}</p>
        </div>
      </div>
    `;
    })
    .join("");
  seniorDiv.innerHTML = seniorResult;
  //
  document.querySelectorAll(".seniors-card").forEach((item) => {
    item.addEventListener("click", function () {
      let index = this.getAttribute("data-index");
      document
        .getElementById("modal-img-div")
        .setAttribute("src", seniorData[index].img);
      document.getElementById("image-title").innerHTML = seniorData[index].name;
    });
  });
});

document.getElementById("all-seniors").addEventListener("click", function () {
  document
    .getElementById("modal-img-div")
    .setAttribute("src", this.getAttribute("src"));
});
