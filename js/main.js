const episodesContainer = document.getElementById('episodes-container');

for (let i = 1; i <= 2; i++) {
  const episodeCard = document.createElement('div');
  episodeCard.className = 'episode-card mb-4';
  episodesContainer.appendChild(episodeCard);

  const episodeHeader = document.createElement('div');
  episodeHeader.className = 'flex justify-between cursor-pointer items-center py-2 px-4 bg-gray-700 rounded-t-lg';
  episodeCard.appendChild(episodeHeader);

  const episodeTitle = document.createElement('h2');
  episodeTitle.className = 'text-2xl font-bold text-white';
  episodeTitle.textContent = `Episode ${i}`;
  episodeHeader.appendChild(episodeTitle);

  const toggleButton = document.createElement('button');
  toggleButton.className = 'focus:outline-none';
  episodeHeader.appendChild(toggleButton);

  const episodeContent = document.createElement('div');
  episodeContent.className = 'episode-content hidden-content p-4 bg-gray-800 text-white rounded-b-lg';
  episodeCard.appendChild(episodeContent);

  // ... The rest of your code

  toggleButton.addEventListener('click', () => {
    episodeContent.classList.toggle('hidden-content');
    if (!episodeContent.classList.contains('hidden-content')) {
      fetch(`Episodes/Episode_${i}.md`)
        .then(response => response.text())
        .then(text => {
          console.log(text)
          const converter = new showdown.Converter();
          episodeContent.innerHTML = converter.makeHtml(text);
        })
        .catch(error => console.error(error));
    }
  });
}
