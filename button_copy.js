
$(function() {
    $( "#copie" ).click(function() {
    
        $( "#copie" ).addClass( "validate",4000);
        
        setTimeout(function() {
          $( "#copie" ).removeClass( "validate" );}, 1500 );

    });
  
    
});


    function copyToClipboard(element, button) {
        var text = document.querySelector(element).innerText;
        var input = document.createElement('textarea');
        input.innerHTML = text;
        document.body.appendChild(input);
        input.select();
        var result = document.execCommand('copy');
        document.body.removeChild(input);
      
      }