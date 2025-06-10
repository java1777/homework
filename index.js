const h1 = document.createElement('h1')
const email = document.getElementById('email');
const pass = document.getElementById('password');
const btn = document.getElementById('btn');
// const pass1=Number(pass.value)
// if(email.value.length==0 || pass.value.length==0 || typeof pass1=='number'){
//   alert("Son kiriting va bo'sh joy qomasin")
// }
const res=document.getElementById('btn');
res.addEventListener('click',()=>{
  const a=`Login: ${email.value}  Password: ${pass.value}`
  h1.textContent=a
  document.body.appendChild(h1)
})
