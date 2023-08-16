const logout = async function() {
  const response = await fetch('/api/user/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to log out');
  }
};

console.log('running logout script');

const logoutBtn = document.querySelector('#logout-link');
if (logoutBtn) {
  logoutBtn.addEventListener('click', logout);
}