document.getElementById('blackButton').onclick = blackTheme;
document.getElementById('greenButton').onclick = greenTheme;
document.getElementById('blueButton').onclick = blueTheme;
document.getElementById('whiteButton').onclick = whiteTheme;


function blackTheme(){
    document.getElementsByTagName('body')[0].style.backgroundColor = 'black'
    document.getElementsByTagName('body')[0].style.color = 'white'
}

function greenTheme(){
    document.getElementsByTagName('body')[0].style.backgroundColor = 'green'
    document.getElementsByTagName('body')[0].style.color = 'pink'
}

function blueTheme(){
    document.getElementsByTagName('body')[0].style.backgroundColor = 'blue'
    document.getElementsByTagName('body')[0].style.color = 'gold'
}

function whiteTheme(){
    document.getElementsByTagName('body')[0].style.backgroundColor = 'white'
    document.getElementsByTagName('body')[0].style.color = 'black'
}
