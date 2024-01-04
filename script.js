
//for loop to calculate table of number
let num;
        function table(){
        num=document.getElementById('txt').value;
        for(let i=1;i<=10;i++)
    {
        let sol=num*i;
        console.log(num+'*'+i+'='+num*i);
        // document.getElementById('multiply').innerHTML=sol+'\n';
    }

     console.log(typeof(table()));

    // while loop to find the sum from 1 till num
    let a=1,sum=0;
    while(a<=num)
    {
        sum+=a;
        a++;
    }
    // console.log('solution with while loop='+sum);
    document.getElementById('sum').innerHTML='sum= '+sum;


    let b=1000;
    // do while
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



    // for in loop used in objects
    // let marks={'taman':76,'shivam':67,'karan':75,'gaurav':77};
    // for(const i in marks)
    // {
    //     console.log(i);
    // }
    
    // let car=['suzuki','ford','tata','mahindra'];
    // for(const i of car)
    // {
    //     console.log(i);
    // }


    // conditional statements
    // if else statement
    let Age;
    function find_age()
    {
        Age=document.getElementById('age').value;
        if(Age>=18)
        {
            document.getElementById('display_age').innerHTML="You can vote";
        }
        else{
            document.getElementById('display_age').innerHTML="No you cannot vote";
        }
    }
    // else if statement
    let Marks;
    function find_marks()
    {
        Marks=document.getElementById('marks').value;
        if(Marks>=90)
        {
            document.getElementById('display_marks').innerHTML="Merit";
        }
        else if(Marks<90 && Marks>=80)
        {
            document.getElementById('display_marks').innerHTML="Above Average";
        }
        else if(Marks<80 && Marks>=70)
        {
            document.getElementById('display_marks').innerHTML="Average";
        }
        else if(Marks<70 && Marks>=60)
        {
            document.getElementById('display_marks').innerHTML="Below Average";
        }
        else{
            document.getElementById('display_marks').innerHTML="Poor";
        }
    }

if(Symbol("abc")===Symbol("abc"))
{
    console.log("abc");
}
else
    console.log("nitesh");

    console.log(typeof(Symbol));

    const a=new String("divya")
    console.log(a);
    //  Ternery operator