export const calculateTimeLeft = () => {
    const unix = 1707566400;
    const difference = unix * 1000 - new Date().getTime();

    if (difference <= 0) {
        return {
            days: "00",
            hours: "00",
            minutes: "00",
            seconds: "00",
        };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        .toString()
        .padStart(2, "0");
    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
        .toString()
        .padStart(2, "0");
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        .toString()
        .padStart(2, "0");
    const seconds = Math.floor((difference % (1000 * 60)) / 1000)
        .toString()
        .padStart(2, "0");

    return { days, hours, minutes, seconds };
};