$(document).ready(function() {
  var html = {
    body: `<textarea disabled id="messages" class="form-control" rows="20"></textarea>`,
    input: `<div class="input-group">
    <input
      type="text"
      class="form-control"
      placeholder="Digite sua mensagem"
    />`,
    button: `<span class="input-group-btn">
    <button class="btn btn-success" type="button">Enviar</button>
  </span>
</div>`
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
