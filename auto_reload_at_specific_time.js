function reloadAt(hour, minute) {
    const now = new Date();
    const target = new Date();
    target.setHours(hour, minute, 0, 0);
    if (target <= now) {
        target.setDate(target.getDate() + 1);
    }
    const delay = target - now;
    console.log(delay / 1000) // sec
    setTimeout(() => location.reload(), delay);
}

reloadAt(15, 00);
