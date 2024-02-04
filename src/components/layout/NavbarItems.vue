<template>
  <header class="header-container">
    <nav class="navbar">
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
const navLinks = [
  { text: 'Home', route: '/', target: '_self' },
  { text: 'Schedule', route: '/schedule', target: '_self' },
  { text: 'Antelope Valley', route: '/antelope-valley', target: '_self' },
  { text: 'Glen Helen', route: '/glen-helen', target: '_self' },
  { text: 'Ridgecrest', route: '/ridgecrest', target: '_self' },
  { text: 'Johnson Valley', route: '/johnson-valley', target: 'self' }
]
</script>

<style lang="scss" scoped>
.header-container {
  display: flex;
  flex-direction: row;
  position: sticky;
  top: 0;
  height: 69px;
  background-color: white;
  box-shadow: 0px 3px 3px 0px #0000000D;
  z-index: 5;
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
  font-size: 17px;
  text-decoration: none;
  color: black;

  &:hover {
    color: grey;
  }
}

</style>
