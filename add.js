function go(hei) {
    window.location.href = "http://www." + hei + ".ac.uk";
}

$(document).ready(function(){
  $("p").click(function(){
    $(this).hide();
  });
});

$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown("slow");
  });
});
