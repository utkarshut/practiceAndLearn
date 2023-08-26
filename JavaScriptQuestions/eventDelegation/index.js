// ======= EVENT DELEGATION ======
// Instead of writting event click for every item , using it's parent
// by bubbling behaviour so it can be handled by common function


document.querySelector("#category").addEventListener("click",(e)=>{
  if(e.target.id){
    window.location.href = e.target.id
  }
})
/**
 * This event handler check attribute data-uppercase 
 * that will be in dataset of target . If it is available
 * update value to upper case
 */
document.querySelector('#input').addEventListener("keyup",(e)=>{
    if(e.target.dataset.uppercase != undefined){
        e.target.value = e.target.value.toUpperCase();
    }
})

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  var a = "";
 for(let i =0; i<word1.length;i++){
     a = a+ word1[i];
     a = a+ (word2[i]?word2[i]:'');
     if(i === word1.length -1 && word2[i+1]){
         a += word2.substr(i+1);
     }
 }
 return a;
};
mergeAlternately("as","ASD")