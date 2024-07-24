var index = 0
var a = [10,20,30,40,50,60,70,80,90,100]

console.log(a)
console.log('++++-------------+++-------------++++')


for(index; index < a.length; index++){
    console.log(a[index])
}
console.log('++++-------------+++-------------++++')


index = 0

while(index < a.length){
    
    console.log(a[index])
    index++
}
console.log('++++-------------+++-------------++++')


index = 0
var item = 0

a.forEach(myfunc)

function myfunc(item,index){
    
    console.log(index,item)
}
console.log('++++-------------+++-------------++++')

a.forEach(element => {
    console.log(element)
});
console.log('++++-------------+++-------------++++')


index = 0

var square = x => Math.pow(n, 2)

var squares = a.map(square)
console.log(squares)