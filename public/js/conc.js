async function updateLocation() {
  const { href } = window.location;

  const urlArr = href.split("/");
  const location_id = urlArr[urlArr.length - 1]
  const next = Number(location_id) + 1
//req.session
const ses = 5
  const response = await fetch(`/api/player/${ses}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({progress: 0, location_id: next}),
  });
  if (response.ok) {
    const data = await response.json();
    console.log("Successfully updated player's stats: ", data);
    document.location.replace(`http://localhost:3001/location/${next}`)
  } else {
    console.error(
      "Error updating player's stast:",
      response.statusText
    );
  }
}

document
  .getElementById("next-location")
  .addEventListener("click", updateLocation);
