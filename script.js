
//for loop to calculate table of number
let num;
        function table(){
        num=document.getElementById('txt').value;
        for(let i=1;i<=10;i++)
    {
        let sol=num*i;
        console.log(num+'*'+i+'='+num*i);
        document.getElementById('multiply').innerHTML=sol+'\n';
    }



    // while loop to find the sum from 1 till num
    let a=1,sum=0;
    while(a<=num)
    {
        sum+=a;
        a++;
    }
    // console.log('solution with while loop='+sum);
    document.getElementById('sum').innerHTML='sum= '+sum;


    let b=10;
    //do while
    do{
        num++;
    }
    while(b<=num)
    {
        console.log(b+'>'+num);
        b++;
    }
    document.getElementById('show').innerHTML="program terminated";
    }

    //label
    let number=1;
    while(number<18)
    {
        if(number===15) {break};
        console.log(number);
        number++;
        
    }