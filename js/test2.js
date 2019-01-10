function fn(){
  console.log(this)
  console.log(this.__proto__ === fn.prototype)
}
new fn()