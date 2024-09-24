const pragatiData = [];

for (let i = 1; i <= 40; i++) {
  pragatiData.push({
    img: `https://farid-singledebt.github.io/hpcl/images/pragati/${i}.jpg`,
  });
}

const pragatiDiv = document.getElementById("pragati-div");
let pragatiResult = "";
pragatiData
  .map((item) => {
    pragatiResult += `
    <div class="item">
            <img
              src="${item.img}"
              alt="Image 1"
            />
          </div>
    `;
  })
  .join("");
pragatiDiv.innerHTML = pragatiResult;
