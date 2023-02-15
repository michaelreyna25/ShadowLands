siBtn.addEventListener("submit", async function (event) {
  event.preventDefault();

  if (password !== cpassword) return;

  const response = await fetch("/api/user", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    req.session.save(() => {
      req.session.user_id = userData.dataValues.id;
      req.session.logged_in = true;
      res.json({ user: userData, message: "You are now logged in" });
    });
    res.render("homepage", {
      logged_in: req.session.logged_in,
    });
  } else {
    console.error("Error creating user:", response.statusText);
  }
});
siBtn.addEventListener("submit", async function (event) {
  event.preventDefault();
  const username = document.querySelector('input type="username"');
  const email = document.querySelector('input type="email"');
  const password = document.querySelector('input type="password"');
  //check if any user has the username or email

  const response = await fetch("/api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    console.log("User created successfully:", data);
  } else {
    console.error("Error creating user:", response.statusText);
  }
});
