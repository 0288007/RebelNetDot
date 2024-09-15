document.getElementById('send').addEventListener('click', function() {
    const nickname = document.getElementById('nickname').value;
    const message = document.getElementById('message').value;

    if (nickname && message) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'chat.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function() {
            if (xhr.status === 200) {
                document.getElementById('message').value = '';
                loadChat();
            }
        };
        xhr.send('nickname=' + encodeURIComponent(nickname) + '&message=' + encodeURIComponent(message));
    }
});

function loadChat() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'chat.php', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById('chat-log').innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

setInterval(loadChat, 1000);