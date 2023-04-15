<template>
  <div class="max-w-screen-lg m-auto py-10">
    <div class="px-10 lg:px-32">
      <div class="video-container">
          <div class="frame bg-theme cursor-pointer flex justify-center items-center rounded-lg bg-center bg-cover bg-[url('/storage/img/vid-preview.jpeg')]">
              <iframe class="frame bg-theme cursor-pointer flex justify-center items-center rounded-lg bg-center bg-cover bg-[url('/storage/img/vid-preview.jpeg')]" v-if="play" src="https://www.youtube.com/embed/HT6mAE3a4E4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <svg xmlns="http://www.w3.org/2000/svg" v-if="!play"
                   @click="play = true" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="play-icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"></path>
              </svg>
          </div>
      </div>
      <div class="text-center mt-8">
        <div class="text-base text-slate-500 my-3">For a long time, web developers have had to rely on obscure CSS tricks to embed responsive YouTube videos on their website.</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            play: false
        }
    }
}
</script>

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

.play-icon{
    width: 100px;
    height: 100px;
}

.video {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
}

iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>