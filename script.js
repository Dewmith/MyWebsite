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
});

function showAlert() {
    alert('You are amazing and capable of incredible things!');
}
