// problem solve 1

const gfNaiAmr = function (mobile,laptop,watch){
    document.write(`Mobile Prices =${mobile} Tk🤑`+ "<br>")
    document.write(`Laptop Prices =${laptop} Tk🤑`+ "<br>")
    document.write(`Watch Prices =${watch} Tk🤑`+ "<br>")
    
    const total = mobile+laptop+watch;
    return total;
}
const total4=gfNaiAmr(8000,2000,2000);
document.write(`Your Total Bill Was = ${total4} Tk💸💸` + "<br>" + "<br>");
// -----end---

// problem solve 2
const billCheck = function (day) {
    if (10>=day){
        const sum1= day*100;
        document.write(`Your Bil was ${sum1} Tk💸💸` + "<br>" + "<br>");
    }
    
    if (11<=day && 20>=day){
        const sum2 = ((day-10)*80) +1000;
        document.write(`Your Bill Was ${sum2} Tk💸💸` + "<br>" + "<br>")
    }
    
    if (21<=day){
        const sum3 = ((day-20)*50) + 1800;
        document.write(`Your Bill Was ${sum3} Tk💸💸` + "<br>" + "<br>")
    }
}

billCheck(15.2);

// --end--
const bigName=(longestWord(["KeepRolling","Rabbi","AmzonShoppingisAwsome"]));
function longestWord(array) {
    let longest = "";
   array.map(function (str) {
      if (str.length > longest.length){
    longest = str;
}
 })
return longest;
 }

 document.write(`Its A Big Name From This Array "${bigName}"😊😊 And Length Is ${bigName.length};` + "<br>" + "<br>")


//  -----object
//  const sayman= {
//     name : "KeepRolling",
//     age : 2021-2001,
//     job : "Student",
//     location : "Rangpur",
//   }
//   const data = prompt("What You Know About Sayman? Choose Between name,age,job,location");
//   if(sayman[data]){
//     document.write(sayman[data]);
//   } else{
//     document.write("Wrong Keyword!! Choose Between name,age,job,location" )
//   }
    // for (let rep=1; rep<=5;rep++){
    //     console.log(`Wlcome Sayman Rabbi For Your New Joureny ${rep}`);
    // }

    
    const find=(findTheLongestWord(`KeepRolling,Rabbi,AmzonShoppingisAwsome`));
     function findTheLongestWord(str){
         var words =  str.split(",");
         var longest = "";
        
          for ( var word of words){
              if (word.length > longest.length)
              longest=word;
          }
          return longest;
     }
    
    
     document.write(`Its A Big Name From This Array "${find}}"😊😊 And Length Is ${find.length};` + "<br>" + "<br>")




    //        function longestWord(array) {
    //     let longest = "";
//    array.map(function (str) {
//       if (str.length > longest.length){
//     longest = str;
// }
//  })
// return longest;
//  }