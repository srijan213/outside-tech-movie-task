export const generateChar = (): string => {
    const char = String.fromCharCode(97 + Math.floor(Math.random() * 26))
    return char
}
