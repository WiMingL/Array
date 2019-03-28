/*
数组
构造方法：
1、var arr = [] 推荐，来源于Array.prototype
2、var arr = new Array()
    var arr = new Array(10) 10代表长度,不可填写小数
*/
var arr = [1,2,3];


//数组方法
//第一大类：改变原数组内容
//添加数组元素，在末位添加
arr.push(10);
console.log(arr);
//输出 [1,2,3,10]

//删除数组最后一个元素
arr.pop();
console.log(arr);
//[1,2,3]

//在数组最前面添加元素
arr.unshift(5);
console.log(arr);
//[5,1,2,3]

//删除数组最前面一位
arr.shift();
console.log(arr);
//[1,2,3]

//倒置
arr.reverse();
console.log(arr);
//[3,2,1]

//截取元素,并返回截取的数组，第一个参数为截取的位置，第二个参数为截取的数量
var newArr = arr.splice(1,2);
console.log(newArr);
console.log(arr);
//[2,1]
//[3]

//改变数组顺序
arr.push(5,6,8,4,6);
/*
当function返回的数值为正数的时候为升序，为负数的时候为降序
a,b代表数组的元素
return a-b为升序
return b-a为降序
return 0 不动
*/
arr.sort(function(a,b){
    return 0;
});
console.log(arr);
arr.sort(function(a,b){
    return a -b;
});
console.log(arr);
arr.sort(function(a,b){
    return b - a;
});
console.log(arr);


//第二大类：不改变原数组内容
//合并数组
var a1 = [1,5,3];
var a2 = [5,8,9,2];
var a3 = a1.concat(a2);
console.log(a1);
//[1,5,3]
console.log(a2);
//[5,8,9,2]
console.log(a3);
//[1,5,3,5,8,9,2]

//将数组内容转化为字符串
var a4 = a3.toString();
console.log(a4);
//1,5,3,5,8,9,2

/*
取数组内容
arr.slice(a,b)
a：代表截取开始位，包括该位
b：代表截取结束位，不包括该位，若不填则到最后一位结束
*/
var a5 = a3.slice(2,5);
console.log(a5);
//[3,5,8]

//以特定符号连接数组为字符串
var a6 = a3.join('!');
console.log(a6);
//"1!5!3!5!8!9!2"

/*
有关类数组的讲解
类数组实际上是对象，
并且对象中必须有length属性，
可以通过原型的方式添加数组方法，如push方法
*/
var objArr = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    'length': 3,
    'push' : Array.prototype.push
}
console.log(objArr);
objArr.push(5);
console.log(objArr);
//使用Array.prototype.slice使其更像数组
objArr = Array.prototype.slice.call(objArr,0);
console.log(objArr);
objArr.push(2);
console.log(objArr);