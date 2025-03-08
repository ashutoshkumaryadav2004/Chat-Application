const socket = io();

const chatWindow = document.getElementById('chat-window');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');

// Send message
sendBtn.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message) {
        socket.emit('chat message', message);
        messageInput.value = '';
    }
});

// Receive message
socket.on('chat message', (msg) => {
    const messageElement = document.createElement('div');
    messageElement.textContent = msg;
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight;
});
