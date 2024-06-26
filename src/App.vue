<template>
  <div class="content">
    <h1>Rsbuild with Vue</h1>
    <p>Start building amazing things with Rsbuild.</p>
    <p class="x-text-left">scss public class</p>
  </div>
</template>

<style lang="scss">
@import "~@/style/public.scss";

.content {
  display: flex;
  min-height: 100vh;
  line-height: 1.1;
  text-align: center;
  flex-direction: column;
  justify-content: center;

  @extend %unable-select;
}

.content h1 {
  font-size: 3.6rem;
  font-weight: 700;
}

.content p {
  font-size: 1.2rem;
  opacity: 0.5;
}
</style>
