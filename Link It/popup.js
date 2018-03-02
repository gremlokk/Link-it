$(document).ready(function(){

  //This function return the link of a searched string in a list
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();

    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)});
  });

  //This function copies selected section into clipboard
  $( ".results" ).click(function() {
    $(this).focus();
    $(this).select();
    document.execCommand('copy');
  });

  //adds new entry to list when button clicked
  $("#add-button").click(function(){
    var input = $("#myInput").val();
    $("tbody").prepend("<tr><td class='results'>" + input + "</td></tr>");
    alert("button clicked: " + new_input);
  });


});
