// We need a class name for each of those icons that are created
// We need an event.listener/hoover for each of the character icons
//

const selectChar = (selectedCharacter) => {
    fetch(`/api/characters/${selectedCharacter}`)
      .then(response => response.json())
      .then(data => {
        const stats = data.stats;
        const imageUrl = data.imageUrl;

        // Display the selected character's stats
        console.log(stats);

        // Display the selected character's image
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        document.body.appendChild(imageElement);
      })
      .catch(error => {
        console.error(error);
      });
  };
