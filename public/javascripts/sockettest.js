/**
 * Created by matengfei1 on 2018/2/6.
 */
var socket = io.connect('http://localhost:10000');
socket.on('news', function (data) {
    console.log(data);
    // socket.emit('dot', { my: 'data' },function(data){
    //     if (data){
    //         console.log('-dot data sent success-')
    //     }
    // });
});

var btn = document.getElementById('btn')
var dotData = document.getElementById('dotData')

btn.addEventListener('click',function(e){
    e.preventDefault()
    console.log('-emit dot data-')
    socket.emit('dot', dotData.value , function(data){
        if (data){
            console.log('-dot data sent success-')
        }
    })
})