const add =function(a,b){
    // console.log(a+b);
    return a+b;
}

const sub = function(a,b){
    // console.log(a-b);
    return a-b;

}

function mult(a,b){
    // console.log(a*b);
    return a*b;

}


// Method 1 of exporting
// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.mult = mult;

// Method 2 of exporting
module.exports={add,sub,mult};