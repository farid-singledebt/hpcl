const conferenceData = [];

for (let i = 1; i <= 10; i++) {
  conferenceData.push({
    img: `https://farid-singledebt.github.io/hpcl/images/awards/${i}.JPG`,
  });
}

const conferenceDiv = document.getElementById("conference-div");
let conferenceResult = "";

conferenceData
  .map((item) => {
    conferenceResult += `
    <div
          class="item"
        >
          <img
            src=${item.img}
            alt="Image 1"
          />
          <div class="text-center mt-2 p-2">
            <p class="fw-bold">Lorem, ipsum.</p>
            <p>Lorem ipsum dolor sit.</p>
            <button class="button mt-2 conference-view-image" data-img=${item.img}
          data-bs-toggle="modal"
          data-bs-target="#imgModal">View image <i class="fa fa-eye"></i/> <button/>
          </div>
        </div>
    `;
  })
  .join("");

conferenceDiv.innerHTML = conferenceResult;
