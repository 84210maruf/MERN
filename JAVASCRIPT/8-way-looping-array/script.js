var index = 0
var a = [10,20,30,40,50,60,70,80,90,100]

console.log(a)


console.log('++++-------------+ for loop +-------------++++')
for(index; index < a.length; index++){
    console.log(a[index])
}


console.log('++++-------------+ while loop +-------------++++')
index = 0

while(index < a.length){
    
    console.log(a[index])
    index++
}


console.log('++++-------------+ forEach loop +-------------++++')
index = 0
var item = 0

a.forEach(myfunc)

function myfunc(item,index){
    
    console.log(index,item)
}

console.log('++++-------------+forEach+-------------++++')
a.forEach(element => {
    console.log(element)
});


console.log('++++-------------+ map func +-------------++++')
index = 0

var square = x => Math.pow(x, 2)
var squares = a.map(square)

console.log(squares)
squares.forEach(element => {console.log(element)})


console.log('++++-------------+ every func +-------------++++')

var under_five = x => x < 5

if(a.every(under_five)){
    console.log('some number in array is under five')
}else{
    console.log('some number in array is over five')
}
var every_return = a.every(under_five)
console.log(typeof(every_return))


console.log('++++-------------+ every func +-------------++++')


function newFunc(v,i,arr){
    return v < 18
}

var over18 = a.filter(newFunc)
console.log(over18)