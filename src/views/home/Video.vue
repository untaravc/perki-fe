<template>
  <div class="max-w-screen-lg m-auto py-10">
    <div class="px-10 lg:px-32">
      <div class="video-container">
          <div class="frame bg-theme rounded-lg"></div>
      </div>
      <div class="text-center mt-8">
        <div class="text-base text-slate-500 my-3">For a long time, web developers have had to rely on obscure CSS tricks to embed responsive YouTube videos on their website.</div>
      </div>
    </div>
  </div>
</template>

<style>
.video-container {
  position: relative;
  padding-bottom: 56.25%;
}

.video-container .frame {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>