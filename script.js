function updateTime() {
    const now = new Date();
    const time = now.toUTCString().split(' ')[4];
    document.getElementById('time').textContent = time;

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = days[now.getUTCDay()];
    document.getElementById('day').textContent = day;
}

// Update time and day every second
setInterval(updateTime, 1000);
updateTime();
