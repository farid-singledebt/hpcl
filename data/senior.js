const seniorData = [
  {
    img: "https://farid-singledebt.github.io/hpcl/images/seniors/1.webp",
    name: "PRANAY KUMAR",
    designation: "Chief Executive Officer - HBL",
  },
  {
    img: "https://farid-singledebt.github.io/hpcl/images/seniors/2.webp",
    name: "SANJAY DASGUPTA",
    designation: "Chief General Manager - ERP",
  },
  {
    img: "https://farid-singledebt.github.io/hpcl/images/seniors/3.webp",
    name: "PRAVEEN KUMAR",
    designation: "Principal - HPMDI",
  },
  {
    img: "https://farid-singledebt.github.io/hpcl/images/seniors/4.webp",
    name: "BALAGURUNATHAN K",
    designation: "Chief General Manager - Tax",
  },
  {
    img: "https://farid-singledebt.github.io/hpcl/images/seniors/5.webp",
    name: "KOTA SREENIVASA RAO",
    designation: "Executive Director - Natural Gas",
  },
  {
    img: "https://farid-singledebt.github.io/hpcl/images/seniors/6.webp",
    name: "VIJAY SHRIKRISHNA AGASHE",
    designation: "Executive Director - Integrated Margin Management",
  },
  {
    img: "https://farid-singledebt.github.io/hpcl/images/seniors/7.webp",
    name: "AMITAVA MUKHOPADHYAY",
    designation:
      "Executive Director - Engineering Projects & Facilities Planning",
  },
  {
    img: "https://farid-singledebt.github.io/hpcl/images/seniors/8.webp",
    name: "RAJEEV GOEL",
    designation: "Executive Director - Corporate Social Responsibility & PRCC",
  },
  {
    img: "https://farid-singledebt.github.io/hpcl/images/seniors/9.webp",
    name: "SHUVENDU GUPTA",
    designation: "Chief Executive Officer",
  },
  {
    img: "https://farid-singledebt.github.io/hpcl/images/seniors/10.webp",
    name: "SANJAY MALHOTRA",
    designation: "Chief Executive Officer - HINCOL",
  },
  {
    img: "https://farid-singledebt.github.io/hpcl/images/seniors/11.webp",
    name: "KANURU SRINIVAS",
    designation:
      "Executive Director - Marketing Strategy and  Business Development",
  },
];

$(document).ready(function () {
  const seniorDiv = document.getElementById("senior-div");
  let seniorResult = "";
  seniorData
    .map((item) => {
      seniorResult += `
    <div class="seniors-card">
        <img
          src="${item.img}"
          alt="profile"
        />

        <div class="senior-details">
          <p class="fw-bold">${item.name}</p>
          <p>${item.designation}</p>
        </div>
      </div>
    `;
    })
    .join("");
  seniorDiv.innerHTML = seniorResult;
});
