const prizeData = [
  {
    SBU: "North Region",
    category: "Best Sales Performance",
    winner: "Alice Johnson",
    img: "https://images.pexels.com/photos/17805250/pexels-photo-17805250/free-photo-of-black-and-white-photograph-of-a-snowy-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    SBU: "West Region",
    category: "Customer Excellence",
    winner: "Michael Brown",
    img: "https://images.pexels.com/photos/17805250/pexels-photo-17805250/free-photo-of-black-and-white-photograph-of-a-snowy-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    SBU: "East Region",
    category: "Innovation Leader",
    winner: "Jessica Smith",
    img: "https://images.pexels.com/photos/17805250/pexels-photo-17805250/free-photo-of-black-and-white-photograph-of-a-snowy-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    SBU: "South Region",
    category: "Operational Excellence",
    winner: "David Lee",
    img: "https://images.pexels.com/photos/17805250/pexels-photo-17805250/free-photo-of-black-and-white-photograph-of-a-snowy-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    SBU: "Global Headquarters",
    category: "Leadership Award",
    winner: "Emily Davis",
    img: "https://images.pexels.com/photos/17805250/pexels-photo-17805250/free-photo-of-black-and-white-photograph-of-a-snowy-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    SBU: "APAC Region",
    category: "Rising Star",
    winner: "Sophia Wilson",
    img: "https://images.pexels.com/photos/17805250/pexels-photo-17805250/free-photo-of-black-and-white-photograph-of-a-snowy-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    SBU: "EMEA Region",
    category: "Team Collaboration",
    winner: "Liam Martin",
    img: "https://images.pexels.com/photos/17805250/pexels-photo-17805250/free-photo-of-black-and-white-photograph-of-a-snowy-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    SBU: "North Region",
    category: "Best Customer Retention",
    winner: "Ava Thompson",
    img: "https://images.pexels.com/photos/17805250/pexels-photo-17805250/free-photo-of-black-and-white-photograph-of-a-snowy-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    SBU: "West Region",
    category: "Marketing Excellence",
    winner: "Noah White",
    img: "https://images.pexels.com/photos/17805250/pexels-photo-17805250/free-photo-of-black-and-white-photograph-of-a-snowy-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    SBU: "East Region",
    category: "Innovation in Technology",
    winner: "Isabella Garcia",
    img: "https://images.pexels.com/photos/17805250/pexels-photo-17805250/free-photo-of-black-and-white-photograph-of-a-snowy-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    SBU: "South Region",
    category: "Employee of the Year",
    winner: "James Martinez",
    img: "https://images.pexels.com/photos/17805250/pexels-photo-17805250/free-photo-of-black-and-white-photograph-of-a-snowy-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    SBU: "Global Headquarters",
    category: "Best Product Development",
    winner: "Mia Clark",
    img: "https://images.pexels.com/photos/17805250/pexels-photo-17805250/free-photo-of-black-and-white-photograph-of-a-snowy-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    SBU: "APAC Region",
    category: "Best Financial Performance",
    winner: "Alexander Lewis",
    img: "https://images.pexels.com/photos/17805250/pexels-photo-17805250/free-photo-of-black-and-white-photograph-of-a-snowy-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    SBU: "EMEA Region",
    category: "Sustainability Leader",
    winner: "Evelyn Walker",
    img: "https://images.pexels.com/photos/17805250/pexels-photo-17805250/free-photo-of-black-and-white-photograph-of-a-snowy-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

$(document).ready(function () {
  const prizeTable = document.getElementById("prize-table");
  let prizeResult = "";
  prizeData
    .map((item, index) => {
      prizeResult += `
      <tr>
              <td>${index + 1}</td>
              <td>${item.SBU}</td>
              <td>${item.category}.</td>
              <td>${item.winner}</td>
              <td>View <i class="fa fa-eye"></i></td>
            </tr>
    `;
    })
    .join("");
  prizeTable.innerHTML = prizeResult;
});
