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
This is a fun and exciting game that is similar to Pokemon where you can collect and battle monsters throughout your journey. The goal of the game is to become the best monster trainer in the world by collecting as many monsters as you can and defeating other trainers in battles.

# Installation Instructions
Make sure your computer has mysql already
- In your terminal run `npm run seed`
- After that is completed run `npm run watch`
- Then at the bottom click on the "localhost" link.
- It will then take you to our website where you can begin the game.

# Github Account
- [Ashley](https://github.com/ashrean)
- [Michael](https://github.com/michaelreyna25)
- [Troy](https://github.com/troynj)
- [Deployed Link]()

# Images
![alt text]()

# Contacts
- Linkedin Accounts
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
- Class Activities
- W3 Schools
- Google Images

# Credits
- Ashley Sese
- Michael Reyna
- Troy Johnson
