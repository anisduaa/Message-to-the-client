const socket = io.connect('http://localhost:3000');

socket.on('answer', (data) => {
  document.getElementById('answer').innerText = data.message;
});

function askQuestion() {
  document.getElementById('answer').innerText = 'Thinking...';
  socket.emit('ask-question');
}
