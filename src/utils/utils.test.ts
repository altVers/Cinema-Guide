import { parseGenres } from "./parseGenres"
import { parseNameSurename } from "./parseNameSurename"
import { parseRating } from "./parseRating"
import { parseRuntime } from "./parseRuntime"

describe("Работа утилит", () => {
    it('Проверяем парсинг имени в иконках #1', () => {
        expect(parseNameSurename('alex', 'mercer')).toBe('AM')
    })
    it('Проверяем парсинг имени в иконках #2', () => {
        expect(parseNameSurename('', 'mercer')).toBe('M')
    })
    it('Проверяем парсинг имени в иконках #3', () => {
        expect(parseNameSurename('alex', '')).toBe('A')
    })
    it('Проверяем парсинг имени в иконках #4', () => {
        expect(parseNameSurename('', '')).toBe('?')
    })

    it('Проверяем парсинг рейтинга #1', () => {
        expect(parseRating(8.1824)).toBe("8.2")
    })
    it('Проверяем парсинг рейтинга #2', () => {
        expect(parseRating(5)).toBe("5.0")
    })
    it('Проверяем парсинг рейтинга #3', () => {
        expect(parseRating()).toBe("0.0")
    })

    it('Проверяем парсинг длительности фильма #1', () => {
        expect(parseRuntime(183)).toBe('3 ч. 3 мин.')
    })
    it('Проверяем парсинг длительности фильма #2', () => {
        expect(parseRuntime(180)).toBe('3 ч.')
    })
    it('Проверяем парсинг длительности фильма #3', () => {
        expect(parseRuntime()).toBe('')
    })

    it('Проверяем парсинг жанров #1', () => {
        expect(parseGenres(['drama', 'horror'])).toBe('Drama, Horror')
    })
    it('Проверяем парсинг жанров #2', () => {
        expect(parseGenres([])).toBe('')
    })
})