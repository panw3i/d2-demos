export default function (form) {
  return {
    props: {
      value: {
        default: () => form
      }
    },
    data () {
      return {
        form
      }
    },
    watch: {
      form: {
        handler (value) {
          this.$emit('input', value)
        },
        deep: true,
        immediate: true
      }
    }
  }
}
