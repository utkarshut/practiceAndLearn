const cart = ["book", "pen", "copy"];

// Normal callback hell
// createOrder(cart,function (orderId){
//     proceedToPayment(orderId, function(paymentId){
//        paymentSummary(paymentId);
//     })
// })

function getCart() {
  return new Promise(
    (resolve, reject) => {
      try {
        dd;
        resolve(cart);
      } catch {
        const err = new Error("cart");
        console.log(err);
        reject(cart);
      }
    },
    (error) => {
      console.log(error);
    }
  );
}
getCart().then((data) => {
  console.log(data);
}, error=>{
    console.log("ERROR: ",error);
});
