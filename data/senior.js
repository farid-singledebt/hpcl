const seniorData = [
  {
    img: "https://farid-singledebt.github.io/hpcl/images/seniors/1.JPG",
    name: "PRANAY KUMAR",
    designation: "Chief Executive Officer - HBL",
  },
  {
    img: "https://farid-singledebt.github.io/hpcl/images/seniors/2.JPG",
    name: "SANJAY DASGUPTA",
    designation: "Chief General Manager - ERP",
  },
  {
    img: "https://farid-singledebt.github.io/hpcl/images/seniors/3.JPG",
    name: "PRAVEEN KUMAR",
    designation: "Principal - HPMDI",
  },
  {
    img: "https://farid-singledebt.github.io/hpcl/images/seniors/4.JPG",
    name: "BALAGURUNATHAN K",
    designation: "Chief General Manager - Tax",
  },
  {
    img: "https://farid-singledebt.github.io/hpcl/images/seniors/5.JPG",
    name: "KOTA SREENIVASA RAO",
    designation: "Executive Director - Natural Gas",
  },
  {
    img: "https://farid-singledebt.github.io/hpcl/images/seniors/6.JPG",
    name: "VIJAY SHRIKRISHNA AGASHE",
    designation: "Executive Director - Integrated Margin Management",
  },
  {
    img: "https://farid-singledebt.github.io/hpcl/images/seniors/7.JPG",
    name: "AMITAVA MUKHOPADHYAY",
    designation: "Executive Director - Engineering Projects & Facilities Planning",
  },
  {
    img: "https://farid-singledebt.github.io/hpcl/images/seniors/8.JPG",
    name: "RAJEEV GOEL",
    designation: "Executive Director - Corporate Social Responsibility & PRCC",
  },
  {
    img: "https://farid-singledebt.github.io/hpcl/images/seniors/9.JPG",
    name: "SHUVENDU GUPTA",
    designation: "Chief Executive Officer",
  },
  {
    img: "https://farid-singledebt.github.io/hpcl/images/seniors/10.JPG",
    name: "SANJAY MALHOTRA",
    designation: "Chief Executive Officer - HINCOL",
  },
  {
    img: "https://farid-singledebt.github.io/hpcl/images/seniors/11.JPG",
    name: "KANURU SRINIVAS",
    designation: "Executive Director - Marketing Strategy and  Business Development",
  },
  
];


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
