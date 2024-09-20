const seniorData = [
  {
    img: "https://images.pexels.com/photos/6169125/pexels-photo-6169125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "John Doe",
    emp_no: "A3B6D9F2J4",
    designation: "Chief Executive Officer",
  },
  {
    img: "https://images.pexels.com/photos/6169125/pexels-photo-6169125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Robert Johnson",
    emp_no: "Z9F5K3M1R7",
    designation: "Chief Financial Officer",
  },
  {
    img: "https://images.pexels.com/photos/6169125/pexels-photo-6169125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Emily Davis",
    emp_no: "B4C8T6L2X9",
    designation: "Chief Marketing Officer",
  },
  {
    img: "https://images.pexels.com/photos/6169125/pexels-photo-6169125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Michael Brown",
    emp_no: "P7N2S5R8W1",
    designation: "Chief Technology Officer",
  },
  {
    img: "https://images.pexels.com/photos/6169125/pexels-photo-6169125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Sarah Wilson",
    emp_no: "H3Y9K6L4M2",
    designation: "Head of Human Resources",
  },
  {
    img: "https://images.pexels.com/photos/6169125/pexels-photo-6169125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "David Lee",
    emp_no: "J1R5T8K2N6",
    designation: "Chief Information Officer",
  },
  {
    img: "https://images.pexels.com/photos/6169125/pexels-photo-6169125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Sophia Martinez",
    emp_no: "F9G2L8M1R4",
    designation: "Head of Sales",
  },
  {
    img: "https://images.pexels.com/photos/6169125/pexels-photo-6169125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "James Taylor",
    emp_no: "T3Z7C6N9Y1",
    designation: "Chief Compliance Officer",
  },
  {
    img: "https://images.pexels.com/photos/6169125/pexels-photo-6169125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Isabella Clark",
    emp_no: "R2D6V8F1L4",
    designation: "Chief Product Officer",
  },
  {
    img: "https://images.pexels.com/photos/6169125/pexels-photo-6169125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Ethan White",
    emp_no: "L9M3B5N7X2",
    designation: "Chief Risk Officer",
  },
  {
    img: "https://images.pexels.com/photos/6169125/pexels-photo-6169125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Olivia Thompson",
    emp_no: "V6H2K9T4M8",
    designation: "Head of Customer Success",
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
          <p>Employee No: ${item.emp_no}</p>
          <p>Designation: ${item.designation}</p>
        </div>
      </div>
    `;
  })
  .join("");
seniorDiv.innerHTML = seniorResult;
