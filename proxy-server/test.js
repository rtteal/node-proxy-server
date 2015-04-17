let argv = require('yargs').argv
let exec = require('child_process').exec
console.log('hey: ' + argv.exec + " " + argv._)
exec(argv.exec + " " + argv._).stdout.on('data', function(data) {
    console.log('stdout: ' + data)
})
