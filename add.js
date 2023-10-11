function go(hei) {
    window.location.href = "http://www." + hei + ".ac.uk";
}

$(document).ready(function(){
  $("p").click(function(){
    $(this).hide();
  });
});
