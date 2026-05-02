
const str = "absaisicaemelaopajcnapxs";

function firstNonRepeatingCharacter(str){
    let map = {};
    for(let i =0; i < str.length; i++){
        map[str[i]]=  map[str[i]] ? map[str[i]] + 1 : 1;
    }
    for(let i =0; i < str.length; i++){
        if(map[str[i]]==1){
            return str[i];
        }
    }
    console.log(map);
}

console.log(firstNonRepeatingCharacter(str))