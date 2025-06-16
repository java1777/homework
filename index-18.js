const btn = document.getElementById('translateBtn');
btn.addEventListener('click', function () {
  const upLang = document.getElementById('sourceLang').value;
  const downLang = document.getElementById('targetLang').value;

  if (upLang === 'uz' && downLang !== 'uz') {
    uzbTrans();
  } else if (upLang === 'en' && downLang !== 'en') {
    engTrans();
  } else {
    alert('Xatolik bor');
  }
});

async function engTrans() {
  alert('Eng');
}

async function uzbTrans() {
  alert('UZB');
}
