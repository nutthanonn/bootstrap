let i = 2
let count = 0;
let items = document.getElementById(`img1`)
let textapple = document.getElementById(`text-apple-1`)
textapple.style.display = 'block'
items.style.display = 'block'

setInterval(()=>{
    count++
    console.log(count);
    if(i == 1){
        document.getElementById('img3').style.display = 'none'
        document.getElementById('text-apple-3').style.display = 'none'

    }else{
        document.getElementById(`img${i-1}`).style.display = 'none'
        document.getElementById(`text-apple-${i-1}`).style.display = 'none'
    }


    const items = document.getElementById(`img${i}`)
    const textapple = document.getElementById(`text-apple-${i}`)
    items.style.display = 'block'
    textapple.style.display = 'block'


    i++
    if(i > 3){
        i = 1
    }

}, 5000)