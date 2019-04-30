

const replace = function(source,filterwords) {
    let newsource =  source.map(w => filterwords.includes(w) ? "***" : w);
    return newsource;
}

String.prototype.filterwords = async function ( filterwords) {
    let words = this.split(' ');

    let result =  await replace(words,filterwords);
    return result.join(" ");
}



console.log("This house is nice".filterwords(["house","nice"]));