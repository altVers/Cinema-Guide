export const parseRuntime = (time: number = 0):string => {
    if (time === 0) return ''
    const buffer = (time/60).toString().split('.')
    const minutes = (time % 60)
    if(minutes === 0) {
        return `${buffer[0]} ч.`
    } else {
        return `${buffer[0]} ч. ${minutes} мин.`
    }
}