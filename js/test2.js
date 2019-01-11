// function fn(){
//   console.log(this)
//   console.log(typeof this)
//   console.dir(this)
//   console.log(this.__proto__ === fn.prototype)
// }
// fn.prototype = {
//   run: function(c){console.log(`${c}-1`)}
// }
// new fn()

// new fn() 会执行 fn，并打印出 this，请问这个 this 有哪些属性？这个 this 的原型有哪些属性？

// 执行new操作的时候，会在fn内部创建一个临时的空对象，这个空对象最后会被赋值给this，
// 按照题目中的写法，貌似没有自有属性赋值给this，所以如果问这个this有哪些属性，
// 我只能说this.__proto__ === fn.prototype


//JSON 和 JavaScript 是什么关系？
//JSON 和 JavaScript 的区别有哪些？


function fn(){
  console.log(this)
}
var Fn = fn.bind(Object)
var instance = new Fn()
console.log(instance)

