$(document).ready(function() {
   $('.popup-form').on('submit', function(event) {
      event.preventDefault();

      var formData = $(this).serialize();
      $.ajax({
         type: 'POST',
         data: formData,
         url: './telegram.php',
         success: function() { 
            $('.popup-form-block')[0].classList.remove('popup-show');
            $('.popup-success')[0].classList.add('popup-show');
            $('.popup-form').find('input').val('');
            $('.popup-form').find('textarea').val('');
         },
         error: function() {
            $('.popup-form-block')[0].classList.remove('popup-show');
            $('.popup-error')[0].classList.add('popup-show');
            $('.popup-form').find('input').val('');
            $('.popup-form').find('textarea').val('');
         }
      });
   });
});