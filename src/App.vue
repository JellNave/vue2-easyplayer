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
    <!-- @message="$message" v-loading="bLoading" :loading.sync="bLoading" element-loading-text="加载中..." element-loading-background="#000" -->
    <EasyPlayer
      alt="信号丢失，请检查设备网络"
      debug
      :onDemand="true"
      id="EasyPlayer"
      ref="EasyPlayer"
      poster="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg2.niutuku.com%2Fdesk%2F1208%2F1300%2Fntk-1300-31979.jpg&refer=http%3A%2F%2Fimg2.niutuku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668924747&t=810da98ce1a83aa65bab0dd515992fce"
      :hasaudio="true"
      :hasvideo="true"
      videoUrl="http://zhyl.zwyun.bjtzh.gov.cn:18050/flv/live/11011200002000115116_11011201581314000116_0112010116.flv"
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
    return {
      bLoading: false,
    };
  },
  mounted() {
    console.dir(this.$refs.EasyPlayer);
    window.myEasyPlayer = this.$refs.EasyPlayer;
  },
  methods: {
    ended() {
      [...this.$refs.EasyPlayer.$el.children]
        .find((i) => {
          if (i.className == "easy-video-player-inner") {
            return i;
          }
        })
        .children[0].children[0].ended();
    },
    pause() {
      console.log(
        this.$refs.EasyPlayer.$el.children[0].children[0].children[0]
      );
      [...this.$refs.EasyPlayer.$el.children]
        .find((i) => {
          if (i.className == "easy-video-player-inner") {
            return i;
          }
        })
        .children[0].children[0].pause();
    },
    /* 播放失败时触发 */
    error() {
      console.log("播放失败时，");
      this.$refs.EasyPlayer.destroyPlayer();
      this.$refs.EasyPlayer.initPlayer();
      // this.$refs.EasyPlayer.restartPlayer();
    },
    initPlayer() {
      // console.log(this.$refs.EasyPlayer.initPlayer);
      this.$refs.EasyPlayer.initPlayer();
    },
    destroyPlayer() {
      this.$refs.EasyPlayer.destroyPlayer();
    },
    play() {
      [...this.$refs.EasyPlayer.$el.children]
        .find((i) => {
          if (i.className == "easy-video-player-inner") {
            return i;
          }
        })
        .children[0].children[0].play();
    },
    restartPlayer() {
      let player = this.$refs.EasyPlayer;
      // player = player.getVueInstance();
      player.initPlayer();
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
