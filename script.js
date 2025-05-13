function updateCountdown() {
    const targetDate = new Date('2025-05-30T00:17:10').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
        document.getElementById('countdown').innerHTML = 'Время пришло!';
    } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerHTML = `${days}д ${hours}ч ${minutes}м ${seconds}с`;
    }
}

setInterval(updateCountdown, 1000); // Обновлять каждую секунду
updateCountdown(); // Запустить сразу