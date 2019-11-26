$(document).ready(function() {
  var html = {
    textarea: `<textarea class="form-control"></textarea>`,
    input: `
  <input
    type="text"
    class="form-control"
    placeholder="Digite sua mensagem"
  />
`,
    button: `<span class="input-btn">
    <button class="btn btn-success" type="button">Enviar</button>
  </span>`
  };

  $(".btn-insert").click(function() {
    var rel = $(this).attr("rel");
    var value = $("#code").val();

    $("#code").html(value + html[rel]);
  });

  $("#renderCode").click(function() {
    var code = $("#code").val();
    console.log(code);

    $("#body").html(code);
  });
});
