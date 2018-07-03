<template>
  <div class="l5">
    <div v-for="(elComment, idx) in comments" :key="idx" class="comment">
      <p><a :href="'mailto:' + elComment.email">{{elComment.name}}</a> - {{elComment.body}}</p>
      <span v-if="elComment.failed" class="failbadge">failed!</span>
    </div>
    <div class="commentEditor">
      <textarea v-model="userComment" placeholder="write your own reply here"></textarea>
      <button @click="addComment(id)">Add Reply</button>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import uuidv4 from 'uuid/v4'
  export default{
    name:'TournaComments',
    data(){
      return {
        userComment: ''
      }
    },
    props:{
      comments:Array,
      id:{
        type:Number,
        default:0
      }
    },
    computed:{
    },
    watch:{
      comments:{
        handler(){
        },
        deep:true
      }
    },
    methods:{
      addComment(postId){
        const tempId = uuidv4()
        let payload = { postId,
                        body:this.userComment,
                        name:'abcdef',
                        tempId,
                        email:'test@1234.com' }
        this.userComment = ''
        this.$emit('putcomment',payload)
        const timeoutMax = 2000 //댓글 전송 실패시 타임아웃 = 2.0초
        const _this = this
        setTimeout(function(){
          _this.comments.map(el=>{
            if(el.tempId){
              if(el.tempId === tempId){
                el.failed = true
              }
            }
            return el
          })
          _this.$forceUpdate()
        },timeoutMax)
      }
    }
  }
</script>

<style lang="scss" scoped>
.failbadge{
  padding:2px;
  color:white;
  background-color:palevioletred;
  font-size:0.5rem;
  border-radius:3px;
}
.comment{
  text-align:left;
  border-bottom:solid 1px lightgray;
}
.commentEditor{
  display:flex;
  textarea{
    flex-grow:1;
    resize:vertical;
    max-height:200px;
  }
  button{
    background-color:gray;
    border:none;
    width:20%;
    &:hover{
      background-color:lightgray;
    }
  }
}
</style>
