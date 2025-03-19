document.getElementById("send-btn").addEventListener("click", sendMessage);

function sendMessage() {
    const messageInput = document.getElementById("message-input");
    const chatBox = document.getElementById("chat-box");
    const messageText = messageInput.value.trim();

    if (messageText !== "") {
        const newMessage = document.createElement("div");
        newMessage.classList.add("message", "sent");
        newMessage.innerText = messageText;

        chatBox.appendChild(newMessage);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
        messageInput.value = "";
    }
}
