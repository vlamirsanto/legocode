$(document).ready(function() {
  var html = {
    body: `<textarea class="form-control"></textarea>`,
    input: `<input
    type="text"
    class="form-control"
    placeholder="Digite sua mensagem"
  />`,
    button: `<span class="input-btn">
    <button class="btn btn-success" type="button">Enviar</button>
  </span>`
  };

  $(".btn-insert").click(function() {
    var rel = $(this).attr("rel");
    var value = $("#code").val();

    $("#code").html(value + html[rel] + "\n");
  });

  $("#renderCode").click(function() {
    var code = $("#code").val();
    console.log(code);

    $("#chat1").html(code);
  });
});
