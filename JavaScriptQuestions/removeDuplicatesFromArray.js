function removeDuplicates(array) {
  let temp = 1;
  for (let i = 1; i < array.length; i++) {
    if(array[i] !== array[temp-1]){
      console.log(array[i],array[temp],i,temp)
      array[temp] = array[i];
      temp++;
    }
  }
  for(let i = 0; i < temp; i++)
       {
        console.log(array[i]);
       }
}

removeDuplicates([10,20,20,30,40,40,50,50,50]);
