export const parseRuntime = (time: number):string => {
    const buffer = (time/60).toString().split('.')
    const minutes = (time % 60)
    if(minutes === 0) {
        return `${buffer[0]} ч.`
    } else {
        return `${buffer[0]} ч ${minutes} мин`
    }
}