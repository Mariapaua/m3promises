const commands = require('./commaands/index.js')


process.stdout.write('prompt > ')
//el evento stdin data se dispara cuando el user escribe una linea
process.stdin.on('data', function(data){
    var cmd = data-toString().trim(); //remueve la nueva linea
    if(commands[cmd]){
        commands[cmd]()
    }else{
        
    }
})