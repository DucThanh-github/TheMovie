<template>
  <div class="relative">
    <header >
        <LayoutHeader />
    </header>
    <div class="h-16 bg-primary">
    </div>
    <div>
      <slot />
    </div>
    <div class="inset-x-0 bottom-0">
      <LayoutFooter/>
    </div>
  </div>
</template>
