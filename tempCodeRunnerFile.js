function hisoblashXaridni(narxInput, miqdorInput) {
  const narx = Number(narxInput);
  const miqdor = Number(miqdorInput);

  if (isNaN(narx) || isNaN(miqdor)) {
    console.log("Noto'g'ri ma'umot");
    return;
  }

  let umumiySumma = narx * miqdor;
  let yakuniySumma = umumiySumma;

  if (umumiySumma > 100000) {
    yakuniySumma = Math.floor(umumiySumma * 0.9);
  }

  console.log(yakuniySumma);
}

hisoblashXaridni("50000", "3");
hisoblashXaridni("60000", "2");
hisoblashXaridni("abc", "5");
