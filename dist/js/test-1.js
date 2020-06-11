/**
 * 声明变量
 */
var a; 
a = 100; //"=" 赋值符号
//简化写法：
var a = 100;

document.write(a);

//单一var模式
var a = 10,
    b = 20,
    c = 30,
    d = 40,
    e; 

document.write(a,b,c,d,e);

var a = 10;
    b = 20;

c = a + b ; //运算大于赋值的优先级

document.write(c)

/**
 * 数据类型
 */
// 原始值： 存放位置：stack 栈
// nubmer boolean String underfined null
var a = 10;//变量名a和10存在“栈”内
var b = a;//copy一个a赋值于b，不影响原来的a值（虽然值相同，但是是两个不同的房间）
a = 20;//新赋值不影响原来b的值
document.write(a); // 20
document.write(b); // 10


// 引用值：存放位置：heap 堆
// Array Object function ... date RegExp

var arr = [1,2];//变量名arr和“堆”的地址存在“栈”内，“堆”内存放1,2
var arr1 = arr;//变量名arr1存在“栈”内,arr1栈内地址指向arr的“堆”地址
arr.push(3)//向arr内加入一个3，所以arr1所指向的地址内的值也会发生变化
document.write(arr1); // 1,2,3

var arr = [1,2];
var arr1 = arr;
arr = [1,3];//将arr“栈”的地址指向“新的堆”，“堆”内存放1,3，（虽然值不同，但是是同一个房间）
document.write(arr1); // 1,2


/**
 * 操作符
 */
// "+"
var a1 = 1 + 2;
document.write(a1);// 3

var a2 = "b" + 2;
document.write(a2);// b2

var a3 = 1 + 1 + "b" + 2;
document.write(a3);// 2b2

// "%" 取余
var a1 = 3 % 2;
document.write(a1);// 1

// 优先级：“=”最弱，“()”最高
// 赋值的顺序自右向左；计算的顺序自左向右！先计算后赋值！

// “++”、“--”、“+=”、“-=”、“/=”、“*=”、“%=”
var a = 10;
var b = 20;
a = b + 1;
a ++;
console.log(a);// 22

var a = 10;
var b = ++a - 1 + a++;
console.log(a++);// 10
console.log(++a);// 11
console.log(b + " " + a);// 21 12

var a = 10;
a += 10;//--> a = a + 10; //20
a += 10 + 1;//--> a =  a + 10 + 1 //21

var  a = (10 * 3 - 4 / 2 + 1) % 2,
    b = 3;
    b %= a + 3;
    
console.log(a++);// 1
console.log(--b);// 2

/**
 * 比较符
 */
// 比较的结果一定是布尔值
// 字符串比较的是ASC码！
// NaN不等于任何数，包括自己！

// “&&”、“||”、“!”


/**
 * 条件语句
 */

/* if (condition) {
    
} */
 
var a = 1 > 0;
var b = 80 > 9;

if(a && b){
    console.log(a);
    console.log(b);
}

// if else 和 && 转换：
if(1 > 2){
    document.write('a');
}

1 > 2 && document.write('a')


/* for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
} */

//练习一：计算2 的n次幂，n可输入，n为自然数：
// var n = parseInt(window.prompt('输入数字'));
var mul1 = 1;
for(var i = 0; i < n; i ++){
    // mul *= 2;
    mul1 = mul * 2
    console.log(mul1);
}
//练习二：计算n的阶乘，n可输入：
var mul2 = 1;
for(var i = 1; i <= n;i ++){
    mul2 *= i; 
    console.log(mul2);
}
//练习三：著名的斐波那契额数列（1 1 2 3 5 8）输出第n项：


//练习四：编写一程序，输入一个三位书的正整数，输出时反向输出。如：输出456，输出654：

//练习五：输入a、b、c三个数字，打印出最大的：
/* var a = parseInt(window.prompt('输入数字'));
var b = parseInt(window.prompt('输入数字'));
var c = parseInt(window.prompt('输入数字')); */

if(a >  b){
    if(a > c){
        console.log(a);
    }else{
        console.log(c);
    }
}else{
    if(b > c){
        console.log(b);
    }else{
        console.log(c);
    }
}

//练习六：打印出100以内的质数：





