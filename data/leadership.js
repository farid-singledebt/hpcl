const leadershipData = [
  {
    img: "https://farid-singledebt.github.io/hpcl/images/leadership/1.JPG",
    title: "Address by C & MD",
    subtitle: "Guiding the Future",
    body: "Our leadership team brings a wealth of experience, innovation, and strategic thinking to propel the company forward.",
  },
  {
    img: "https://farid-singledebt.github.io/hpcl/images/leadership/2.JPG",
    title: "Address by Director Finance",
    subtitle: "Inspiring Growth",
    body: "With a focus on sustainable growth, our leaders inspire teams to achieve excellence and drive impactful change.",
  },
  {
    img: "https://farid-singledebt.github.io/hpcl/images/leadership/3.JPG",
    title: "Address by Director Refinery",
    subtitle: "Leading with Purpose",
    body: "Our leadership fosters a culture of innovation, empowering employees to create solutions that shape the future.",
  },
  {
    img: "https://farid-singledebt.github.io/hpcl/images/leadership/4.JPG",
    title: "Address by Director Marketing",
    subtitle: "Driving Success",
    body: "Leaders at our company prioritize teamwork and collaboration, ensuring that every voice is heard and valued.",
  },
  {
    img: "https://farid-singledebt.github.io/hpcl/images/leadership/5.JPG",
    title: "Address by Director HR",
    subtitle: "Building for the Future",
    body: "Through visionary strategy and expert guidance, our leadership team is building a future of growth and innovation.",
  },
  {
    img: "https://farid-singledebt.github.io/hpcl/images/leadership/6.JPG",
    title: "Address by Cheif Vigiliance Officer",
    subtitle: "Leading by Example",
    body: "Our leadership embodies a commitment to excellence, driving the company toward continued success and market leadership.",
  },
];

const leadershipDiv = document.getElementById("leadership-div");
let leadershipResult = "";
leadershipData
  .map((item) => {
    leadershipResult += `
        <div class="leadership-flex mb-4">
            <div class="leadership-left">
              <img
                src="${item.img}"
                alt=""
              />
            </div>
            <div class="leadership-right">
              <h2>${item.title}</h2>
              <p>
                ${item.body}
              </p>
              <p class="fw-bold">${item.subtitle}</p>
            </div>
          </div>
    `;
  })
  .join("");
leadershipDiv.innerHTML = leadershipResult;
