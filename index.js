let button1=document.querySelector('.butt');


var calculate=(first,second)=>
{
    var first=parseInt(document.getElementById('first').value);
    var second=parseInt(document.getElementById('second').value);
    
    var operator=document.getElementById('operator').value;
    
    if(operator==='+')
    {
        document.getElementById('result').value=first+second;
    }
    if(operator==='-')
    {
        document.getElementById('result').value=first-second;
    }
    if(operator==='*')
    {
        document.getElementById('result').value=first*second;
    }
    if(operator==='/')
    {
        if(first==0||second==0)
        {
           console.warn("enter correct value");
        }
        document.getElementById('result').value=first/second;
    }
    if(first==null)
    {
        alert("plz enter no");
    }
   
    console.log(`first no is::${first}`);
console.log(`second no is::${second}`);

}

button1.addEventListener('click',calculate());