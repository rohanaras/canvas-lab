/*
    Script for index.html

    See the README.md file for instructions
    https://github.com/drstearns/canvas-lab/blob/master/README.md
*/

document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    var canvas = document.getElementById('canvas');
    //2D rendering context
    var ctx = canvas.getContext('2d');
    var mouseDown = false;
    var lastX;
    var lastY;
    var width;

    document.addEventListener('mousedown', function(evt) {
        mouseDown = true;
        ctx.beginPath();
        ctx.strokeStyle = document.getElementById('line-color-inp').value;
        width = document.getElementById('line-width-inp').value;
        ctx.lineWidth = width;
        lastX = evt.clientX - canvas.offsetLeft;
        lastY = evt.clientY - canvas.offsetTop;
        ctx.moveTo(lastX, lastY);

    });

    document.addEventListener('mousemove', function(evt) {
        if (mouseDown) {
            var currentX = evt.clientX - canvas.offsetLeft;
            var currentY = evt.clientY - canvas.offsetTop;
            ctx.lineWidth = Math.acos((lastX - currentX) / (lastY - currentY)) * width;
            ctx.lineTo(currentX, currentY);
            ctx.stroke();
        }
    });

    document.addEventListener('mouseup', function(evt) {
        ctx.lineTo(evt.clientX - canvas.offsetLeft, evt.clientY - canvas.offsetTop);
        ctx.stroke();
        mouseDown = false;
    });

    document.addEventListener('keydown', function(evt) {
        ctx.strokeStyle = '#FFF'
    });

    document.addEventListener('keyup', function(evt) {

    })


}); //DOMContentLoaded
