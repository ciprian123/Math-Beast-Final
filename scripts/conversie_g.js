function conversie_g() {
  function kilograme_in_grame(value) {
    return value * 1000;
  }

  function kilograme_in_oncii(value) {
    return value * 35.2739619;
  }

  function kilograme_in_livre(value) {
    return value * 2.20462262;
  }

  function kilograme_in_pietre(value) {
    return value * 0.157473044;
  }

  function grame_in_kilograme(value) {
    return value * 0.001;
  }

  function grame_in_oncii(value) {
    return value * 0.0352739619;
  }

  function grame_in_livre(value) {
    return value * 0.00220462262;
  }

  function grame_in_pietre(value) {
    return value * 0.000157473044;
  }

  function oncii_in_kilograme(value) {
    return value * 0.0283495231;
  }

  function oncii_in_grame(value) {
    return value * 28.3495231;
  }

  function oncii_in_livre(value) {
    return value * 0.0625;
  }

  function oncii_in_pietre(value) {
    return value * 0.00446;
  }

 
  function livre_in_kilograme(value) {
    return value * 0.45359237;
  }

  function livre_in_grame(value) {
    return value * 453.59237;
  }

  function livre_in_oncii(value) {
    return value * 0.0625;
  }

  function livre_in_pietre(value) {
    return value * 0.07142;
  }

  function pietre_in_kilograme(value) {
    return value * 6.35029318;
  }

  function pietre_in_grame(value) {
    return value * 6350.29318;
  }

  function pietre_in_oncii(value) {
    return value * 224;
  }

  function pietre_in_livre(value) {
    return value * 14;
  }

  function getWeight() {
    let temp = parseFloat($("#g_din").val());
    if (isNaN(temp))
      return "Gol";
    else
      return parseFloat(temp);
  }

  function posibil_numar(value) {
    if (value[0] == 0 && value.length > 1)
      return false;

    let nr_points = 0;
    for (let i = 0; i < value.length; ++i)
      if (value[i] == '.')
        nr_points++;
      else if (value[i] < '0' || value[i] > '9')
        return false;
    return ((nr_points == 1 && value[value.length - 1] != '.') || !nr_points)
  }

  let value_to = $("#to_g").val().toString();
  let value_from = $("#from_g").val().toString();
  let weight = getWeight();
  let v = $("#g_din").val().toString();

  if (weight == "Gol" || !posibil_numar(v)) {
    $("#conv_sol_g").focus().val("Introduceti un numar...");
    $("#g_din").focus().val("");
  }
  else {
    if (value_from == 1 && value_to == 1)
      $("#conv_sol_g").focus().val(v);
    else if (value_from == 1 && value_to == 2)
      $("#conv_sol_g").focus().val(kilograme_in_grame(v));
    else if (value_from == 1 && value_to == 3)
      $("#conv_sol_g").focus().val(kilograme_in_oncii(v));
    else if (value_from == 1 && value_to == 4)
      $("#conv_sol_g").focus().val(kilograme_in_livre(v));
    else if (value_from == 1 && value_to == 5)
      $("#conv_sol_g").focus().val(kilograme_in_pietre(v));
    else if (value_from == 2 && value_to == 1)
      $("#conv_sol_g").focus().val(grame_in_kilograme(v));
    else if (value_from == 2 && value_to == 2)
      $("#conv_sol_g").focus().val(v);
    else if (value_from == 2 && value_to == 3)
      $("#conv_sol_g").focus().val(grame_in_oncii(v));
    else if (value_from == 2 && value_to == 4)
      $("#conv_sol_g").focus().val(grame_in_livre(v));
    else if (value_from == 2 && value_to == 5)
      $("#conv_sol_g").focus().val(grame_in_pietre(v));
    else if (value_from == 3 && value_to == 1)
      $("#conv_sol_g").focus().val(oncii_in_kilograme(v));
    else if (value_from == 3 && value_to == 2)
      $("#conv_sol_g").focus().val(oncii_in_grame(v));
    else if (value_from == 3 && value_to == 3)
      $("#conv_sol_g").focus().val(v);
    else if (value_from == 3 && value_to == 4)
      $("#conv_sol_g").focus().val(oncii_in_livre(v));
    else if (value_from == 3 && value_to == 5)
      $("#conv_sol_g").focus().val(oncii_in_pietre(v));
    else if (value_from == 4 && value_to == 1)
      $("#conv_sol_g").focus().val(livre_in_kilograme(v));
    else if (value_from == 4 && value_to == 2)
      $("#conv_sol_g").focus().val(livre_in_grame(v));
    else if (value_from == 4 && value_to == 3)
      $("#conv_sol_g").focus().val(livre_in_oncii(v));
    else if (value_from == 4 && value_to == 4)
      $("#conv_sol_g").focus().val(v);
    else if (value_from == 4 && value_to == 5)
      $("#conv_sol_g").focus().val(livre_in_pietre(v));
    else if (value_from == 5 && value_to == 1)
      $("#conv_sol_g").focus().val(pietre_in_kilograme(v));
    else if (value_from == 5 && value_to == 2)
      $("#conv_sol_g").focus().val(pietre_in_grame(v));
    else if (value_from == 5 && value_to == 3)
      $("#conv_sol_g").focus().val(pietre_in_oncii(v));
    else if (value_from == 5 && value_to == 4)
      $("#conv_sol_g").focus().val(pietre_in_livre(v));
    else if (value_from == 5 && value_to == 5)
      $("#conv_sol_g").focus().val(v);
  }
}