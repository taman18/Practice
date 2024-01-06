
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

// if(Symbol("abc")===Symbol("abc"))
// {
//     console.log("abc");
// }
// else
//     console.log("nitesh");

//     console.log(typeof(Symbol));

//     const a=new String("divya")
//     console.log(a);
    

// switch statements
    // let s;
    // function find_week(){
    // s=document.getElementById("week_btn").value;
    // console.log(s);
    // switch(s)
    // {
    //     case "1":
    //     {
    //         alert("monday");
    //         document.getElementById("week").innerHTML="monday";
    //         break;
    //     }
    //     case "2":
    //     {
    //         alert("Tuesday");
    //         document.getElementById("week").innerHTML="Tuesday";
    //         break;
    //     }
    //     case "3":
    //     {
    //         alert("Wednesday");
    //         document.getElementById("week").innerHTML="Wednesday";
    //         break;
    //     }
    //     case "4":
    //     {
    //         alert("Thrusday");
    //         document.getElementById("week").innerHTML="Thursday";
    //         break;
    //     }
    //     case "5":
    //     {
    //         alert("Friday");
    //         document.getElementById("week").innerHTML="Friday";
    //         break;
    //     }
    //     case "6":
    //     {
    //         alert("Saturday");
    //         document.getElementById("week").innerHTML="Saturday";
    //         break;
    //     }
    //     case "7":
    //         {
    //             alert("sunday");
    //             document.getElementById("week").innerHTML="Sunday";
    //             break;
    //         }
    //         default:
    //             alert("please enter correct option!!!!");
    //             document.getElementById("week").innerHTML="Please enter correct option!!!";
                
    // }
    // }

        // Ternary operator
        // find the number is odd or even using ternary operator
        let e;
        function find_odd(){
        e=document.getElementById("odd_even").value;

        e%2===0 ? alert("even") : alert("odd");
        }


    // 05/01/2024
    // Differene between let var and const
    // var x=10;
    // console.log(x);
    // function practice()
    // {
    //      x=20;
    //     console.log(x);
    // }
    // practice();
    // console.log(x);

    // let x=100;
    // console.log(x);
    // function practice()
    // {
    //        let x=20;
    //     console.log(x);
    // }
    // practice();
    // console.log(x);
    

    // const x=100;
    // console.log(x);
    // function practice()
    // {
    //     console.log(x);
    // }
    // practice();


    // Arrays in javascript
    // 1st way
    let name1=[10,82,43,48,54,32];
    // 2nd way
    let name2=new Array(10,82,21,49);
    console.log(name1);
    console.log(name2);
    // Methods of array
    console.log(name1.push(32));  //return length of array
    console.log(name1.unshift(21));   //return length of array
    console.log(name2.pop());
    console.log(name2.shift());
    console.log(name1);
    let arr1=[1,2,3,4];
    let arr2=[true,false,true];
    // let arr3=arr1.concat(arr2);
    // console.log(arr3);
    console.log(arr1.concat(arr2)); //return new array
    let mynum=[21,32,4,12,21,44,89];
    console.log(mynum.indexOf(21,1));
    let arr3=[...arr1,...arr2];  //spread function
    console.log(arr3);
    console.log(arr3.slice(1,4));
    // for each loop
    arr3.forEach(function(index,name,abc){
        console.log(index,name,abc);
    })
    // let num1=['T','a','m','a','n'];
    // console.log(num1.join(""));
    // let num2=num1.join("");
    // console.log(num2);
    // let num3=num2.split();
    // console.log(num3);
    const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
    fruits.slice(1,4);
    console.log(fruits);
    //hy this is my project