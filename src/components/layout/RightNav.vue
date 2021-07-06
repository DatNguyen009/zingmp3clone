<template>
<div class="jss5">
    <div class="jss5-menu">
        <div class="row justify-content-around" style="margin:21px 0;color: white;">
            <div class="row jss5__menu-list" style="margin:0;">
                <p>Danh sách phát</p>
                <p>Nghe gần đây</p>
            </div>
            <div class="jss5__oclock">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-alarm" viewBox="0 0 16 16">
                    <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                    <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                </svg>
            </div>
            <div class="jss5__type">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>
            </div>
        </div>
        <div class="playlists" v-for="(item,index) in this.$store.state.listNow.song" :key="index">
            <div class="playlists-infor d-flex" >
                <img :src="item.thumbnail" class="jss54">
                <div class="playlists-detail">
                    <div class="detail-nameSong">
                        {{item.title}}
                    </div>
                    <div class="detail-nameSinger">
                        {{item.singer}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style>
.jss5 {
    position: absolute;
    right: -320px;
    width: 320px;
    height: 100vh;
    background-color: #5d218c;
    z-index: 999999;
    backface-visibility: hidden;
    transform: translateZ(0);
    transition: all 0.5s ease;
}

.jss5__menu-list {
    background-color: #d7d2d236;
    border-radius: 50px;
    height: auto;
}

.jss5__menu-list p {
    margin-bottom: 0;
    margin: 7px;
    font-size: 11px;
    font-weight: 600;
}

.jss5__menu-list p:nth-child(1) {
    background-color: #ffffff96;
    border-radius: 43px;
    margin: 4px;
    padding: 4px 10px;
}

.jss5__menu-list p:nth-child(2) {
    padding: 1px 5px;
}

.jss5__oclock,
.jss5__type {
    height: 30px;
    width: 30px;
    /* margin: 0 auto; */
    display: flex;
    text-align: center;
    background-color: #e3dede78;
    border-radius: 50px;
}

.bi.bi-alarm,
.bi.bi-three-dots {
    margin: 7px;
}
.playlists{
    margin:0.4rem 0.4rem;
    background-color: #ed2b91;
    border-radius: 4px;
}
.playlists-infor{
    margin: 0.5rem 10px;
}
.playlists-infor img {
    width: 16%;
    border-radius: 4px;
}


.playlists-detail {
    width: 18rem;
    padding-left: 10px;
    color: white;
}

.detail-nameSong {
    font-weight: 500;
    font-size: 14px;
}

.detail-nameSinger {
    font-size: 12px;
    color: #ffffff6b;
    font-weight: bold;
    white-space: nowrap;
}
</style>
