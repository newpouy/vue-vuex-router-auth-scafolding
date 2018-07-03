<template>
  <div class="l5">
    <div v-for="(elComment, idx) in comments" :key="idx" class="comment">
      <span v-if="elComment.failed" class="failbadge">failed - server does not respond({{elComment.retry}})</span>
      <p><a :href="'mailto:' + elComment.email">{{elComment.name}}</a> - {{elComment.body}}</p>
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
        const _id = uuidv4() //for securing unique name
        let payload = { postId,
                        id:_id,
                        body:this.userComment,
                        name:'abcdef',
                        tempId,
                        email:'test@1234.com',
                        retry:0 }
        this.userComment = ''
        this.$emit('putcomment',payload)
        const timeoutMax = 2000 //댓글 전송 실패시 타임아웃 = 2.0초
        const retryMax = 5//댓글 전송 실패시 재시도 = 최대 5번
        const _this = this
        setInterval(function(){
          _this.comments.map(el=>{
            if(el.tempId){
              if(el.tempId === tempId){
                if(payload.retry < retryMax){
                  el.failed = true
                  payload.retry ++
                  _this.$emit('putcomment', payload)
                  _this.$forceUpdate()
                }else{
                  //mark will be left permanent after max retry
                  //this is necessary for saving up future resources
                  clearInterval()
                }
              }

              //since tempId does not exist for successful upload,
              //it uses el.id for clearing unnecessary intervals
              if(el.id === _id && !el.failed){ clearInterval() }
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
  padding:3px;
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
