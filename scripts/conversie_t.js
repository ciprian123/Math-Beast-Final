function conversie_t() {

  function celsius_to_kelvin(value){
    return parseFloat(value) + 273.15;
  }

  function celsius_to_fahrenheit(value) {
    return parseFloat(value) * (9 / 5) + 32;
  }

  function kelvin_to_celsius(value) {
    return parseFloat(value) - 273.15;
  }

  function kelvin_to_fahrenheit(value) {
    return (parseFloat(value) * (9 / 5) - 459.67);
  }

  function fahrenheit_to_celsius(value) {
    return (parseFloat(value) - 32) * 5 / 9;
  }

  function fahrenheit_to_kelvin(value) {
    return (parseFloat(value) + 459.67) * 5 / 9;
  }

  function getTemperature() {
    let temp = parseFloat($("#t_din").val());
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

  let value_to = $("#to").val().toString();
  let value_from = $("#from").val().toString();
  let temperature = getTemperature();
  let v = $("#t_din").val().toString();

  if (temperature == "Gol" || !posibil_numar(v)) {
    $("#conv_sol_t").focus().val("Introduceti un numar...");
    $("#t_din").focus().val("");
  }
  else {
    if (value_from == 1 && value_to == 1)
      $("#conv_sol_t").focus().val(celsius_to_kelvin(v));
    else if (value_from == 1 && value_to == 2)
      $("#conv_sol_t").focus().val(v);
    else if (value_from == 1 && value_to == 3)
      $("#conv_sol_t").focus().val(celsius_to_fahrenheit(v));
    else if(value_from == 2 && value_to == 1)
      $("#conv_sol_t").focus().val(v);
    else if (value_from == 2 && value_to == 2)
      $("#conv_sol_t").focus().val(kelvin_to_celsius(v));
    else if (value_from == 2 && value_to == 3)
      $("#conv_sol_t").focus().val(kelvin_to_fahrenheit(v));
    else if (value_from == 3 && value_to == 1)
      $("#conv_sol_t").focus().val(fahrenheit_to_kelvin(v));
    else if (value_from == 3 && value_to == 2)
      $("#conv_sol_t").focus().val(fahrenheit_to_celsius(v));
    else if (value_from == 3 && value_to == 3)
      $("#conv_sol_t").focus().val(v);
  }
}
