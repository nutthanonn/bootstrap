const data = document.getElementById("formA1")
data.addEventListener('submit', cal)

function cal(){
    const dollar = document.getElementById("users").value;
    bath = parseFloat(dollar*33)
    alert(`Your money in THB : ${bath} Bath`)
}