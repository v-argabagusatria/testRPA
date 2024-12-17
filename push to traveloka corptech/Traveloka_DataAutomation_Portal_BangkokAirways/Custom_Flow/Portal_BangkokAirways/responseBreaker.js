function(element,input){
    document.getElementsByName("g-recaptcha-response").item(0).value=input;
    var button = document.getElementById('btnLogin');
    button.click();
    //document.querySelector('form').submit();
}