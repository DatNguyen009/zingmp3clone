<template>
<div class="jss3_boxMain">
    <div class="jss4" v-for="(item, index) in listNow" :key="'A'+index">
        <div class="boxThumb">
            <img :src="item.thumbnailM" width="222">
            <h4>{{item.title}}</h4>
        </div>
        <div class="boxList">
            <div class="ListSong" v-for="(itemA, index) in item.song" :key="'b' + index">
                <div class="infor-song1" @click="PlayMusic(itemA, index)">
                    <img :src="itemA.thumbnail" alt="" width="100" height="100">
                    <div class="detail">
                        <div class="nameSong">
                            {{itemA.title}}
                        </div>
                        <div class="nameSinger">
                            {{itemA.singer}}
                        </div>
                    </div>
                </div>
                <div class="duration">
                    {{itemA.duration}}
                </div>
                <div class="type">
                    ...
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

    data() {
        return {
            id: '',
            listSong: [{
                    id: 'ZW80B6I8',
                    thumbnailM: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_png/covers/1/e/1ebc5f3387b2179e25e55d6208b16b04_1500952255.png',
                    title: 'Những Bài Hát Hay Nhất Của Soobin',
                    song: [{
                            title: 'Xin đừng lặng im',
                            singer: 'Soobin',
                            thumbnail: 'https://photo-resize-zmp3.zadn.vn/w94_r1x1_png/covers/1/e/1ebc5f3387b2179e25e55d6208b16b04_1500952255.png',
                            stream: 'https://firebasestorage.googleapis.com/v0/b/vue-dtfood.appspot.com/o/music%2Fxin%20dung%20lang%20im.mp3?alt=media&token=b058dc7e-1a5a-4b9b-be9e-56b57126d400',
                            duration: '04:10'
                        },
                        {
                            title: 'Phía sau một cô gái',
                            singer: 'Soobin',
                            thumbnail: 'https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/covers/c/b/cbe2dfb3d65dc97c68f983d09bff78a7_1476796126.jpg',
                            stream: 'https://firebasestorage.googleapis.com/v0/b/vue-dtfood.appspot.com/o/music%2Fphia%20sau%20mot%20co%20gai.mp3?alt=media&token=7a0c8818-532d-4077-82ac-34f020dc5509',
                            duration: '04:30'

                        },
                        {
                            title: 'Nếu Ngày Ấy',
                            singer: 'Soobin',
                            thumbnail: 'https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/2/9/b/f/29bf1c15a2aeacf72a2fa1e84d92f3e9.jpg',
                            stream: 'https://firebasestorage.googleapis.com/v0/b/vue-dtfood.appspot.com/o/music%2Fneu%20ngay%20ay.mp3?alt=media&token=f67b31a3-c215-41d9-8ec8-f904fc24adc3',
                            duration: '07:30'

                        },
                        {
                            title: 'The Playah (Special Performance)',
                            singer: 'Soobin, SlimV',
                            thumbnail: 'https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/b/4/2/9/b4292439fdc63154c04a50f56d7da985.jpg',
                            stream: 'https://firebasestorage.googleapis.com/v0/b/vue-dtfood.appspot.com/o/music%2Fthe%20playah.mp3?alt=media&token=fdb3bae7-6aaa-434e-a72c-cdebe2abc31b',
                            duration: '07:29'

                        }
                    ]
                },
                {
                    id: 'W8A0B6I2',
                    thumbnailM: 'https://firebasestorage.googleapis.com/v0/b/zingmp3-13250.appspot.com/o/cover%2Fnh%E1%BB%AFng-b%C3%A0i-h%C3%A1t-hay-nh%E1%BA%A5t-c%E1%BB%A7a-alan-walker%2FThe%20Best%20Of%20Alan%20Walker.jpg?alt=media&token=1d57d5c0-84d3-4f25-98d5-979b7bce9a15',
                    title: 'Những Bài Hát Hay Nhất Của Alan Walker',
                    song: [{
                            title: 'All Falls Down',
                            singer: 'Alan Walker, Noah Cyrus, Digital Farm Animals',
                            thumbnail: 'https://firebasestorage.googleapis.com/v0/b/zingmp3-13250.appspot.com/o/imageSongs%2Fnh%E1%BB%AFng-b%C3%A0i-h%C3%A1t-hay-nh%E1%BA%A5t-c%E1%BB%A7a-alan-walker%2FAll-Falls-Down-Alan-Walker-Noah-Cyrus-Digital-Farm-Animals.mp3%2Fnh%E1%BB%AFng-b%C3%A0i-h%C3%A1t-hay-nh%E1%BA%A5t-c%E1%BB%A7a-alan-walker?alt=media&token=ffdaa4c9-a8f2-40c9-bc08-5994ed914635',
                            stream: 'https://firebasestorage.googleapis.com/v0/b/zingmp3-13250.appspot.com/o/album%2Fnh%E1%BB%AFng-b%C3%A0i-h%C3%A1t-hay-nh%E1%BA%A5t-c%E1%BB%A7a-alan-walker%2FAll-Falls-Down-Alan-Walker-Noah-Cyrus-Digital-Farm-Animals.mp3?alt=media&token=273a06d2-ede4-49cf-9fb1-515efc0ec9c3',
                            duration: '03:19'
                        },
                        {
                            title: 'Alone, Pt. II',
                            singer: 'Alan Walker, Ava Max',
                            thumbnail: 'https://firebasestorage.googleapis.com/v0/b/zingmp3-13250.appspot.com/o/imageSongs%2Fnh%E1%BB%AFng-b%C3%A0i-h%C3%A1t-hay-nh%E1%BA%A5t-c%E1%BB%A7a-alan-walker%2FAlone-Pt-II-Alan-Walker-Ava-Max.mp3%2Fnh%E1%BB%AFng-b%C3%A0i-h%C3%A1t-hay-nh%E1%BA%A5t-c%E1%BB%A7a-alan-walker?alt=media&token=0e18e35a-d6eb-408e-ac65-91d87d08362e',
                            stream: 'https://firebasestorage.googleapis.com/v0/b/zingmp3-13250.appspot.com/o/album%2Fnh%E1%BB%AFng-b%C3%A0i-h%C3%A1t-hay-nh%E1%BA%A5t-c%E1%BB%A7a-alan-walker%2FAlone-Pt-II-Alan-Walker-Ava-Max.mp3?alt=media&token=ce01fc19-09aa-4a50-b3ab-60903bc33fdd',
                            duration: '02:59'

                        }
                    ]
                }
            ],
            listNow: [],
            indexSongActive: 0
        }
    },
    created() {
        this.id = this.$route.params.id;
    },
    methods: {
        PlayMusic(item, index) {
            var selectorListSong = document.querySelectorAll(".ListSong");

            for (var id in selectorListSong) {
                if (id == this.indexSongActive) {
                    selectorListSong[id].classList.remove("active");
                }
            }
            for (let key in selectorListSong) {
                if (key == index) selectorListSong[index].classList.add("active");
                this.indexSongActive = index;
            }

            this.$store.commit("currentSong", item);
            localStorage.setItem("currentSong", item.stream);
        }
    },
    watch: {
        "id": function () {
            this.listSong.filter(item => {
                if (item.id == this.id) {
                    this.$store.commit("ListNow", item);
                    return this.listNow.push(item);
                }
            })
        }
    },
}
</script>

