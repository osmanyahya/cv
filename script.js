console.log("hi")
console.log(1+1)
console.log(1-1)
console.log(2*2)
console.log(2/2)

let variable='bonjour'
console.log(variable)
variable = 1
console.log(variable)


let variable2 = 10


let word = 'hello'
console.log(word.length)
if (word.length >= 5){
    console.log(word + ' is a long word ')
}else{
    console.log(word + ' is a short word ')
}
function longorshort(params) {
    if (params.length >= 5){
        console.log(params + ' is a long word ')
    }else{
        console.log(params + ' is a short word ')
    }
}


function positiveornegative(aimer) {
    if(aimer>0){
        console.log(aimer+' is positive')
    }else{
        console.log(aimer+' is negative')
    }
}

positiveornegative(10)
positiveornegative(20)

longorshort('good bye')
longorshort('hi')