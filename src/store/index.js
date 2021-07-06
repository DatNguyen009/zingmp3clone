import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentSong: [],
    listSong: [
      {
        id: "ZW80B6I8",
        thumbnailM:
          "https://photo-resize-zmp3.zadn.vn/w240_r1x1_png/covers/1/e/1ebc5f3387b2179e25e55d6208b16b04_1500952255.png",
        title: "Những Bài Hát Hay Nhất Của Soobin",
        song: [
          {
            title: "Xin đừng lặng im",
            singer: "Soobin",
            thumbnail:
              "https://photo-resize-zmp3.zadn.vn/w94_r1x1_png/covers/1/e/1ebc5f3387b2179e25e55d6208b16b04_1500952255.png",
            stream:
              "https://firebasestorage.googleapis.com/v0/b/vue-dtfood.appspot.com/o/music%2Fxin%20dung%20lang%20im.mp3?alt=media&token=b058dc7e-1a5a-4b9b-be9e-56b57126d400",
            duration: "04:10",
          },
          {
            title: "Phía sau một cô gái",
            singer: "Soobin",
            thumbnail:
              "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/covers/c/b/cbe2dfb3d65dc97c68f983d09bff78a7_1476796126.jpg",
            stream:
              "https://firebasestorage.googleapis.com/v0/b/vue-dtfood.appspot.com/o/music%2Fphia%20sau%20mot%20co%20gai.mp3?alt=media&token=7a0c8818-532d-4077-82ac-34f020dc5509",
            duration: "04:30",
          },
          {
            title: "Nếu Ngày Ấy",
            singer: "Soobin",
            thumbnail:
              "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/2/9/b/f/29bf1c15a2aeacf72a2fa1e84d92f3e9.jpg",
            stream:
              "https://firebasestorage.googleapis.com/v0/b/vue-dtfood.appspot.com/o/music%2Fneu%20ngay%20ay.mp3?alt=media&token=f67b31a3-c215-41d9-8ec8-f904fc24adc3",
            duration: "07:30",
          },
          {
            title: "The Playah (Special Performance)",
            singer: "Soobin, SlimV",
            thumbnail:
              "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/b/4/2/9/b4292439fdc63154c04a50f56d7da985.jpg",
            stream:
              "https://firebasestorage.googleapis.com/v0/b/vue-dtfood.appspot.com/o/music%2Fthe%20playah.mp3?alt=media&token=fdb3bae7-6aaa-434e-a72c-cdebe2abc31b",
            duration: "07:29",
          },
        ],
      },
      {
        id: "W8A0B6I2",
        thumbnailM:
          "https://firebasestorage.googleapis.com/v0/b/zingmp3-13250.appspot.com/o/cover%2Fnh%E1%BB%AFng-b%C3%A0i-h%C3%A1t-hay-nh%E1%BA%A5t-c%E1%BB%A7a-alan-walker%2FThe%20Best%20Of%20Alan%20Walker.jpg?alt=media&token=1d57d5c0-84d3-4f25-98d5-979b7bce9a15",
        title: "Những Bài Hát Hay Nhất Của Alan Walker",
        song: [
          {
            title: "All Falls Down",
            singer: "Alan Walker, Noah Cyrus, Digital Farm Animals",
            thumbnail:
              "https://firebasestorage.googleapis.com/v0/b/zingmp3-13250.appspot.com/o/imageSongs%2Fnh%E1%BB%AFng-b%C3%A0i-h%C3%A1t-hay-nh%E1%BA%A5t-c%E1%BB%A7a-alan-walker%2FAll-Falls-Down-Alan-Walker-Noah-Cyrus-Digital-Farm-Animals.mp3%2Fnh%E1%BB%AFng-b%C3%A0i-h%C3%A1t-hay-nh%E1%BA%A5t-c%E1%BB%A7a-alan-walker?alt=media&token=ffdaa4c9-a8f2-40c9-bc08-5994ed914635",
            stream:
              "https://firebasestorage.googleapis.com/v0/b/zingmp3-13250.appspot.com/o/album%2Fnh%E1%BB%AFng-b%C3%A0i-h%C3%A1t-hay-nh%E1%BA%A5t-c%E1%BB%A7a-alan-walker%2FAll-Falls-Down-Alan-Walker-Noah-Cyrus-Digital-Farm-Animals.mp3?alt=media&token=273a06d2-ede4-49cf-9fb1-515efc0ec9c3",
            duration: "03:19",
          },
          {
            title: "Alone, Pt. II",
            singer: "Alan Walker, Ava Max",
            thumbnail:
              "https://firebasestorage.googleapis.com/v0/b/zingmp3-13250.appspot.com/o/imageSongs%2Fnh%E1%BB%AFng-b%C3%A0i-h%C3%A1t-hay-nh%E1%BA%A5t-c%E1%BB%A7a-alan-walker%2FAlone-Pt-II-Alan-Walker-Ava-Max.mp3%2Fnh%E1%BB%AFng-b%C3%A0i-h%C3%A1t-hay-nh%E1%BA%A5t-c%E1%BB%A7a-alan-walker?alt=media&token=0e18e35a-d6eb-408e-ac65-91d87d08362e",
            stream:
              "https://firebasestorage.googleapis.com/v0/b/zingmp3-13250.appspot.com/o/album%2Fnh%E1%BB%AFng-b%C3%A0i-h%C3%A1t-hay-nh%E1%BA%A5t-c%E1%BB%A7a-alan-walker%2FAlone-Pt-II-Alan-Walker-Ava-Max.mp3?alt=media&token=ce01fc19-09aa-4a50-b3ab-60903bc33fdd",
            duration: "02:59",
          },
        ],
      },
    ],
    indexSong: 0,
    listNow: []
  },
  getters:{
  },
  mutations: {
    ListNow(state, data){
      state.listNow = data;
    },
    currentSong(state, data) {
      state.currentSong = data;
    },
    nextSongMutation(state, data){
      state.listSong.forEach(item => {
        if (item.id == data) {
          state.indexSong = item.song.findIndex(itemA => itemA.title == state.currentSong.title);
          if (state.indexSong == item.song.length-1)
          {
            state.currentSong = item.song[0];
            state.indexSong = 0;
          }else{
            state.currentSong = item.song[state.indexSong + 1];
          }
        }
      })
    },
    prevSongMutation(state, data){
      state.listSong.forEach(item => {
        if (item.id == data) {
          state.indexSong = item.song.findIndex(itemA => itemA.title == state.currentSong.title);
          if (state.indexSong == 0)
          {
            state.currentSong = item.song[item.song.length-1];
            state.indexSong = item.song.length-1;
          }else{
            state.currentSong = item.song[state.indexSong - 1];
          }
        }
      })
    }
  },
  actions: {},
  modules: {},
});
