function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.textContent.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}

function addNew(){//on button click, permanently add HTML to file
  var input = document.getElementById("myInput");
  var ul = document.getElementById("myUL");
  var new_li = '<li><a href="#">' + input.innerHTML + '</a></li>';

  alert("Hello World")


}
