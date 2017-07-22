//this app is only for websockets and will not serve webpages
var BinaryServer = require('binaryjs').BinaryServer;
//required to write files
var fs = require('fs');
//required for file format
var wav = require('wav');
console.log('server started');
//creates a websocked binary server
server = BinaryServer({
    port: 3000
});
server.on('connection', function (client) {
    console.log('new connection');
    //used to ensure the fiel is only created once
    var nameset = true;
    console.log(nameset);
    //when the stream is recieved
    client.on('stream', function (stream, meta) {
        //checks if the name is set 
        if (nameset) {
            //creates a new file, with file type & file location and file name used the meta recieved
            var fileWriter = new wav.FileWriter(meta, {
                //sets the file sets 
                channels: 1
                , sampleRate: 48000
                , bitDepth: 16
            });
            //sets the nameset to false so the fileWriter is not recreated everytime data is recieved
            nameset = false;
        }
        console.log('stream started');
        //adds the streamed content to the fileWriter using a pip
        stream.pipe(fileWriter);
        //when the streamed audio ends
        stream.on('end', function () {
            //creted the file by closing the file writer
            fileWriter.end();
            console.log('new file created');
        });
    });
});