export const formatSecondsToMinute = (second: number) => {
    const minutes = Math.floor(second / 60);
    const remainingSeconds = Math.floor(second % 60)

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0')
    
    return `${formattedMinutes}:${formattedSeconds}`
}