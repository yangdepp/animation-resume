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


// function likeClass(a, b) {
//   this.a = a;
//   this.b = b;
//   this.getA = function(){
//     return this.a + 1;
//   }
//   this.getB = function(){
//     return this.b + 1;
//   }
// }

// likeClass.prototype.say = function () {
//   console.log('hello,world.')
// }

// var t = new likeClass(1,2);
// console.log(t.a);
// console.log(t.b)
// t.getA();
// t.getB();


// function fn() {
// }
// fn.prototype.color = 'red'

// var f = new fn();

// // 实例f的原型，指向构造函数
// console.log(f.__proto__ === fn.prototype)
// console.log(fn.prototype.__proto__ === Object.prototype)
// console.log(Object.prototype.__proto__ === null)
// console.log(Object.__proto__ === Function.prototype)

// console.log(f.__proto__.constructor === fn)
// console.log(fn.prototype.constructor === fn)
// console.log(f.constructor === fn)

// 实现继承
function Shape() {
  this.x = 1;
  this.y = 1;
}
Shape.prototype.move = function (x, y) {
  this.x += x;
  this.y += y;
  console.log('Shape moved.');
  console.log(this.x)
  console.log(this.y)
}
Shape.prototype.move2 = function () {
  console.log('move2')
}

function Rectangle() {
  Shape.call(this);
}
// 这么写，子类会整体继承父类，
// Object.create 接受一个对象作为参数，然后以它为原型，返回一个实例对象，改实例对象完全继承原型对象的属性

Rectangle.prototype = Object.create(Shape.prototype)
Rectangle.prototype.constructor = Rectangle

// 如果需要单个方法继承，可以用
// Rectangle.prototype.move2 = function(){
//   Shape.prototype.move2.call(this)
// }

var rect = new Rectangle()
rect.move(4,5)
rect.move2()

console.log(rect instanceof Shape)