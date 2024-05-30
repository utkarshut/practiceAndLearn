/**
 *
 */
function maximumAppearingElement(left, right) {
  let freq = new Array(101).fill(0);
  for (let i = 0; i < left.length; i++) {
    freq[left[i]]++;
    freq[right[i]+1]--;
  }
  console.log("Frequency Array", freq);
  let res = 0;
  for(let i=1; i < freq.length; i++){
     freq[i] = freq[i] + freq[i-1];
     if(freq[i]> freq[res]){
        res = i;
     }
  }
  console.log(res);

}
maximumAppearingElement([1, 2, 4], [4, 5, 7]);
