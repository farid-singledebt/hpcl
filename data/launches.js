const launch1Data = [];
for (let i = 1; i <= 5; i++) {
  launch1Data.push({
    img: `https://farid-singledebt.github.io/hpcl/images/launches/launch1/${i}.JPG`,
  });
}
//
const launch2Data = [];
for (let i = 1; i <= 9; i++) {
  launch2Data.push({
    img: `https://farid-singledebt.github.io/hpcl/images/launches/launch2/${i}.JPG`,
  });
}
//
const launch3Data = [];
for (let i = 1; i <= 13; i++) {
  launch3Data.push({
    img: `https://farid-singledebt.github.io/hpcl/images/launches/launch3/${i}.JPG`,
  });
}
//
const launch4Data = [];
for (let i = 1; i <= 9; i++) {
  launch4Data.push({
    img: `https://farid-singledebt.github.io/hpcl/images/launches/launch4/${i}.JPG`,
  });
}
//
const launch5Data = [];
for (let i = 1; i <= 7; i++) {
  launch5Data.push({
    img: `https://farid-singledebt.github.io/hpcl/images/launches/launch5/${i}.JPG`,
  });
}

const mainLaunchData = [];
function addFirstItems(mainArray, ...arrays) {
  arrays.forEach((array) => {
    if (array.length > 0) {
      mainArray.push(array[0]); // Push the first item if the array is not empty
    }
  });
}

// Call the function with the arrays you want to add
addFirstItems(
  mainLaunchData,
  launch1Data,
  launch2Data,
  launch3Data,
  launch4Data,
  launch5Data
);

const launchTitles = [
  "LPG",
  "Lubes",
  "R&D",
  "Mission 60",
  "Digital initiatives",
];

mainLaunchData.forEach((item, index) => {
  item.title = launchTitles[index];
});

const launchesContainer = document.getElementById("launches-container");
let mainLaunchResult = "";
mainLaunchData.map((item) => {
  mainLaunchResult += `
    <div class="launches-flex-box">
            <div class="launches-overlay">
              <h2>${item.title}</h2>
              <button class="button button-flex">
                View image <i class="fa fa-eye"></i>
              </button>
            </div>
            <img src="${item.img}" alt="Image 1" />
          </div>
    `;
}).join;
launchesContainer.innerHTML = mainLaunchResult;
