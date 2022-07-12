const createRows = () => {
  let row = document.createElement("div");
  row.className = "row";
  document.body.appendChild(row);

  return row;
};
const createNumbers = (counter, color) => {
  let number = document.createElement("div");
  number.className += "collumn";
  number.textContent = counter;
  number.style.backgxroundColor = color;
  return number;
};
const checkCounter = (counter) => {
  let isPrime = true;
  for (let i = 2; i < counter; i++) {
    if (counter % i == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime && counter > 1) {
    return "red";
  }
  if (counter % 2 == 0) return "lime";

  return "yellow";
};
const setLayout = (GetValue) => {
  checkRows();
  let value = GetValue();
  let rows = parseInt(value / 9);
  let counter = 0;
  for (let i = 0; i < rows + 1; i++) {
    let row = createRows();
    for (let j = 0; j < 9; j++) {
      if (value <= 0) return;
      let color = checkCounter(counter);
      let div = createNumbers(counter++);
      div.style.backgroundColor = color;
      row.appendChild(div);
      value--;
    }
  }
};
const checkRows = () => {
  let allrows = document.querySelectorAll(".row");
  console.log(allrows.length > 0);
  if (allrows.length > 0) {
    for (const node of allrows) {
      document.body.removeChild(node);
    }
  }
};
const input = document.getElementById("input");
const GetValue = () => {
  var inputValue =
    !isNaN(input.value) && input.value != "" ? input.value : undefined;
  return parseInt(inputValue);
};
