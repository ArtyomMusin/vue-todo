// автофокус на элементе el при монтировании
export default {
    name: 'focus',
    mounted (el) {
        el.focus()
    }
}
