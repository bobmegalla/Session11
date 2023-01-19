/* let btn = document.getElementById('btn')
let div = document.getElementById('div')
let inputs = document.getElementsByTagName('input')


btn.addEventListener('click', change)
btn.addEventListener('dblclick', clearlocalstorage)
 function clearlocalstorage () {
    localStorage.clear
   
 }

function change() {
    let w = inputs[0].value + "px"
    let h = inputs[1].value + "px"
    let bg = inputs[2].value
    console.log(inputs[0].value)

    div.style.width = w
    div.style.height = h
    div.style.backgroundColor = bg

    localStorage.setItem('width', w)
    localStorage.setItem('height', h)
    localStorage.setItem('background color', bg)

}


div.style.width = localStorage.getItem('width')
div.style.height = localStorage.getItem('height')
div.style.backgroundColor = localStorage.getItem('background color') */

/* ==================================================== */

$('button').click(function () {

    let x = $('input');

    let w = x.eq(0).val();
    let h = x.eq(1).val();
    let bg = x.eq(2).val();

    $('div').css({

        width : w + 'px',
        height :h + 'px',
        'background-color' :bg




    })




    
})