<template>
  <div>
    <h1>modal testing page</h1>
    <!-- buttons to open modals -->
    <button @click="testDialog=true">open basic dialog</button>
    <button @click="openInputDialog">open input dialog</button>
    <!-- the below is the modals -->
    <Modal v-if="testDialog" @close="testDialog=false"
    :options="[DIALOG.OPTION_XCLOSE]">
      <p slot="body">Message goes here</p>
    </Modal>

    <Modal v-if="inputDialog" @cancel="inputDialog=false" @confirm="validateInput(testval);inputDialog=false"
    :options="[DIALOG.OPTION_NOT_DISMISSIBLE]"
    :type="DIALOG.TYPE_CONFIRMCANCEL">
      <div slot="body">
        <input type="text" v-model="testval" placeholder="put your values here" ref="focustarget">
      </div>
    </Modal>
  </div>
</template>
<script>
import DIALOG from '@/components/CommonUI/MODALSETTING.js';

function validateInput(res) {
  alert(res);
}

function openInputDialog() {
  this.testval = '';
  this.inputDialog = true;
  if (this.$refs.focustarget) {
    this.$nextTick(() => this.$refs.focustarget.$el.focus());
  }
}

function data() {
  return {
    testDialog: false,
    inputDialog: false,
    testval: '',
    DIALOG,
  };
}

export default{
  data,
  methods: {
    validateInput,
    openInputDialog,
  },
};
</script>
<style lang="scss" scoped>

</style>
