<script>
export default {
  name: 'SmallCard',
  props: {
    cardData: Object
  },
  render (h) {
    return h(
      'div', {
      class: "small-card-block"
    }, [
      h(
        'div', {
          attrs:{

          },
        class: 'block-title'
      },
        [this.cardData.platform,
          h(
            'svg-icon', {
            props: {
              iconClass: this.cardData.platform
            },
            style: {
              width: '2em',
              height: '2em',
              verticalAlign: 'middle'
            }
          }
          )
        ]
      )
    ]
    )
  }
}
</script>

<style lang="" scoped>
</style>
