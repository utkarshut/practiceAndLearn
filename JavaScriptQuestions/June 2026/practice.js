
const data = await fetch('https://www.naukri.com/myapply/historypage');
const json = await data.text();
console.log(json);

const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve(10);}, 2000);
})
const promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve(103);}, 2000);
})
Promise.all([promise1,promise2]).then((val)=>{
      console.log(val)
})

