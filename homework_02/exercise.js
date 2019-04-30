


Array.prototype.even = function () {

    setTimeout(function(data){
        const result = data.filter(n =>n%2==0);
        console.log(result);
    }, 100,this);

    return this;
}
Array.prototype.odd = function () {

    setTimeout(function(data){
        const result = data.filter(n =>n%2==1);
        console.log(result);
    }, 100,this);

    return this;
}
console.log("start");
[1,2,3,4,5,6,7,8].even();
[1,2,3,4,5,6,7,8].odd();
console.log("end");