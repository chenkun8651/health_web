---
title: Two
description: This is the first article using @nuxt/content in Nuxt 3.
date: 2024-08-20
tag: ts
path: "/docs/blog/test2"
---

# TypeScript 基础类型

> 总所周知 JavaScript 是一门动态语言，初始化定义了数据类型在使用过程中是可以随意变化，比如又一个数字变为一个数字数组，这样的特性虽然很方便但是会让程序在越来越复杂之后，无法确定一个变量代表的数据究竟变成啥样了。TypeScript 的作用是对变量的类型进行固定，防止变量的类型随意改变。

## TypeScript 与 JavaScript 相同的基础类型

1. 布尔类型（boolean）：true（是），false（否）。

   ```typescript
   let isDisabled: boolean = true; // 正常的布尔值
   let isDisabled2: boolean = !1; // 转后的布尔值
   ```

2. 数字类型（number）：所有数字数据其实都是浮点数字，类型都是 number。

   ```typescript
   let useNumber: number = 1; // 正常的数字
   let useNumber2: number = 1 + parseInt("2"); // 正常数字和转后数字进行运算
   let useNumber3: number = 0xf00d; // 十六进制的数字
   ```

3. 字符串类型（string）：文本数据。

   ```typescript
   let useString: string = "字符串类型"; // 正常字符串
   let useString2: string = "字符串类型" + useNumber; // 字符和数字拼接后的字符串
   let useString3: string = `字符串类型${useNumber} `; // 模板字符串
   ```

4. null 类型：和 void 相似，默认情况下 null 是所有类型的子类型，所以可以将 null 给到任意类型。

   ```typescript
   let nul: null = null;
   ```

5. undefined 类型：和 void 相似，默认情况下 undefined 是所有类型的子类型，所以可以将 undefined 给到任意类型。

   ```typescript
   let und: undefined = undefined;
   ```

---

## TS 其他重要类型

1. 任意值类型（any）：any 类型是任意类型，它可以代表任何类型的值。在编程的过程遇到不清楚类型或者无法确定类型的值时，将变量赋予 any 类型就不会做值的类型检查。但是 any 要谨慎使用，滥用 any 会导致程序变成 anyScript，不光无法检测类型，程序员编写代码时也不能清晰的识别具体类型。

   ```typescript
   let anyValue: any = "任意类型值";
   anyValue = 1;
   ```

   当我清楚一部分数据类型，但不是完全知道的时候也可以使用 any。比如我知道是一个数组，但是我不知道数组里面具体有什么类型的数据。

   ```typescript
   let list4: any[] = ["1", 2, 3, "测试"];
   ```

2. 空值类型（void ）：它表示没有任何类型，当一个函数没有返回值的时候，通常其返回值类型是：void。

   ```typescript
   function warnInfo(): void {
     console.log("只是打印一句提示");
   }
   ```

   声明一个 void 类型的变量没有什么用，因为只能为它赋值为 undefined，其他类型都会报错，特别测试 null 也会报错。

   ```typescript
   let unusable: void = undefined;
   ```

3. 永不存在值类型（never）：never 类型总是出现在抛出异常，抛出错误或者根本不会有返回值的函数表达式，返回 never 类型的函数必须存在无法到达的终点。

   ```typescript
   function error(message: string): never {
     throw new Error(message);
   }
   function fail() {
     return error("错误");
   }
   function infiniteLoop(): never {
     while (true) {
       console.log("无限循环");
     }
   }
   ```

4. 数组类型（array）：存放一组数组数据，TS 中的数组中的内部数据类型不是固定的，Array 不能直接去表明一个数组，所以在 TS 定义数组类型有两种写法。

   ```typescript
   // 第一种写法，类型（元素）接[]，表示数组内容都该类型的数据
   let list: number[] = [1, 2, 3];
   interface Person {
     name: string;
   }
   let list2: Person[] = [{ name: "ck" }, { name: "ck2" }, { name: "ck3" }];
   // 第二种写法，数组的泛型
   let list3: Array<T> = [T, T, T];
   let list4: Array<string> = ["1", "2", "3"];
   ```

5. 元组类型（Tuple）：数组中的一种特殊类型，允许表示一个已知元素数量和类型的数组，各元素类型不用相同。

   ```typescript
   let list3: [string, number, string] = ["1", 2, "3"];
   ```

---

## 特殊情况的对象类型

对比 JS 和 TS 可以发现在 JS 常用数据类型中，有一种类型在上述讲述中没有出现，它就是 JS 中的对象 Object。其实关于这一点知识细节我也没有琢磨明白，只能大概讲讲 TS 中对象类型的 object，Object，{}的三种表达方式。

TypeScript 2.2 引入了被称为 object 类型的新类型，它用于表示非原始类型。对于 object 类型，声明这种类型，其参数指定为 object 或者 null 来声明，其他原始类型作为参数传入就会报错，所以 object 类型只能表明其是一个对象或者空，并且内部不包含原型链的属性和方法。

```typescript
// 全部的原始类型
type Primitive = string | boolean | number | bigint | symbol | null | undefined;
// 全部的非原始类型
type NonPrimitive = object;
// 定义对象的构造函数
interface ObjectConstructor {
  create(o: object | null): any;
  setPrototypeOf(o: any, prototype: object | null): any;
  // ...
}
// 原始类型传入报错
const prototype = {};
Object.create(prototype); // OK
Object.create(null); // OK
Object.create(undefined); // Error
Object.create(1337); // Error
Object.create(true); // Error
Object.create("oops"); // Error
```

Object 类型，该类型是所有 Object 类实例的类型，它由两个接口进行定义，Object 接口定义了 Object.prototype 原型对象上的属性，ObjectConstructor 接口定义了 Object 类的属性。所有值都可以是 Object 类型，其中包含了原型链的属性和方法。

```typescript
// Object接口
interface Object {
  constructor: Function;
  toString(): string;
  toLocaleString(): string;
  valueOf(): Object;
  hasOwnProperty(v: PropertyKey): boolean;
  isPrototypeOf(v: Object): boolean;
  propertyIsEnumerable(v: PropertyKey): boolean;
}
// ObjectConstructor接口
interface ObjectConstructor {
  /** Invocation via `new` */
  new (value?: any): Object;
  /** Invocation via function calls */
  (value?: any): any;
  readonly prototype: Object;
  getPrototypeOf(o: any): any;
  // ···
}
```

{}类型，它描述了一个没有成员的对象。这个空对象中不包含任何属性和方法。

## 单元类型（Unit types）

单元类型就是只包含一个原始值的基础类型的子类型，例如字符串"left"的类型也可以是"left"，"left"类型代表只有字符串 left 满足这种类型。由于 JS 没有内置的枚举，因此通常会使用一组已知的字符串来代替。

```typescript
function padding(s: string, n: number, direction: "left" | "right"): string;
padding("hi", 10, "left");
```

使用单元类型时，编译器将扩展转换为超类型，单元类型将扩展成为原始类型的一种。例如将单元为"left"扩展出来。但是在实际使用过程可能会发生一种错误，值是"left"的字符串类型并不能等同于"left"类型，只有明确值是"left"的"left"类型才能正确使用。

```typescript
declare function padding(s: string, n: number, direction: "left" | "right"): string;
let left = "left";
padding("hi", 10, left); // error: 'string' is not assignable to '"left" | "right"'
let right: "right" = "right";
padding("hi", 10, right);
```
