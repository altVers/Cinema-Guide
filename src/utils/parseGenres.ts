export const parseGenres = (genres: string[]): string => {
    if(genres.length === 0) return ''
    const parsedGenres:string[] = []
    genres.forEach(genre => {
        parsedGenres.push(`${genre[0].toUpperCase()}${genre.slice(1, genre.length)}`)
    });
    return parsedGenres.join(", ")
} 