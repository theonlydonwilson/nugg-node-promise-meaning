#promise to find best bud on website or app


var promise1 = Promise.resolve(1);
var promise2 = promise1.then(function() {
  return new Promise(resolveTimeout);
});
promise2.then(function(nugg) {
  console.log('Strain Found On Nugg Website', nugg);
}, function(nuggmd) {
  console.log('Strain Found On Nugg App', nuggmd);
});

var promise3 = promise1.then(function() {
  return new Promise(rejectTimeout);
});
promise3.then(function(nugg) {
  console.log('Strain Found On Nugg Website', nugg);
}, function(nuggmd) {
  console.log('Strain Found On Nugg App', nuggmd);
});

function resolveTimeout(resolve, reject) {
  setTimeout(function () {
    resolve(200);
  }, 1000);
}
function rejectTimeout(resolve, reject) {
  setTimeout(function () {
    reject(404);
  }, 1000);
}
