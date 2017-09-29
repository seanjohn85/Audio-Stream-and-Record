# Audio-Stream-and-Record
This is a node server websocket app designed to run parallel with an addition server app, to stream add store audio streams on the server. 
This project allows a client to record using there mike and have the file streamed and stored on a server.

## Set Up
Install Node.js on the machine.
Download the repo and navigate to the folder containing the project using the terminal.
Run the file server.js.

Now the Node server is running listening for connections.

This app is designed to run in parrell with an additional server add and becuase of this the HTML file can be hosted anywhere so Express is not used like a traditional node client server app.

### Running the webpage

Open the public folder and open the html file. This will now connect to the node server and the file can be hosted anywhere. Cliect the start button to start streaming audio data to the node server. When the stop button is pressed the node app will store the audio file.

#### This solution was developed as a part solution to an excisting web application




