String.prototype.filterwords = function ( filterwords) {
    let words = this.split(' ')
    let filter = words.map( w => filterwords.includes(w)?"***":w);
    return filter.join(" ");
}