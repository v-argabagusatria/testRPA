function(element,input){
    //document.getElementsByName("cf-turnstile-response").item(0).value=input;
    document.getElementsByName("g-recaptcha-response").item(0).value=input;
    var button = document.getElementById('fCAWs6');
    button.click();
    //document.querySelector('form').submit();
}