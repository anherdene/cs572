
function isWeekend( ) {
    const  todayDate = new Date();
    const  day = todayDate.getDate();
    let result = "weekday";
    (day===0 || day===6) &&( result= "weekend") ;

    return result;

}

console.log(isWeekend());