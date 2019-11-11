// Plain JavaScript AJAX
window.onload = function() {

  var loadTextBtn = document.querySelector('#loadTextBtn');
  var httpRequest;

  loadTextBtn.addEventListener('click', function(element) {
    element.preventDefault();

    httpRequest = new XMLHttpRequest();

    // GET Request
    var url = "superheroes.php";
    httpRequest.onreadystatechange = loadSuperheroes;
    httpRequest.open('GET', url);
    httpRequest.send();
  });

 
  function loadSuperheroes() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        var response = httpRequest.responseText;
        var superheroList = document.querySelector('#List');
        superheroList.innerHTML = response;
        alert(superheroList.innerHTML)

      } else {
        alert('There was a problem with the request.');
      }
    }
  }

};
