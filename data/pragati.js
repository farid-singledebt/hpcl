const pragatiData = [];

for (let i = 1; i <= 41; i++) {
  pragatiData.push({
    img: `../images/pragati/${i}.JPG`,
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
