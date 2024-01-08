
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
   
    //08/01/2024
    //slice method
    // let num_array=[1,3,4,5,21,65];
    // console.log(num_array);
    // console.log(num_array.slice(1,4));   //3 4 5
    // let num_array1=num_array.slice(1,4);
    // console.log(num_array1);
    // console.log(num_array);
    // console.log(num_array.slice(1));  //3 4 5 21 65
    // console.log(num_array);
    const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
    console.log(fruits);
    // fruits.splice(2,1,"mango");
    fruits.splice(3,0,"mango");
    // fruits.splice(1,2);
    console.log(fruits);
    // let new_fruits=fruits.splice(1,2);
    // console.log(fruits.splice(1,2));
    // console.log(fruits);
    // const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
    // let fruits1=fruits.slice(-1,-3);
    // console.log(fruits1);
    // console.log(fruits);
   

    //reduce function
    // let arr=[3,5,6,1,7];
    // const output=arr.reduce(function(acc,curr){
    //     if(acc<curr)
    //     {
    //         acc=curr;
    //     }   
    //     return acc;
    // },arr[0])
    // console.log(output);
     


    function shoppingSpree(arr) {
        // your code heres
        const Items_sum=arr.reduce(function(acc, curr)
        {
            return acc+curr.price;
        },300)
        return Items_sum;
     }
     
     var wishlist = [
         { title: "Tesla Model S", price: 90000 },
         { title: "4 carat diamond ring", price: 45000 },
         { title: "Fancy hacky Sack", price: 5 },
         { title: "Gold fidgit spinner", price: 2000 },
         { title: "A second Tesla Model S", price: 90000 }
     ];
     
     console.log(shoppingSpree(wishlist));
     
     //A4 (task1)
     let array = [12, 13, 14, 12, 13, 14, 12, 13, 14, 15, 99, 128];
     //with loop
    //  function Check_num(arr)
    //  {
    //     for(m of arr)
    //     {
    //         if(m===14) return true;
    //     }
    //     return false;
    //  }
    //  console.log("ans is->"+Check_num(array));
    

     //with inbuilt functions
     function check80(arr)
     {
        console.log(arr.includes(14)); //return statement doubt
     }
     check80(array);
     
    //  A4(task2)
    //  using for loop
    // function check_80(arr)
    // {
    //     for(i of arr)
    //     {
    //         if(i<80) return false;
    //     }
    //     return true;
    // }
    // console.log(check_80(array));

    //  using inbuilt function
    // function check80(arr)
    // {let count=0;
    //     const find80=array.reduce(function(acc,curr){
    //         if(curr>acc) count++;
    // },80);
    // if(count===array.length-1) return true;
    // else return false;
    // }
    // console.log(check80(array));


    function peopleWhoBelongToTheIlluminati(arr){
        // your code here
        let new_arr;
        new_arr=arr.filter(arr=>arr.member===false);
        return new_arr;
      }
      console.log(peopleWhoBelongToTheIlluminati([
          { name: "Angelina Jolie", member: true },
          { name: "Eric Jones", member: false },
          { name: "Paris Hilton", member: true },
          { name: "Kayne West", member: false },
          { name: "Bob Ziroll", member: true }
      ]));

      
    //   function occurence(arr)
    //   {
    //         arr.map((x)=>
    //         {
    //             let new_arr=
    //         });
    //   }
    //   console.log(occurence(question));
    let arr=[2,5,7,'a','b',2];
    function find(x)
    {
        let count=0;
       for(i of arr)
       {
         if(i===x) count++;
       }
       return count;
}
    console.log(arr.sort());
    const occurence=arr.map(find);
    console.log(occurence);
    let new_occ=occurence;
    new_occ.sort();
    console.log(occurence);
    let lastElement=occurence[occurence.length-1];
