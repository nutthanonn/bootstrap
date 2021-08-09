var i = 1

setInterval(()=>{
    let imgShow = document.getElementById(`img${i}`)

    if(i == 1){
        let lastpic = document.getElementById(`img4`)
        lastpic.classList.remove('show')
    }else{
        let lastpic = document.getElementById(`img${i-1}`)
        lastpic.classList.remove('show')
    }

    i++
    imgShow.classList.add('show')
    if(i > 4){
        i = 1
    }
}, 3500)