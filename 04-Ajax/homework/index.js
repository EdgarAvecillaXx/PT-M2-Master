//* metodo delete
$.delete = function (url, callback) {
  return $.ajax({
    url: url,
    type: "delete",
    success: callback,
  });
};

//* Mostrar amigos
$("#boton").click(
  //? Método GET
  () => {
    $("#lista").empty();
    $("#amigo").empty();
    $("#success").empty();
    $.get("http://localhost:5000/amigos", (res) => {
      for (data of res) {
        let li = document.createElement("li");
        li.innerHTML = data.name;
        $("#lista").append(li);
      }
    });
  }
);

//* buscar amigo por id
$("#search").click(() => {
  let id = $("#input").val();
  $("#lista").empty();
  $("#amigo").empty();
  $("#succes").empty();
  $.get(`http://localhost:5000/amigos/${id}`, (res) => {
    $("#amigo").html(res.name);
    $("#input").val("");
  });
  if (!document.getElementById("amigo").innerHTML)
    $("#amigo").html("El ID ingresado no es valido o no existe");
});

//* eliminar amigo
$("#delete").click(() => {
  let id = $("#inputDelete").val();
  $("#lista").empty();
  $("#amigo").empty();
  $("#success").empty();
  $.delete(`http://localhost:5000/amigos/${id}`, (req, res) => {
    $("#success").html("El amigo se elimino de forma correcta");
    $("#input").val("");
  });
  if (!document.getElementById("success").innerHTML)
    $("#success").html("El ID ingresado no es valido o no existe");
});
