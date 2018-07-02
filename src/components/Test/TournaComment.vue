<template>
  <div class="l5">
    <div v-for="(elComment, idx) in comments" :key="idx" class="comment">
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
    methods:{
      addComment(postId){
        let payload = {postId,commentBody:this.userComment,userId:123}
        //this.$emit('putcomment',{postId,commentBody:this.userComment,userId:123})
        this.$emit('putcomment',payload)
      }
    }
  }
</script>

<style lang="scss" scoped>
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
