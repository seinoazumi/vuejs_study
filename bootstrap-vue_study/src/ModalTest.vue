<template>
  <div id="app">
    <b-button variant="success" v-b-modal.modal-center>Launch demo modal</b-button>
  
    <b-modal hide-header-close centered text-variant="mutetd" id="modal-center" title="テスト">
      <p class="my-4">コンテンツのテスト</p>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'ModalTest',
}
</script>
