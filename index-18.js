function translateText() {
  let text = document.getElementById("textInput").value;
  let targetLang = document.getElementById("targetLang").value;

  fetch("https://libretranslate.de/translate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      q: text,
      source: "auto",
      target: targetLang,
      format: "text"
    })
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById("result").innerText = data.translatedText;
    })
    .catch(err => {
      document.getElementById("result").innerText = "Xatolik yuz berdi: " + err;
    });
}
