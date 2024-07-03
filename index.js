document.addEventListener('DOMContentLoaded', fetchData);

// Function to fetch data from API
function fetchData() {
const url = 'https://jsonplaceholder.typicode.com/posts';

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        displayData(data);
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
        document.getElementById('data-container').innerText = 'Failed to load data.';
    });
}

// Function to display data on the webpage
function displayData(data) {
const container = document.getElementById('data-container');
container.innerHTML = '';

data.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.innerText = item.title;

    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.innerText = item.body;

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    card.appendChild(cardBody);
    container.appendChild(card);
    });
}
