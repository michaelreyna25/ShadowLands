# ShadowLands
Battle Through Darkness


# Table of Contents
- [ShadowLands](#shadowlands)
- [Table of Contents](#table-of-contents)
- [Description](#description)
- [Installation Instructions](#installation-instructions)
- [Github Account](#github-account)
- [Images](#images)
- [Contacts](#contacts)
- [Code Snippets](#code-snippets)
- [Resources](#resources)
- [Credits](#credits)


# Description
This game was inspired by Pokemon (a childhood favorite), the sequence and over all of the game is simliar to the beloved classic.
The user goes starts their journey by selecting a monster, then the user goes through a journey battling wild monsters to get their own monsters to level up or
# Installation Instructions

# Github Account
- [Ashley](https://github.com/ashrean)
- [Michael](https://github.com/michaelreyna25)
- [Troy](https://github.com/troynj)
- [Deployed Link]()

# Images
![alt text]()

# Contacts
- Linedin Accounts
- [Ashley](https://www.linkedin.com/in/ashleyrean/)
- [Michael](https://www.linkedin.com/in/michael-reyna-35b597245/)
- [Troy](https://www.linkedin.com/in/troy-johnson-abb5a625a/)

# Code Snippets
``` async function createBattle(type, id) {
  const response = await fetch(`/api/battle/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ type, id }),
  });

  if (response.ok) {
    const data = await response.json();
    console.log("Arena creation successful:", data);
  } else {
    console.error("Error creating arena:", response.statusText);
  }
}
```
# Resources
- Class Activties
- W3 Schools
- Google Images

# Credits
- Ashley Sese
- Michael Reyna
- Troy Johnson
