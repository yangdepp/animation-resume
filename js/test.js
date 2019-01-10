// 异步函数的回调
// function getCall(fn) {
//   let a = 8,
//     b = 10;
//   console.log('三秒后计算c')
//   setTimeout(() => {
//     let c = a + b;
//     console.log('计算出c')
//     fn && fn.call(this, c);
//   }, 3000)
// }

// getCall((c) => {
//   console.log(c + 1);
// })


// 同步函数也可以有回调
// function getCallStr(fn) {
//   let a = 8,
//     b = 10;
//   console.log('马上计算c')
//   let c = a + b;
//   console.log('计算出来了')
//   fn(c);
// }
// getCallStr((c) => {
//   console.log(c + 1);
// })

// 来一个复杂点的例子，回调地狱
// function getCallComplex1(fn) {
//   let a = 8,
//     b = 10;
//   console.log('三秒后计算c1')
//   setTimeout(() => {
//     let c = a + b;
//     console.log('计算出c')
//     fn(c)
//   }, 3000)
// }

// function getCallComplex2(value, fn) {
//   console.log('三秒后计算c2')
//   setTimeout(() => {
//     fn(value * 2);
//   }, 3000)
// }
// function getCallComplex3(value, fn) {
//   console.log('三秒后计算c3')
//   setTimeout(() => {
//     fn(value * 2);
//   }, 3000)
// }
// function getCallComplex4(value, fn) {
//   console.log('三秒后计算c4')
//   setTimeout(() => {
//     fn(value * 2);
//   }, 3000)
// }

// getCallComplex1((c) => {
//   getCallComplex2(c, (c) => {
//     getCallComplex3(c, (c) => {
//       getCallComplex4(c, (c) => {
//         console.log(c)
//       })
//     });
//   });
// });



// 用Promise改写
// var fn = function getCallPromise(resolve, reject) {
//   let a = 10,
//     b = 10;
//   console.log('三秒后计算c1')
//   setTimeout(() => {
//     let c = a + b;
//     console.log('计算出c')
//     if (c > 19) {
//       resolve(c)
//     } else {
//       reject(c)
//     }
//   }, 3000)
// }

// var promise = new Promise(fn)
// promise.then((c) => {
//   console.log(c + 1);
//   return c + 1
// }).catch((c) => {
//   console.log(c - 1)
//   return c - 1
// }).then((c) => {
//   console.log(c + 1);
// }).catch((c) => {
//   console.log(c - 1)
// })


// 改写上面的例子
function getCallPromise() {
  return new Promise((resolve, reject) => {
    let a = 10,
      b = 10;
    console.log('三秒后计算c1')
    setTimeout(() => {
      let c = a + b;
      if (c > 19) {
        console.log('成功计算c')
        resolve(c)
      } else {
        console.log('失败计算c')
        reject(c)
      }
    }, 3000)
  })
}

function getCallPromise2(c) {
  return new Promise((resolve, reject) => {
    console.log('三秒后计算c1')
    setTimeout(() => {
      c = c + 1;
      if (c > 25) {
        console.log('成功计算c')
        resolve(c)
      } else {
        console.log('失败计算c')
        reject(c)
      }
    }, 3000)
  })
}

getCallPromise().then((c) => {
  console.log(c + 1)
  return c + 1 // 此处对c处理，传递给下一个then
}).catch((c) => {
  console.log(c - 1)
  return c - 1
}).then((c) => {
  getCallPromise2(c).then((c) => {
    console.log(c)
  }).catch((c) =>{
    console.log(c-1)
  })
}).catch((c) => {
  console.log(c - 1)
})

// 接下来是Promise.all的例子
// let fn1 = function fn1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('3秒')
//       resolve(1)
//     }, 3000)
//   })
// }
// let fn2 = function fn2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('4秒')
//       resolve(2)
//     }, 4000)
//   })
// }
// let fn3 = function fn3() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('5秒')
//       resolve(3)
//     }, 5000)
//   })
// }
// // all的例子
// Promise.all([fn1(), fn2(), fn3()]).then((data) => {
//   let fn1 = data[0]
//   let fn2 = data[1]
//   let fn3 = data[2]
//   console.log(fn1 + fn2 + fn3);
// })
// // race的例子，
// // race只要有一个成功，就返回
// Promise.race([fn1(), fn2(), fn3()]).then((data) => {
//   let fn1 = data
//   console.log(fn1);
// })