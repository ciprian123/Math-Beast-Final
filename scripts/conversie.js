function conversie() {
  function getNumber() {
    let number = $("#numar").val();
    if (isNaN(number) || number <= 0 || number - Math.floor(number) !== 0)
      return -1;
    else
      return parseInt(number);
  }

  function getBase() {
    let base = $("#baza").val();
    if (isNaN(base) || base <= 0 || base - Math.floor(base) !== 0)
      return -1;
    else
      return parseInt(base);
  }

  function conversie(numar, baza) {
    let nr = 0, p = 1, aux = numar;

    while (aux > 0) {
      nr = nr + p * (aux % baza);
      p *= 10;
      aux = parseInt(aux / baza);
    }
    return nr;
  }

  function conversie_b11(numar) {
    let text = "";
    while (numar > 0) {
      if (numar % 11 < 10)
        text += ((numar % 11).toString());
      if (numar % 11 === 10)
        text += 'A';
      numar = parseInt(numar / 11);
    }

    $("#conv_sol").focus().val(text.split("").reverse().join(""));
  }

  function conversie_b12(numar) {
    let text = "";
    while (numar > 0) {
      if (numar % 12 < 10)
        text += ((numar % 12).toString());
      if (numar % 12 === 10)
        text += 'A';
      if (numar % 12 === 11)
        text += 'B';
      numar = parseInt(numar / 12);
    }

    $("#conv_sol").focus().val(text.split("").reverse().join(""));
  }

  function conversie_b13(numar) {
    let text = "";
    while (numar > 0) {
      if (numar % 13 < 10)
        text += ((numar % 13).toString());
      if (numar % 13 === 10)
        text += 'A';
      if (numar % 13 === 11)
        text += 'B';
      if (numar % 13 === 12)
        text += 'C';
      numar = parseInt(numar / 13);
    }

    $("#conv_sol").focus().val(text.split("").reverse().join(""));
  }

  function conversie_b14(numar) {
    let text = "";
    while (numar > 0) {
      if (numar % 14 < 10)
        text += ((numar % 14).toString());
      if (numar % 14 === 10)
        text += 'A';
      if (numar % 14 === 11)
        text += 'B';
      if (numar % 14 === 12)
        text += 'C';
      if (numar % 14 === 13)
        text += 'D';
      numar = parseInt(numar / 14);
    }

    $("#conv_sol").focus().val(text.split("").reverse().join(""));
  }

  function conversie_b15(numar) {
    let text = "";
    while (numar > 0) {
      if (numar % 15 < 10)
        text += ((numar % 15).toString());
      if (numar % 15 === 10)
        text += 'A';
      if (numar % 15 === 11)
        text += 'B';
      if (numar % 15 === 12)
        text += 'C';
      if (numar % 15 === 13)
        text += 'D';
      if (numar % 15 === 14)
        text += 'E';
      numar = parseInt(numar / 15);
    }

    $("#conv_sol").focus().val(text.split("").reverse().join(""));
  }

  function conversie_b16(numar) {
    let text = "";
    while (numar > 0) {
      if (numar % 16 < 10)
        text += ((numar % 16).toString());
      if (numar % 16 === 10)
        text += 'A';
      if (numar % 16 === 11)
        text += 'B';
      if (numar % 16 === 12)
        text += 'C';
      if (numar % 16 === 13)
        text += 'D';
      if (numar % 16 === 14)
        text += 'E';
      if (numar % 16 === 15)
        text += 'F';
      numar = parseInt(numar / 16);
    }

    $("#conv_sol").focus().val(text.split("").reverse().join(""));
  }


  let base = getBase();
  let number = getNumber();
  if (number === -1) {
    $("#conv_sol").focus().val("Scrie un număr natural nenul!");
  } else if (number === 1) {
    $("#conv_sol").focus().val("1");
  }
  else {
    if (base < 2 || base > 16)
      $("#conv_sol").focus().val("Baza este incorecta!");
    else {
      if (base === 16)
        conversie_b16(number);
      else if (base === 15)
        conversie_b15(number);
      else if (base === 14)
        conversie_b14(number);
      else if (base === 13)
        conversie_b13(number);
      else if (base === 12)
        conversie_b12(number);
      else if (base === 11)
        conversie_b11(number);
      else
        $("#conv_sol").focus().val(conversie(number, base));
    }
  }
}



