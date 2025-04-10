fetch('data/prices.json')
      .then(response => response.json())
      .then(data => {
        const tableBody = document.querySelector('#rentalTable tbody');
        data.prices.forEach(item => {
          const row = `
            <tr>
              <td>${item.type}</td>
              <td>${item.persons}</td>
              <td>${item.rhd}</td>
              <td>${item.rfd}</td>
              <td>${item.whd}</td>
              <td>${item.wfd}</td>
            </tr>
          `;
          tableBody.insertAdjacentHTML('beforeend', row);
        });
      })
      .catch(error => console.error('Error loading JSON:', error));