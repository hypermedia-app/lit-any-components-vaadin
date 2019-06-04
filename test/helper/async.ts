export function delay(ms = 100) {
    return new Promise(resolve => window.setTimeout(resolve, ms))
}
