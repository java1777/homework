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
async function translateText(text, firtstLang, secondLang) {
  const URL = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${firtstLang}|${secondLang}`
  try {
    const res = await fetch(URL).then(res => res.json())
    if (res.responseStatus !== 200) {
      throw new Error(`Serverda xatolik ${res.responseStatus}`)
    }
    return res.responseData.translatedText
  } catch (error) {
    const res = await fetch(URL).then(res => res.json())
    return `Serverda xatolik :(`
  }
}
async function engTrans() {
  // alert('salom')
  const input = document.getElementById('inputText').value;
  const output = document.getElementById('outputText')
  const english = await translateText(input, 'en', 'uz').then(res => res.json())
  output.value=english
}

async function uzbTrans() {
  const uzbek=await translateText()
}