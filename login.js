document.getElementById('btn-submit').addEventListener('click',function(){
    const userEmail=document.getElementById('u-email');
    const email= userEmail.value;

    const userPassword=document.getElementById('u-password');
    const password=userPassword.value;

    if(email==='aziza@mail.com'&& password==='aziza'){
        window.location.href='bank.html';
    }
    else{
        console.log('invalid user')
    }
})