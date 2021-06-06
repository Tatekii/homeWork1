export default {
  methods:{
    enterBlock(el){
      el.target.style.opacity = 0
    },
    leaveBlock(el){
      el.target.style.opacity = 1
    }
  }
}