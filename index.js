module.exports = function(obj,keys){
    for(var key in obj){
        if(keys.indexOf(key) === -1){
            throw new Error('Invalid key "' +key+ '". Available keys: ' +
                keys.map(function(obj){return '"' + obj + '"';}).join(', ')
            );
        }
    }
};