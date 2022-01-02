var block = document.querySelector('.block');
var isFocused = false;
var blockCoords = null;

block.addEventListener('mousedown', e => {
    isFocused = true
    var {top , left} = e.target.getBoundingClientRect();
    blockCoords = {
        x: e.clientX - left,
        y: e.clientY - top
    }
})

block.addEventListener('mouseup', e => {
 isFocused = false
})

block.addEventListener('mousemove', e => {
    if(isFocused){
        var{ x, y} = blockCoords;
        block.style.top = `${e.clientY - y}px`;
        block.style.left = `${e.clientX - x}px`;
    }
})