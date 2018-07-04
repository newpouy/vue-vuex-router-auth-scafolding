<template>
  <div>
    <h2>글 남기기</h2>
    <form>
      <spinner v-if="isLoading"></spinner>
      <input type="text" v-model="title" placeholder="제목을 입력하세요" id="title"/>
      <textarea v-model="source" placeholder="본문을 입력하세요"></textarea><br/>
      <input type="submit" value="write" @click="putPost" />
      <h3>본문 미리보기</h3>
      <div id="preview">
        <div v-html="parsed"></div>
      </div>
      <p>supports markdown standard(github style) : <a href="http://commonmark.org">http://commonmark.org/</a></p>
    </form>
  </div>
</template>
<script>
import uuidv4 from 'uuid/v4'
const marked = require('markdown-it')()
export default{
  data(){
    return {
      title:'',
      source:'',
      parsed:'',
      isLoading: false
    }
  },
  methods:{
    putPost(e){
      e.preventDefault()
      const tempId = uuidv4()
      let payload = {
        tempId,
        temp: true,
        userId: 1234, //userId always has to be numbers, not string
        title: this.title,
        body: this.source
      }
      this.isLoading = true //attach spinner to this property
      this.$store.dispatch('test/putPost', payload)
      .then(res => {
        console.log('posting success')
        this.isLoading = false
        this.$router.replace('/test') //use replace instead of go for rerouting vue-router element
      }).catch(err => {
        console.log('failed...retry', err)
        this.putPost(e) //retrying....
      })
    }
  },
  watch:{
    source:{
      handler(){ 
        this.parsed = marked.render(this.source)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  textarea{
    width:90%;
    height:300px;
    max-width:90%;
    min-height:100px;
    resize:vertical;
  }
  input[type=submit]{
    border:none;
    padding:10px 30px 10px 30px;
    background-color:darkslategray;
    color:white;
    transition:0.5s;
    &:hover{
      transition:0.5s;
      color:darkslategray;
      background-color:rgba(0,0,0,0.1)
    }
  }
  #title{
    width:90%;
    margin-bottom:20px;
    padding:10px 0 10px 0;
  }
  #preview{
    display:flex;
    justify-content:center;
    > div{
      min-height:100px;
      width:90%;
      text-align:left;
      border:solid 1px rgba(0,0,0,0.3);
    }
  }
</style>