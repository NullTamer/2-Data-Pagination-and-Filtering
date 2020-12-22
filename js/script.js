// /*
// Treehouse Techdegree:
// FSJS Project 2 - Data Pagination and Filtering
// */

// console.log(data);

// /*
// For assistance:
//    Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
//    Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
// */

// /*
// Create the `showPage` function
// This function will create and insert/append the elements needed to display a "page" of nine students
// */

const studentsPerPage = 9; // maximum number of students per page
function showPage(list, page) {
  // create two variables which will represent the index for the first and last student on the page
  startIndex = page * studentsPerPage - studentsPerPage;
  endIndex = page * studentsPerPage;
  studentList = document.querySelector(".student-list"); // select the element with a class of `student-list` and assign it to a variable
  studentList.innerHTML = ""; // set the innerHTML property of the variable you just created to an empty string
  for (i = 0; i < list.length; i++) {
    // loop over the length of the `list` parameter
    if (i >= startIndex && i < endIndex) {
      // inside the loop create a conditional to display the proper students
      student = `<li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
               <h3>${list[i].name.title}${list[i].name.first}${list[i].name.last}</h3>
               <span class="email">${list[i].email}</span>
            </div>
            <div class="joined-details">
               <span class="date">${list[i].registered.date}</span>
            </div>
         </li>`;
      studentList.insertAdjacentHTML("beforeend", student); // insert the above elements
    }
  }
}
function addPagination(list) {
  let totalPages = Math.ceil(list.length / studentsPerPage); // create a variable to calculate the number of pages needed
  let linkList = document.querySelector(".link-list"); // select the element with a class of `link-list` and assign it to a variable
  linkList.innerHTML = ""; // set the innerHTML property of the variable you just created to an empty string
  for (i = 1; i <= totalPages; i++) {
    // loop over the number of pages needed
    pages = `<li><button type="button">${i}</button></li>`; // create the elements needed to display the pagination button
    linkList.insertAdjacentHTML("beforeend", pages);
  }
  let firstPaginationButton = document.querySelector(".link-list button");
  firstPaginationButton.className = "active"; // give the first pagination button a class of "active"
  linkList.addEventListener("click", function (event) {
    // create an event listener on the `link-list` element
    if (event.target.tagName == "BUTTON") {
      // if the click target is a button:
      let activeButton = document.querySelector(".active");
      activeButton.className = ""; // remove the "active" class from the previous button
      event.target.className = "active"; // add the active class to the clicked button
      showPage(list, event.target.textContent);
    } // call the showPage function passing the `list` parameter and page to display as arguments
  });
}
showPage(data, 1); // Call functions
addPagination(data);
