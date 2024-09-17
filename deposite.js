document.getElementById('btn-depo').addEventListener('click',function(){
    const userAmount=document.getElementById('depo-am');
    const newdepostr= userAmount.value;
    const newdepo=parseFloat(newdepostr);

    const depoTotalElement=document.getElementById('dam');
    const previousdepoTotalstr=depoTotalElement.innerText;
    const previousdepoTotal=parseFloat(previousdepoTotalstr);
    depoTotalElement.innerText=newdepo;

    const currentdepo=newdepo+previousdepoTotal;

    depoTotalElement.innerText=currentdepo;

    userAmount.value='';

    const TotalAmount=document.getElementById('total-amount');
    const previousTotalAmountstr=TotalAmount.innerText;
    const previousTotalAmount=parseFloat(previousTotalAmountstr);

    const currentTotalAmount=previousTotalAmount+newdepo;
    TotalAmount.innerText=currentTotalAmount;




})

 