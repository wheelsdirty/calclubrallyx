<template>
  <ul>
    <li v-for="link in props.links" :key="link.text">
      <NuxtLink
        :to="link.route"
        :target="link.target"
        class="link-item"
        noPrefetch
      >
        {{ link.text }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  links: {
    type: Array,
    required: true
  }
})
</script>
