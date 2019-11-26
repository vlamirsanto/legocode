$(document).ready(function() {
  var codeInserted = `<textarea class="form-control"></textarea>
<div class="input-group">
  <input
    type="text"
    class="form-control"
    placeholder="Digite sua mensagem"
  />
  <span class="input-group-btn">
    <button class="btn btn-success" type="button">Enviar</button>
  </span>
</div>`;
  $("#code").html(codeInserted);

  $("#renderCode").click(function() {
    var code = $("#code").val();
    console.log(code);

    $("#body").html(code);
  });
});
