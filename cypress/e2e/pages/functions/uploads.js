export function Uploads(event) {
    var el = event.target, found
    while (el && !(found = el.type === 'file')) {
        el = el.parentElement
    }
    if (found) {
        event.preventDefault()
    }
}