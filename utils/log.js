const Log = (function log(){
    function info(str){
        console.log(str)
    }
    return {
        i: info
    }
})()
module.exports = Log