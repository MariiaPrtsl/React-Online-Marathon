const remoteUrl = 'wss://boiling-beach-26008.herokuapp.com';
const localUrl = 'ws://localhost:8082';

//Your implementation
const client = new WebSocket(localUrl);

client.onmessage = ({data}) => {
    let chat = document.getElementById('chat');
    chat.value += data + '\n';
}

function send() {
    let userName = document.getElementById('userName').value;
    let message = document.getElementById('message').value;
    client.send(userName + ": " + message);
}