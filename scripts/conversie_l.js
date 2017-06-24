function conversie_l() {
    function metri_in_mile(value) {
        return value * 0.000621371192;
    }

    function metri_in_yarzi(value) {
        return value * 1.0936133;
    }

    function metri_in_inch(value) {
        return value * 39.3700787;
    }

    function metri_in_picioare(value) {
        return value * 3.2808399;
    }

    function mile_in_metri(value) {
        return value * 1609.344;
    }

    function mile_in_yarzi(value) {
        return value * 1760;
    }

    function mile_in_inch(value) {
        return value * 63360;
    }

    function mile_in_picioare(value) {
        return value * 5280;
    }

    function yarzi_in_metri(value) {
        return value * 0.9144;
    }

    function yarzi_in_mile(value) {
        return value * 0.000568181818;
    }

    function yarzi_in_inch(value) {
        return value * 36;
    }

    function yarzi_in_picioare(value) {
        return value * 3;
    }

    function inch_in_metri(value) {
        return value * 0.0254;
    }

    function inch_in_mile(value) {
        return value * 0.0000157828283;
    }

    function inch_in_yarzi(value) {
        return value * 0.0277777778;
    }

    function inch_in_picioare(value) {
        return value * 0.0833333333;
    }

    function picioare_in_metri(value) {
        return value * 0.3048;
    }

    function picioare_in_mile(value) {
        return value * 0.000189393939;
    }

    function picioare_in_yarzi(value) {
        return value * 0.333333333;
    }

    function picioare_in_inci(value) {
        return value * 12;
    }

    function getLenght() {
    let temp = parseFloat($("#l_din").val());
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

  let value_to = $("#to_l").val().toString();
  let value_from = $("#from_l").val().toString();
  let lenght = getLenght();
  let v = $("#l_din").val().toString();

  if (lenght == "Gol" || !posibil_numar(v)) {
    $("#conv_sol_l").focus().val("Introduceti un numar...");
    $("#l_din").focus().val("");
  }
  else {
    if (value_from == value_to)
      $("#conv_sol_l").focus().val(v);
    else if (value_from == 1 && value_to == 2)
      $("#conv_sol_l").focus().val(metri_in_mile(v));
    else if (value_from == 1 && value_to == 3)
      $("#conv_sol_l").focus().val(metri_in_yarzi(v));
    else if (value_from == 1 && value_to == 4)
      $("#conv_sol_l").focus().val(metri_in_inch(v));
    else if (value_from == 1 && value_to == 5)
      $("#conv_sol_l").focus().val(metri_in_picioare(v));
    else if (value_from == 2 && value_to == 1)
      $("#conv_sol_l").focus().val(mile_in_metri(v));
    else if (value_from == 2 && value_to == 3)
      $("#conv_sol_l").focus().val(mile_in_yarzi(v));
    else if (value_from == 2 && value_to == 4)
      $("#conv_sol_l").focus().val(mile_in_inch(v));
    else if (value_from == 2 && value_to == 5)
      $("#conv_sol_l").focus().val(mile_in_picioare(v));
    else if (value_from == 3 && value_to == 1)
      $("#conv_sol_l").focus().val(yarzi_in_metri(v));
    else if (value_from == 3 && value_to == 2)
      $("#conv_sol_l").focus().val(yarzi_in_mile(v));
    else if (value_from == 3 && value_to == 4)
      $("#conv_sol_l").focus().val(yarzi_in_inch(v));
    else if (value_from == 3 && value_to == 5)
      $("#conv_sol_l").focus().val(yarzi_in_picioare(v));
    else if (value_from == 4 && value_to == 1)
      $("#conv_sol_l").focus().val(inch_in_metri(v));
    else if (value_from == 4 && value_to == 2)
      $("#conv_sol_l").focus().val(inch_in_mile(v));
    else if (value_from == 4 && value_to == 3)
      $("#conv_sol_l").focus().val(inch_in_yarzi(v));
    else if (value_from == 4 && value_to == 5)
      $("#conv_sol_l").focus().val(inch_in_picioare(v));
    else if (value_from == 5 && value_to == 1)
      $("#conv_sol_l").focus().val(picioare_in_metri(v));
    else if (value_from == 5 && value_to == 2)
      $("#conv_sol_l").focus().val(picoiare_in_mile(v));
    else if (value_from == 5 && value_to == 3)
      $("#conv_sol_l").focus().val(picioare_in_yarzi(v));
    else if (value_from == 5 && value_to == 4)
      $("#conv_sol_l").focus().val(picioare_in_inch(v));
  }
}