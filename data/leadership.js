const leadershipData = [
  {
    img: "../images/leadership/1.JPG",
    title: "Address by c & md",
    subtitle: "Guiding the Future",
    body: "Our leadership team brings a wealth of experience, innovation, and strategic thinking to propel the company forward.",
  },
  {
    img: "../images/leadership/2.JPG",
    title: "Address by director finance",
    subtitle: "Inspiring Growth",
    body: "With a focus on sustainable growth, our leaders inspire teams to achieve excellence and drive impactful change.",
  },
  {
    img: "../images/leadership/3.JPG",
    title: "Address by director refinery",
    subtitle: "Leading with Purpose",
    body: "Our leadership fosters a culture of innovation, empowering employees to create solutions that shape the future.",
  },
  {
    img: "../images/leadership/4.JPG",
    title: "Address by director marketing",
    subtitle: "Driving Success",
    body: "Leaders at our company prioritize teamwork and collaboration, ensuring that every voice is heard and valued.",
  },
  {
    img: "../images/leadership/5.JPG",
    title: "Address by director hr",
    subtitle: "Building for the Future",
    body: "Through visionary strategy and expert guidance, our leadership team is building a future of growth and innovation.",
  },
  {
    img: "../images/leadership/6.JPG",
    title: "Address by cheif vigiliance officer",
    subtitle: "Leading by Example",
    body: "Our leadership embodies a commitment to excellence, driving the company toward continued success and market leadership.",
  },
  {
    img: "../images/leadership/7.JPG",
    title: "Address by cheif vigiliance officer",
    subtitle: "Leading by Example",
    body: "Our leadership embodies a commitment to excellence, driving the company toward continued success and market leadership.",
  },
  {
    img: "../images/leadership/8.JPG",
    title: "Address by cheif vigiliance officer",
    subtitle: "Leading by Example",
    body: "Our leadership embodies a commitment to excellence, driving the company toward continued success and market leadership.",
  },
  {
    img: "../images/leadership/9.JPG",
    title: "Address by cheif vigiliance officer",
    subtitle: "Leading by Example",
    body: "Our leadership embodies a commitment to excellence, driving the company toward continued success and market leadership.",
  },
  {
    img: "../images/leadership/10.JPG",
    title: "Address by cheif vigiliance officer",
    subtitle: "Leading by Example",
    body: "Our leadership embodies a commitment to excellence, driving the company toward continued success and market leadership.",
  },
  {
    img: "../images/leadership/11.JPG",
    title: "Address by cheif vigiliance officer",
    subtitle: "Leading by Example",
    body: "Our leadership embodies a commitment to excellence, driving the company toward continued success and market leadership.",
  },
  {
    img: "../images/leadership/12.JPG",
    title: "Address by cheif vigiliance officer",
    subtitle: "Leading by Example",
    body: "Our leadership embodies a commitment to excellence, driving the company toward continued success and market leadership.",
  },
  {
    img: "../images/leadership/13.JPG",
    title: "Address by cheif vigiliance officer",
    subtitle: "Leading by Example",
    body: "Our leadership embodies a commitment to excellence, driving the company toward continued success and market leadership.",
  },
  {
    img: "../images/leadership/14.JPG",
    title: "Address by cheif vigiliance officer",
    subtitle: "Leading by Example",
    body: "Our leadership embodies a commitment to excellence, driving the company toward continued success and market leadership.",
  },
  {
    img: "../images/leadership/15.JPG",
    title: "Address by cheif vigiliance officer",
    subtitle: "Leading by Example",
    body: "Our leadership embodies a commitment to excellence, driving the company toward continued success and market leadership.",
  },
  {
    img: "../images/leadership/16.JPG",
    title: "Address by cheif vigiliance officer",
    subtitle: "Leading by Example",
    body: "Our leadership embodies a commitment to excellence, driving the company toward continued success and market leadership.",
  },
  {
    img: "../images/leadership/17.JPG",
    title: "Address by cheif vigiliance officer",
    subtitle: "Leading by Example",
    body: "Our leadership embodies a commitment to excellence, driving the company toward continued success and market leadership.",
  },
  {
    img: "../images/leadership/18.JPG",
    title: "Address by cheif vigiliance officer",
    subtitle: "Leading by Example",
    body: "Our leadership embodies a commitment to excellence, driving the company toward continued success and market leadership.",
  },
  {
    img: "../images/leadership/19.JPG",
    title: "Address by cheif vigiliance officer",
    subtitle: "Leading by Example",
    body: "Our leadership embodies a commitment to excellence, driving the company toward continued success and market leadership.",
  },
  {
    img: "../images/leadership/20.JPG",
    title: "Address by cheif vigiliance officer",
    subtitle: "Leading by Example",
    body: "Our leadership embodies a commitment to excellence, driving the company toward continued success and market leadership.",
  },
  {
    img: "../images/leadership/21.JPG",
    title: "Address by cheif vigiliance officer",
    subtitle: "Leading by Example",
    body: "Our leadership embodies a commitment to excellence, driving the company toward continued success and market leadership.",
  },
  {
    img: "../images/leadership/22.JPG",
    title: "Address by cheif vigiliance officer",
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
