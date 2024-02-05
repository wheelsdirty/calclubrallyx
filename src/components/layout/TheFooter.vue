<template>
  <footer class="footer-container">
    <div class="information-links">
      <h3>Information:</h3>
      <ListLinks :links="informationLinks" />
    </div>
    <div class="event-links">
      <h3>Events:</h3>
      <ListLinks :links="eventLinks" />
    </div>
    <div class="social_links">
      <h3>Social:</h3>
      <ul>
        <li>Instagram</li>
        <li>Facebook</li>
        <li>Youtube</li>
      </ul>
    </div>
  </footer>
</template>

<script setup>
import { navLinks } from '@/const/nav-links.js'

const informationLinks = computed(() => {
  return navLinks.filter(link => !link.isEvent)
})

const eventLinks = computed(() => {
  return navLinks.filter(link => link.isEvent)
})

</script>

<style lang="scss" scoped>
.footer-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 60px;
  background-color: grey;
  width: 100%;
  min-height: $footer-height;
}
</style>
