<template>
  <div class="drawer-container">
    <button class="drawer-button-text" @click="handleOpen">
      <p><slot name="question" /></p>
    </button>
    <div v-if="isDrawerOpen">
      <p><slot name="answer" /></p>
    </div>
  </div>
</template>

<script setup>
const isDrawerOpen = ref(false)

const handleOpen = () => {
  if (!isDrawerOpen.value) {
    isDrawerOpen.value = true
  } else {
    isDrawerOpen.value = false
  }
}
</script>

<style lang="scss" scoped>
.drawer-button-text {
  cursor: pointer;
}
</style>
