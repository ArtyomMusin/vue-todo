//
export default {
    props: {
        show: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    methods: {
        hideModal () {
            this.$emit('update:show', false)
        }
    }
}