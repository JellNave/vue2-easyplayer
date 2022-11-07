<template>
  <div id="app">
    <div class="videoPlayer">
      <div>
        <div>vue方法:通过ref可以调用的方法</div>
        <button @click="initPlayer">初始化播放器</button>
        <button @click="destroyPlayer">destroyPlayer:注销播放器</button>
      </div>
      <div>
        <div>不生效</div>
        <button @click="ended">播放结束或直播断流</button>
      </div>
      <div>
        <div>原生video标签能力</div>
        <button @click="play">播放</button>
        <button @click="pause">暂停</button>
      </div>
    </div>
    <EasyPlayer
      alt="信号丢失，请检查设备网络"
      debug
      :onDemand="true"
      id="EasyPlayer"
      ref="EasyPlayer"
      :hasaudio="true"
      :hasvideo="true"
      videoUrl="http://219.151.31.38/liveplay-kk.rtxapp.com/live/program/live/hnwshd/4000000/mnf.m3u8"
      fluent
      auto-play="true"
      :live="true"
      stretch
      muted
      :show-custom-button="false"
      @error="error"
      @ended="restartPlayer"
    ></EasyPlayer>
  </div>
</template>

<script>
import EasyPlayer from "@easydarwin/easyplayer";
export default {
  name: "App",
  components: {
    EasyPlayer,
  },
  data() {
    return {};
  },

  methods: {
    error() {
      this.$refs.EasyPlayer.destroyPlayer();
      this.$refs.EasyPlayer.initPlayer();
    },
    restartPlayer() {
      let player = this.$refs.EasyPlayer;
      player.initPlayer();
    },
    initPlayer() {
      this.$refs.EasyPlayer.initPlayer();
    },
    destroyPlayer() {
      this.$refs.EasyPlayer.destroyPlayer();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  text-align: center;
}
.videoPlayer {
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#EasyPlayer {
  width: 750px;
  height: 500px;
  margin: 0 auto;
}
</style>
