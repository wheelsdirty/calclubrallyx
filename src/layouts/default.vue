<template>
  <LayoutTheHeader />
  <div class="content-wrapper">
    <slot />
  </div>
  <LayoutTheFooter />
</template>

<style lang="scss" scoped>
.content-wrapper {
  min-height: calc(100vh - #{$header-height} - #{$footer-height});
}
</style>
