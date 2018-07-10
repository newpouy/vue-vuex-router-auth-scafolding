<template>
  <transition name="modal">
    <div class="modal-mask" :style="{zIndex}" @click="callClose">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div v-if="options.includes(DIALOG.OPTION_XCLOSE)"
          class="modal-xclose" @click="$emit('close')">
            <!-- X close button in SVG format -->
            <svg viewPort="0 0 12 12" width="12" height="12" version="1.1"
              xmlns="http://www.w3.org/2000/svg">
              <line x1="1" y1="11"
                    x2="11" y2="1"
                    stroke="black"
                    stroke-width="2"/>
              <line x1="1" y1="1"
                    x2="11" y2="11"
                    stroke="black"
                    stroke-width="2"/>
            </svg>
          </div>
          <div class="modal-header">
            <slot name="header">
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              please insert text here
            </slot>
          </div>

          <div class="modal-footer">
            <div @click="$emit('confirm')">
              {{type === DIALOG.TYPE_CONFIRM ||
               type === DIALOG.TYPE_CONFIRMCANCEL ? "confirm" : "YES"}}
            </div>
            <div @click="secondary"
              v-if="type === DIALOG.TYPE_YESNO ||
            type === DIALOG.TYPE_CONFIRMCANCEL">
              {{type === DIALOG.TYPE_YESNO ? "NO" : ''}}
              {{type === DIALOG.TYPE_CONFIRMCANCEL ? "cancel" : ''}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>

import DIALOG from '@/components/CommonUI/MODALSETTING.js';

function data() {
  return {
    DIALOG,
  };
}

const props = {
  zIndex: {
    type: Number,
    default: 99,
  },
  type: {
    type: Number,
    default: DIALOG.TYPE_CONFIRM,
  },
  options: {
    type: Array,
    default() {
      return [];
    },
  },
};

function callClose() {
  if (!this.options.includes(DIALOG.OPTION_NOT_DISMISSIBLE)) {
    this.$emit('close');
  }
}

function secondary() {
  switch (this.type) {
    case DIALOG.TYPE_YESNO:
      this.$emit('no');
      break;
    case DIALOG.TYPE_CONFIRMCANCEL:
      this.$emit('cancel');
      break;
    default:
      // currently empty
  }
}

export default {
  data,
  props,
  methods: {
    callClose,
    secondary,
  },
};

</script>
<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 99; /* z-index later gets modified by component props*/
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  padding-top:20px;
  width: 300px;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  padding:0 20px;
  margin-top: 0;
  color: #42b983;
}
.modal-xclose{
  float:right;
  padding-right:15px;
  > svg {
  cursor:pointer;
  }
}

.modal-body {
  padding:0 20px;
  margin: 20px 0;
}

.modal-footer {
  display:flex;
}
.modal-footer > div{
  cursor:pointer;
  padding:10px;
  flex-grow:1;
  text-align:center;
  border-top: solid 1px rgba(0,0,0,.5);
}
.modal-footer > div:not(:first-child){
  border-left:solid 1px rgba(0,0,0,.5);
}
.modal-footer > div:hover{
  background-color:green;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
