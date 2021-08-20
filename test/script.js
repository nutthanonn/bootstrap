
const a = [
    {name:"nutthanon", amount:10000},
    {name:"nutthanon", amount:3000},
]

const littleAmount = a.filter((a)=>{
    return a.amount < 5000
})
console.log(littleAmount);