// primero unir el boton de html//
const boton = document.getElementById("btn");
boton.addEventListener("click", () => {

  // aqui estamos evaluando el input //
  let comments = document.getElementById('comment').value;
  document.getElementById("cont").innerHTML = comments
    
}) 