<template>
  <div class="modal" v-if="show" @click="hideModal">
    <div @click.stop class="modal__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from '@/mixins/toggleMixin'

export default {
  name: "MyModal",
  mixins: [toggleMixin]
}
</script>

<style scoped>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .modal__content {
    width: fit-content;
    height: fit-content;
    background-color: #fff;
    padding: 1rem 1.6rem;
    border-radius: 1rem;
  }
</style>