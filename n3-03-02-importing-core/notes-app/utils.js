console.log("utils.js")

const name = "Eddy"

function edd(a, b){
    for(i = a; i < b; i++){
        i = i * b;
    }
    return i;
}

module.exports = name
module.exports = edd

