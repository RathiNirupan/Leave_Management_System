// document.addEventListener("DOMContentLoaded",async ()=> {
//     const apiUrl ="http://localhost:3000/employees";
//     const userApiUrl ="http://localhost:3000/users";


//     let employees = [];
//     let users = [];
//     let editingEmployeeId = null;
//     const employeeTableBody = document.getElementById("employeeTableBody");
//     const employeeModal =document.getElementById('employeeModal');
//     const credentialsModal = document.getElementById("credentialsModal");
//     const employeeForm = document.forms['employeeForm'];
//     const credentialsForm = document.forms['credentialsForm'];
//     const toast = document.getElementById("toast");

//     //fetch employees
//     const fetchEmployees = async () =>{
//         const response = await fetch (apiUrl);
//         employees = await response.json();
//         renderEmployees();
//     };

//     //fetch users
//     const fetchusers = async () => {
//         const response = await fetch(userApiUrl);
//         users = await response.json();
//     };

//     //render employees
//     const renderEmployees = () => {
//         employeeTableBody.innerHTML="";
//         employees.forEach((employee) => {
//             const row = document.createElement("tr");
//             row.innerHTML= `
//             <td>${employee.employeeId}</td>
//             <td>${employee.nic}</td>
//             <td>${employee.firstName}</td>
//             <td>${employee.lastName}</td>
//             <td>${employee.dob}</td>
//             <td>${employee.doj}</td>
//             <td>
//             <button onclick="editEmployee('${employee.employeeId}')">Edit</button>
//             <button onclick="deleteEmployee('${employee.employeeId}')">Delete</button>
//             <button onclick="editCredentials('${employee.employeeId}')">EditCredentials</button>
//             </td>
//             `;
//             employeeTableBody.appendChild(row);
//         });
//     };
//      //open Employee Modal for Create or Edit
//      document.getElementById("createEmployeeBtn").onclick=()=> {
//         openEmployeeModal();
//      };

//      const openEmployeeModal = (employee = null) => {
//         employeeModal.style.display = "block";
//      }
        
//     }
// })