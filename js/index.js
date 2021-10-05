const submitButton = document.getElementById('btn-submit') 

submitButton.addEventListener('click', function(){
    const email = document.getElementById('email').value 
    const password = document.getElementById('password').value 
    if(email=== 'somonsikder777@gmail.com' && password==='1234'){
        window.location.href = "main.html"
    }
})

