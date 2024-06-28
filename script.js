let firstDate = document.querySelector(".first-date");
let secondDate = document.querySelector(".second-date");
let checkBtn = document.querySelector(".btn");
let dateOutput = document.querySelector(".dateOutput");

checkBtn.addEventListener("click", () => {
  let firstDateVal = firstDate.value.split("-");
  let secondDateVal = secondDate.value.split("-");
  let day1 = firstDateVal[2];
  let month1 = firstDateVal[1];
  let year1 = firstDateVal[0];
  let day2 = secondDateVal[2];
  let month2 = secondDateVal[1];
  let year2 = secondDateVal[0];
  if (year1 === "" || year2 === "") {
    dateOutput.style.display = "block";
    dateOutput.innerHTML = "Input date needs to be filled";
    window.setTimeout(function () {
      dateOutput.style.display = "none";
    }, 4000);
  } else {
    if (year1 > year2) {
      dateOutput.style.display = "block";
      dateOutput.innerHTML = "Date1 is <span>greater</span> than Date2";
      window.setTimeout(function () {
        dateOutput.style.display = "none";
      }, 4000);
    } else if (year1 < year2) {
      dateOutput.style.display = "block";
      dateOutput.innerHTML = "Date1 is <span>lesser</span> than Date2";
      window.setTimeout(function () {
        dateOutput.style.display = "none";
      }, 4000);
    } else if (year1 === year2) {
      if (month1 > month2) {
        dateOutput.style.display = "block";
        dateOutput.innerHTML = "Date1 is <span>greater</span> than Date2";
        window.setTimeout(function () {
          dateOutput.style.display = "none";
        }, 4000);
      } else if (month1 < month2) {
        dateOutput.style.display = "block";
        dateOutput.innerHTML = "Date1 is <span>lesser</span> than Date2";
        window.setTimeout(function () {
          dateOutput.style.display = "none";
        }, 4000);
      } else if (month1 === month2) {
        if (day1 > day2) {
          dateOutput.style.display = "block";
          dateOutput.innerHTML = "Date1 is <span>greater</span> than Date2";
          window.setTimeout(function () {
            dateOutput.style.display = "none";
          }, 4000);
        } else if (day1 < day2) {
          dateOutput.style.display = "block";
          dateOutput.innerHTML = "Date1 is <span>lesser</span> than Date2";
          window.setTimeout(function () {
            dateOutput.style.display = "none";
          }, 4000);
        } else {
          dateOutput.style.display = "block";
          dateOutput.innerHTML = "Date1 is <span>equal</span> to Date2";
          window.setTimeout(function () {
            dateOutput.style.display = "none";
          }, 4000);
        }
      }
    }
  }
});
