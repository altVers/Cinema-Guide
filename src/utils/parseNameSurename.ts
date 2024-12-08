export const parseNameSurename = (name: string, surname: string) => {
    if(name === '' && surname !== "") return `${surname[0].toLocaleUpperCase()}`
    if(name !== '' && surname === "") return `${name[0].toLocaleUpperCase()}`
    if(name === '' && surname === "") return `?`
    
    return `${name[0].toLocaleUpperCase()}${surname[0].toLocaleUpperCase()}`;
}
