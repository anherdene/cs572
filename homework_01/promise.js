

String.prototype.filterwords = function ( filterwords) {
    let words = this.split(' ');
    let promise1 = Promise.resolve(words);
   return promise1.then(function(source) {
       let newsource =  source.map(w => filterwords.includes(w) ? "***" : w);
       return newsource.join(" ");
    });
}

console.log("This house is nice".filterwords(["house","nice"]));