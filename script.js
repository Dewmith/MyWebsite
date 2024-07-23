document.addEventListener("DOMContentLoaded", () => {
    fetch('content.json')
        .then(response => response.json())
        .then(data => {
            document.querySelector('.quote').textContent = data.quote.text;
            document.querySelector('.quote-author').textContent = `- ${data.quote.author}`;
            const paragraphsContainer = document.getElementById('paragraphs');
            data.paragraphs.forEach(paragraph => {
                const p = document.createElement('p');
                p.textContent = paragraph;
                p.classList.add('fadeInParagraph');
                paragraphsContainer.appendChild(p);
            });
        });

    // Handle name form submission
    document.getElementById('name-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const nameInput = document.getElementById('name-input');
        const name = nameInput.value.trim();
        if (name) {
            addNameToList(name);
            nameInput.value = '';
        }
    });

    // Load saved names from local storage
    loadNamesFromLocalStorage();
});

function showAlert() {
    alert('You are amazing and capable of incredible things!');
}

function addNameToList(name) {
    const nameList = document.getElementById('name-list');
    const li = document.createElement('li');
    li.textContent = name;
    nameList.appendChild(li);
    saveNameToLocalStorage(name);
}

function saveNameToLocalStorage(name) {
    let names = localStorage.getItem('names');
    if (names) {
        names = JSON.parse(names);
    } else {
        names = [];
    }
    names.push(name);
    localStorage.setItem('names', JSON.stringify(names));
}

function loadNamesFromLocalStorage() {
    const names = localStorage.getItem('names');
    if (names) {
        const nameList = JSON.parse(names);
        nameList.forEach(name => {
            addNameToList(name);
        });
    }
}
