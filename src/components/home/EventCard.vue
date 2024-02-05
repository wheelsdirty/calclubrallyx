<template>
  <div class="event-card-container">
    <div class="card-image">
      <span>insert event image here</span>
    </div>
    <div class="card-name">
      <slot name="name" />
    </div>
    <div class="card-text">
      <slot name="text" />
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.event-card-container {
  border-radius: 4px;
  border: 1px;
  background-color: grey;
}
</style>
