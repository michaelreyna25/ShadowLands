// trying this code first
const myLogOut = document.querySelector(".logout");

if (myLogOut) {
  const backDrop = document.querySelector(".back-drop");
  const closeBttn = document.querySelector(".close");

  myLogOut.onclick = () => {
    console.log('yes');
    backDrop.style.display = 'block';
  }

  closeBttn.onclick = () => {
    backDrop.style.display = 'none';
  }

  window.onclick = (event) => {
    if (event.target == backDrop) {
      backDrop.style.display = 'none';
    }
  }

  const logout = async () => {
    const response = await fetch('/api/user/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ logout: true })
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }

  document.querySelector('#logoutConfirm').addEventListener('click', logout);
}
