document.getElementsByClassName('pad1')[0].getElementsByTagName('h1')[0].innerHTML = 'Spaceweb Test Coverage Report';

const tableBody = document.getElementsByClassName('coverage-summary')[0].getElementsByTagName('tbody')[0];

// Append no test packages into table
window.summaryData.forEach(({ package, data }) => {
  if (!data.lines.total) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
          <td>${package}</td>
          <td>There is no test in this package!</td>
          `;
    tr.style.color = 'white';
    tr.style.background = 'red';
    tableBody.appendChild(tr);
  }
});
