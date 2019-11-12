window.onload = function() {

  var nameSubmitBtn = document.querySelector('#nameSubmitBtn');
  var httpRequest;

  nameSubmitBtn.addEventListener('click', function(element) {
    element.preventDefault();

    httpRequest = new XMLHttpRequest();
    var search = document.querySelector('#search').value;
    
    // GET Request
    var url = "superheroes.php";
    httpRequest.onreadystatechange = processSearch;
    httpRequest.open('POST', url);
    //setting the Content-Type
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequest.send('search=' + encodeURIComponent(search) );
  });

  function processSearch() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        var response = httpRequest.responseText;
        var result = document.querySelector('#result');
        result.innerHTML = response;
      } else {
        alert('There was a problem with the request.');
      }
    }
  }

};