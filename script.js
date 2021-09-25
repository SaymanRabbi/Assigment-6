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
        const sum2 = ((day-10)*80) + 1000;
        document.write(`Your Bill Was ${sum2} Tk💸💸` + "<br>" + "<br>")
    }
    
    if (21<=day){
        const sum3 = ((day-20)*50) + 1800;
        document.write(`Your Bill Was ${sum3} Tk💸💸` + "<br>" + "<br>")
    }
}

billCheck(15.2);

// --end--
function longestWord(array) {
    let longest = "";
   array.map(function (str) {
      if (str.length > longest.length){
    longest = str;
}
 })
return longest;
 }
 const bigName=(longestWord(["KeepRolling","Rabbi","Am"]));
 document.write(`Its A Big Name From This Array "${bigName}"😊😊;` + "<br>" + "<br>")