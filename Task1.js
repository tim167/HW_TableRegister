document.getElementById('registration-form').addEventListener('submit', function(event) {
  event.preventDefault(); 

  let firstName = document.getElementById('first-name').value;
  let lastName = document.getElementById('last-name').value;
  let birthdate = document.getElementById('birthdate').value;
  let gender = document.querySelector('input[name="gender"]:checked').value;
  let city = document.getElementById('city').value;
  let address = document.getElementById('address').value;
  let languages = [];

  let languageInputs = document.querySelectorAll('input[type="checkbox"]:checked');
  for (let i = 0; i < languageInputs.length; i++) {
    languages.push(languageInputs[i].value);
  }

  let tableRow = document.createElement('tr');
  let tableData1 = document.createElement('td');
  tableData1.textContent = firstName;
  tableRow.appendChild(tableData1);
  let tableData2 = document.createElement('td');
  tableData2.textContent = lastName;
  tableRow.appendChild(tableData2);
  let tableData3 = document.createElement('td');
  tableData3.textContent = birthdate;
  tableRow.appendChild(tableData3);
  let tableData4 = document.createElement('td');
  tableData4.textContent = gender;
  tableRow.appendChild(tableData4);
  let tableData5 = document.createElement('td');
  tableData5.textContent = city;
  tableRow.appendChild(tableData5);
  let tableData6 = document.createElement('td');
  tableData6.textContent = address;
  tableRow.appendChild(tableData6);
  let tableData7 = document.createElement('td');
  tableData7.textContent = languages.join(', ');
  tableRow.appendChild(tableData7);

  let table = document.createElement('table');
  table.appendChild(tableRow);

  let tableContainer = document.getElementById('table-container');
  tableContainer.innerHTML = '';
  tableContainer.appendChild(table);
});