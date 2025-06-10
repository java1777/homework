const h1 = document.createElement('h1')
const email = document.getElementById('mailInput');
const pass = document.getElementById('passwordInput');
const res = document.getElementById('btn');
res.addEventListener('click', () => {
  if (email.value.length === 0 || pass.value.length === 0) {
    alert("Bo'sh joy qomasin")
    return
  }
  const a = `Login: ${email.value}  Password: ${pass.value}`
  h1.textContent = a
  h1.style.color='red'
  document.body.appendChild(h1)
})
