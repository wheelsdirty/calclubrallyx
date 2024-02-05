<template>
  <header class="header-container">
    <nav class="navbar">
      <img :src="`${cdn.BASE_CDN}/843114bc-9539-4529-0017-ac2ac9e16400/public`" class="image">
      <ul class="navbar-links">
        <li v-for="link in navLinks" :key="link.text">
          <NuxtLink
            :to="link.route"
            :target="link.target"
            class="nav-item"
            noPrefetch
          >
            {{ link.text }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { navLinks } from '@/const/nav-links.js'
import cdn from '@/const/cdn.js'

</script>

<style lang="scss" scoped>
.header-container {
  display: flex;
  flex-direction: row;
  position: sticky;
  top: 0;
  height: $header-height;
  background-color: white;
  box-shadow: 0px 2px 5px 0px #DADADA;
  z-index: 5;
}

.image {
  display: flex;
  justify-content: center;
  z-index: 10;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  padding-top: 27px;
  padding-bottom: 30px;
}

.navbar-links {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-decoration: none;
  gap: 46px;
  padding-inline-start: 0px;
}

.nav-item {
  font-size: 14px;
  text-decoration: none;
  color: #333333;

  &:hover {
    color: #FF6900;
  }
}

</style>
