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

  let value_to = $("#to").val().toString();
  let value_from = $("#from").val().toString();
  let temperature = getTemperature();

  if (temperature == "Gol")
    $("#conv_sol_t").focus().val("Introduceti un numar...");
  else {
    if (value_from == 1 && value_to == 1)
      $("#conv_sol_t").focus().val(celsius_to_kelvin(parseFloat($("#t_din").val())).toFixed(2));
    else if (value_from == 1 && value_to == 2)
      $("#conv_sol_t").focus().val(parseFloat($("#t_din").val()));
    else if (value_from == 1 && value_to == 3)
      $("#conv_sol_t").focus().val(celsius_to_fahrenheit(parseFloat($("#t_din").val())).toFixed(2));
    else if(value_from == 2 && value_to == 1)
      $("#conv_sol_t").focus().val(parseFloat($("#t_din").val()));
    else if (value_from == 2 && value_to == 2)
      $("#conv_sol_t").focus().val(parseFloat(kelvin_to_celsius($("#t_din").val())).toFixed(2));
    else if (value_from == 2 && value_to == 3)
      $("#conv_sol_t").focus().val(parseFloat(kelvin_to_fahrenheit($("#t_din").val())).toFixed(2));
    else if (value_from == 3 && value_to == 1)
      $("#conv_sol_t").focus().val((fahrenheit_to_kelvin($("#t_din").val())).toFixed(2));
    else if (value_from == 3 && value_to == 2)
      $("#conv_sol_t").focus().val(parseFloat(fahrenheit_to_celsius($("#t_din").val())).toFixed(2));
    else if (value_from == 3 && value_to == 3)
      $("#conv_sol_t").focus().val(parseFloat(($("#t_din").val())).toFixed(2));
  }
}
