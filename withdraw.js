document.getElementById('btn-wdraw').addEventListener('click',function(){

    const withDrawAmountField=document.getElementById('wdraw-am');
    const withdrawAmountstr=withDrawAmountField.value;
    const withdrawAmount=parseFloat(withdrawAmountstr);

    const previousWidthdrawField=document.getElementById('wam');
    const previousWidthdrawstr=previousWidthdrawField.innerText;
    const previousWidthdraw=parseFloat(previousWidthdrawstr);

    const currentWithdrawAmount=withdrawAmount+previousWidthdraw;

    previousWidthdrawField.innerText=currentWithdrawAmount;

    const TotalAmount=document.getElementById('total-amount');
    const previousTotalAmountstr=TotalAmount.innerText;
    const previousTotalAmount=parseFloat(previousTotalAmountstr);

    const newTotalAfterWithdraw=previousTotalAmount-withdrawAmount;
    TotalAmount.innerText=newTotalAfterWithdraw;


    withDrawAmountField.value='';
})