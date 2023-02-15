
var backDrop = document.getElementById('#backDrop');
var myLogOut = document.getElementById('#logout');
var closeBttn = document.getElementsByClassName('.close');

myLogOut.onClick = () => {
  console.log('yes');
  backDrop.style.display = 'block';
}

closeBttn.onclick = () => {
  backDrop.style.display = 'none';
}

window.onClick = (event) => {
  if (event.target == backDrop) {
    backDrop.style.display = 'none';
  }
}

const logout = async () => {
  const response = await fetch('/api/user', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#logoutConfirm').addEventListener('click', logout);
