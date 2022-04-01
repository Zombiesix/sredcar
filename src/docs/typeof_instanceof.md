## typeof 与 instanceof 的区别

### 问题？

使用过 `typeof` 与 `instanceof` 吗？区别是什么

还有什么可以进行类型检测吗？或是工作中一般使用什么进行检测？

如果可以使用 `Object.prototype.toString` 方法进行检测，那可以使用 `Fuction.prototype.toString` 方法吗？为什么？

### 解答

一、typeof

`typeof` 操作符返回一个字符串，表示操作数的类型

使用方法如下：

```javascript
typeof operand
typeof(operand)
```

举个例子：

```javascript
typeof 1 // 'number'
typeof '1' // 'string'
typeof undefined // 'undefined'
typeof true // 'boolean'
typeof Symbol() // 'symbol'
typeof null // 'object'
typeof [] // 'object'
typeof {} // 'object'
typeof console // 'object'
typeof console.log // 'function'
```

二、instanceof

`instanceof` 运算符用于检测当前实例的构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上

使用方法如下：

```javascript
object instanceof constructor
```

举个例子：

```javascript
// 定义构建函数
let Car = function() {}
let benz = new Car()
benz instanceof Car // true
let car = new String('xxx')
car instanceof String // true
let str = 'xxx'
str instanceof String // false
```

三、typeof 与 instanceof 之间的区别

`typeof` 只能检测出基础类型、Fucntion，其它类型都是Object，null也是

`instanceof` 因为检测原理是根据原型链来的，所以只能检测对象类型，不能检测基础类型变量

四、Object.prototype.toString 的使用

五、不能使用 Function，在 JS 底层中继承的 toString 方法被重写了

### 相关更详细讲解

深入理解原型链
