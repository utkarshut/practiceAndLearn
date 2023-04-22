// ======= EVENT DELEGATION ======
// Instead of writting event click for every item , using it's parent
// by bubbling behaviour so it can be handled by common function


ocument.querySelector("#category").addEventListener("click",(e)=>{
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