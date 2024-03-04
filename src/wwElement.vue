<template>
  <div class="my-element" @mouseenter="$emit('trigger-event', {
    name: 'customHover',
    data: { message: 'hovered' },
  })">
    <p :style="textStyle">{{ message }}</p>
  </div>
</template>

<script>
export default {
  hoverme() {
    console.log('hovered');
  },
  props: {
    content: { type: Object, required: true },
  },
  computed: {
    textStyle() {
      return {
        color: this.content.textColor,
      };
    },
    message() {
      return this.content.message;
    },
  },
};
</script>

<style lang="scss" scoped>
.my-element {
  p {
    font-size: 18px;
  }
}
</style>
