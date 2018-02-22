const Log = require('../utils/log')
const wsCallbacks = (function(){
    function dot(data, cb){
        Log.i('--revice action dot--')
        Log.i(data)
        cb(data)
    }
    return {
        onDot: dot
    }
})()

module.exports = wsCallbacks