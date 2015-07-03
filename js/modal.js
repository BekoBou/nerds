document.addEventListener('DOMContentLoaded', function () {   
  var feedback = document.getElementById('feedback');
  var modal = document.querySelector(".modal");
  var close = document.querySelector(".modal-content-close");
  
  feedback.addEventListener('click', function (event) {
    event.preventDefault();
    modal.classList.add('modal-show');
  });
  
  close.addEventListener('click', function(event) {
    event.preventDefault();
    modal.classList.remove('modal-show');
  });
  
}, false);