fetch("https://raw.githubusercontent.com/bromberis/tortas/main/data.json")
  .then((response) => response.json())
  .then((data) => dataLoad(data));

function dataLoad(duomenys) {
  data = duomenys;
  console.log(data);
}
