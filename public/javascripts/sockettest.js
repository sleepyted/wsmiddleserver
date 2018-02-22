/**
 * Created by matengfei1 on 2018/2/6.
 */
/**
 * Client events
connect：连接成功
connecting：正在连接
disconnect：断开连接
connect_failed：连接失败
error：错误发生，并且无法被其他事件类型所处理
message：同服务器端message事件
anything：同服务器端anything事件
reconnect_failed：重连失败
reconnect：成功重连
reconnecting：正在重连
**/
var socket = io.connect('http://localhost:10000');

socket.on('connect', function () {
    console.log('connect')
})

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

function emitDotEvent() {
    console.log('-emit dot data-')
    socket.emit('dot', dotData.value, function (data) {
        if (data) {
            console.log('-dot data sent success-')
        }
    })
}
btn.addEventListener('click',function(e){
    e.preventDefault()
    emitDotEvent();
})