<style>
.jss3_boxMain {
    background-image: url("../assets/background.b3c1beb7.svg");
    width: 100%;
    height: 50rem;
    background-attachment: fixed;
}

.jss4 {
    display: flex;
    width: 100%;
    padding-top: 8rem;
}

.boxThumb {
    width: 50%;
    text-align: center;
}

.boxThumb img {
    border-radius: 5px;
}

.boxThumb h4 {
    width: 222px;
    margin: 0 auto;
    color: white;
    padding-top: 15px;
    font-weight: 600;
}

.boxList {
    width: 100%;
}

.ListSong {
    width: 90%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    height: fit-content;
    cursor: pointer;
    margin: 0 2rem;
    border-bottom: 0.2px solid #bababa24;
    border-bottom-left-radius: 5px;
}

.ListSong:hover {
    border-radius: 5px;
    background-color: #ffffff1f;
    transition: all 1 ease-in-out;
}

.ListSong.active {
    background-color: #ffffff1f;
}

.ListSong img {
    width: 40px;
    height: 40px;
    border-radius: 4px;
    margin: 0 auto;
}

.ListSong .infor-song1 {
    display: flex;
    justify-content: space-around;
    color: white;
}

.detail {
    width: 18rem;
    padding-left: 10px;
}

.nameSong {
    font-weight: 500;
    font-size: 14px;
}

.nameSinger {
    font-size: 12px;
    color: #a3a3a3;
    font-weight: bold;
    white-space: nowrap;
}

.duration {
    color: #b3b1b1;
    font-weight: bold;
    margin: auto;
    font-size: 12px;
}

.type {
    color: white;
    font-weight: bold;
    margin: auto;
}
</style>
