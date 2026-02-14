const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let height = parseInt(document.querySelector("#height").value);
  let weight = parseInt(document.querySelector("#weight").value);
  let result = document.querySelector("#results");

  if (height == "" || height <= 0 || isNaN(height)) {
    result.innerHTML = `Please provide a valid height ${height}`;
  }
  else if (weight == "" || weight <= 0 || isNaN(weight)) {
    result.innerHTML = `Please provide a valid weight ${weight}`;
  }
  else{
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
     console.log(bmi);
    if (bmi < 18.6) {
      result.innerHTML = `Under Weight : <span>${bmi}</span>`;
    }
    else if (bmi >= 18.6 && bmi < 24.9) {
      result.innerHTML=`Normal : <span>${bmi}</span>`;
    }
    else {
      result.innerHTML = `Over Weight : <span>${bmi}</span>`;
    }
  }
});
