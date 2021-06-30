<template>
<div class="home">
    <div class="container-fluid">
        <div class="row">
            <left-nav />
            <div class="jss2">
                <div class="jss2_boxSearch">
                    <div class="boxSearch_general">
                        <div class="boxSearch_general--path">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                            </svg>
                        </div>
                        <div class="boxSearch_general--input">
                            <input type="text" class="form-control" placeholder="Nhập tên bài hát, nghệ sĩ, hoặc MV...">
                        </div>
                    </div>
                    <div class="boxSearch_option">
                        <div class="boxSearch_option--setting">
                            <svg class="MuiSvgIcon-root jss29" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"></path>
                            </svg>
                        </div>
                        <div class="boxSearch_option--upload">
                            <svg class="MuiSvgIcon-root jss29" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3zM8 13h2.55v3h2.9v-3H16l-4-4z"></path>
                            </svg>
                        </div>
                        <div class="boxSearch_option--user">
                            <img src="../assets/user.png" alt="" width="40">
                        </div>
                    </div>
                </div>
                <div class="jss2_boxMain" v-if="this.$route.name != 'ListSong'">
                    <div class="jss3">
                        <h5>Gợi Ý Cho Hôm Nay</h5>
                        <div class="boxMain_list">
                            <div class="boxMain_list--item">
                                <div class="item1">
                                    <img src="../assets/edm50.jpg" alt="edm" width="162">
                                    <div class="item1_option">
                                        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
                                        </svg>
                                        <div class="item1_option--play">
                                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M8 5v14l11-7z"></path>
                                            </svg>
                                        </div>
                                        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <p>EDM 50: Zing Choice </p>
                            </div>
                            <div class="boxMain_list--item">
                                <router-link :to="{name: 'ListSong', params:{id: 'ZW80B6I8'}}">
                                    <div class="item1">
                                        <img src="../assets/xin dung lang im.png" alt="edm" width="162">
                                        <div class="item1_option">
                                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
                                            </svg>
                                            <div class="item1_option--play">
                                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path d="M8 5v14l11-7z"></path>
                                                </svg>
                                            </div>
                                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <p>Tuyển Tập Những Bài Hát Hay Nhất Của SooBin</p>
                                </router-link>
                            </div>
                            <div class="boxMain_list--item">
                                <div class="item1">
                                    <img src="../assets/blackjack.jpg" alt="edm" width="162">
                                    <div class="item1_option">
                                        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
                                        </svg>
                                        <div class="item1_option--play">
                                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M8 5v14l11-7z"></path>
                                            </svg>
                                        </div>
                                        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <p>EDM 50: Zing Choice</p>
                            </div>
                            <div class="boxMain_list--item">
                                <router-link :to="{name: 'ListSong', params:{id: 'W8A0B6I2'}}">
                                    <div class="item1">
                                        <img src="../assets/The Best Of Alan Walker.jpg" alt="edm" width="162">
                                        <div class="item1_option">
                                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
                                            </svg>
                                            <div class="item1_option--play">
                                                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path d="M8 5v14l11-7z"></path>
                                                </svg>
                                            </div>
                                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <p>Tuyển Tập Những Bài Hát Hay Nhất Của Alan Walker</p>
                                </router-link>
                            </div>
                            <div class="boxMain_list--item">
                                <div class="item1">
                                    <img src="../assets/hơ you like that.jpg" alt="edm" width="162">
                                    <div class="item1_option">
                                        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
                                        </svg>
                                        <div class="item1_option--play">
                                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M8 5v14l11-7z"></path>
                                            </svg>
                                        </div>
                                        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <p>Tuyển Tập Bài Hát Của BlackPink</p>
                            </div>
                        </div>
                        <h6>Âm Nhạc Dành Cho Bạn</h6>
                        <div class="boxMain_list">
                            <div class="boxMain_list--item">
                                <div class="item1">
                                    <img src="../assets/xin dung lang im.png" alt="edm" width="162">
                                    <div class="item1_option">
                                        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
                                        </svg>
                                        <div class="item1_option--play">
                                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M8 5v14l11-7z"></path>
                                            </svg>
                                        </div>
                                        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <p>Tuyển Tập Những Bài Hát Hay Nhất Của SooBin</p>
                            </div>
                            <div class="boxMain_list--item">
                                <div class="item1">
                                    <img src="../assets/The Best Of Alan Walker.jpg" alt="edm" width="162">
                                    <div class="item1_option">
                                        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
                                        </svg>
                                        <div class="item1_option--play">
                                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M8 5v14l11-7z"></path>
                                            </svg>
                                        </div>
                                        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <p>Tuyển Tập Những Bài Hát Hay Nhất Của Alan Walker</p>
                            </div>
                            <div class="boxMain_list--item">
                                <div class="item1">
                                    <img src="../assets/hơ you like that.jpg" alt="edm" width="162">
                                    <div class="item1_option">
                                        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
                                        </svg>
                                        <div class="item1_option--play">
                                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M8 5v14l11-7z"></path>
                                            </svg>
                                        </div>
                                        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <p>Tuyển Tập Bài Hát Của BlackPink</p>
                            </div>
                        </div>
                    </div>
                </div>
                <router-view></router-view>
            </div>
        </div>
    </div>
    <div class="boxplayer">
        <div class="row">
            <div class="col-sm-3" v-if="currentSong.length != 0">
                <div class="infor-song">
                    <img :src="currentSong.thumbnail" width="60" class="image-song">
                    <div class="boxplayer-infor">
                        <div class="name">
                            {{currentSong.title}}
                        </div>
                        <div class="singer">
                            {{currentSong.singer}}
                        </div>
                    </div>
                    <div class="boxplayer-type">
                        ...
                    </div>
                </div>
            </div>
            <div class="col-sm-6" v-if="currentSong.length != 0">
                <div class="playerButtons">
                    <a class="button" v-on:click="prevSong()" title="Phát ngẫu nhiên">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shuffle" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z" />
                            <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z" />
                        </svg>
                    </a>
                    <a class="button" v-on:click="prevSong()" title="Previous Song">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-start-fill" viewBox="0 0 16 16">
                            <path d="M4 4a.5.5 0 0 1 1 0v3.248l6.267-3.636c.54-.313 1.232.066 1.232.696v7.384c0 .63-.692 1.01-1.232.697L5 8.753V12a.5.5 0 0 1-1 0V4z" />
                        </svg>
                    </a>
                    <a class="button play" v-on:click="playAudio()" title="Play/Pause Song">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z" />
                        </svg>
                    </a>
                    <a class="button" @click="nextSong()" title="Next Song">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-end-fill" viewBox="0 0 16 16">
                            <path d="M12.5 4a.5.5 0 0 0-1 0v3.248L5.233 3.612C4.693 3.3 4 3.678 4 4.308v7.384c0 .63.692 1.01 1.233.697L11.5 8.753V12a.5.5 0 0 0 1 0V4z" />
                        </svg>
                    </a>
                    <a class="button" v-on:click="loopSong()" title="Loop">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z" />
                            <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
                        </svg>
                    </a>
                </div>
                <div class="currentTimeContainer" style="text-align:center">
                    <span class="currentTime">{{ currentTime | fancyTimeFormat }}</span>

                    <div class="currentProgressBar">
                        <div class="currentProgress" :style="{ width: currentProgressBar + '%' }"></div>
                    </div>

                    <span class="totalTime">{{ currentSong.duration }}</span>
                </div>

            </div>
            <div class="col-sm-3" v-if="currentSong.length != 0">
                <div class="boxVolunm">
                    <div class="button-sound">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-volume-up" viewBox="0 0 16 16">
                            <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" />
                            <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" />
                            <path d="M10.025 8a4.486 4.486 0 0 1-1.318 3.182L8 10.475A3.489 3.489 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.486 4.486 0 0 1 10.025 8zM7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12V4zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11z" />
                        </svg>
                        <div class="volume-slider-con" @mousedown="mouseDown" @mousemove="updateVolunm" @mouseup="mouseUp">
                            <div class="volume-slider"></div>
                        </div>
                    </div>
                    <div class="button-note">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-music-note-list" viewBox="0 0 16 16">
                            <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
                            <path fill-rule="evenodd" d="M12 3v10h-1V3h1z" />
                            <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z" />
                            <path fill-rule="evenodd" d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </div>
                </div>
            </div>
            <audio id="audio" :src="currentSong.stream" v-if="currentSong.length != 0"></audio>
        </div>
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import LeftNav from '@/components/layout/LeftNav.vue'
export default {
    name: 'Home',
    data() {
        return {
            audio: "",
            imgLoaded: false,
            currentlyPlaying: false,
            currentlyStopped: false,
            currentTime: 0,
            checkingCurrentPositionInTrack: "",
            trackDuration: 1,
            currentProgressBar: 0,
            isPlaylistActive: false,
            currentSong: [],
            count: 0,
            loop: false,
            drag: false,
            volunmPercentage: 0,
        }
    },
    mounted() {

    },
    filters: {
        fancyTimeFormat: function (s) {
            return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
        }
    },
    methods: {
        playAudio() {
            var x = document.getElementById("audio");
            if (this.currentlyPlaying == false) {
                this.currentlyPlaying = true;
                x.play();
                this.getCurrentTimeEverySecond();
            } else {
                this.currentlyPlaying = false;
                x.pause();
            }

        },
        loopSong() {

            var x = document.getElementById("audio");
            var a = document.querySelector(".bi.bi-arrow-counterclockwise");
            if (this.loop == false) {
                a.style.transform = "scale(0.7)";
                x.loop = 'true';
                this.loop = true;
            } else {
                a.style.transform = "scale(1)";
                x.loop = 'false';
                this.loop = false;
            }

        },
        getCurrentTimeEverySecond() {

            var x = document.getElementById("audio");
            this.trackDuration = x.duration;
            this.checkingCurrentPositionInTrack = setTimeout(
                function () {
                    this.currentTime = x.currentTime;
                    this.currentProgressBar =
                        x.currentTime / this.trackDuration * 100;
                    this.getCurrentTimeEverySecond(true);
                }.bind(this),
                1000
            );

            if (this.currentTime == this.trackDuration) {
                this.nextSong();
            }

        },
        mouseDown(event) {
            this.drag = true;
            this.updateBar(event.clientX);
        },
        updateVolunm(event) {
            if (this.drag) {
                this.updateBar(event.clientX);
            }
        },
        mouseUp() {
            this.drag = false;
        },
        updateBar(x) {
            var eInner = document.querySelector('.volume-slider');
            var audio = document.getElementById("audio");
            var e = document.querySelector('.volume-slider-con'),
                percentage, position = x - e.offsetLeft;
            percentage = (100 * position / e.clientWidth) - 930;
            if (percentage < 0) percentage = 0;
            if (percentage > 99) percentage = 100;
            eInner.style.width = percentage + '%';
            audio.volume = percentage / 100;
        },
        nextSong() {
            this.$store.commit("nextSongMutation", this.$route.params.id);
            setTimeout(() => {
                var pause = document.querySelector(".bi.bi-pause-circle");
                var x = document.getElementById("audio");

                if (pause.style.display == "block") {
                    x.play();
                }

            }, 500);
        },
        prevSong() {
            this.$store.commit("prevSongMutation", this.$route.params.id);
            setTimeout(() => {
                var pause = document.querySelector(".bi.bi-pause-circle");
                var x = document.getElementById("audio");

                if (pause.style.display == "block") {

                    x.load();
                    x.play();
                }

            }, 500);
        }
    },
    watch: {
        'currentlyPlaying': function () {
            var play = document.querySelector(".bi.bi-play-circle");
            var pause = document.querySelector(".bi.bi-pause-circle");
            var img = document.querySelector(".image-song");

            this.count++;
            if (this.count % 2 == 0) {
                play.style.display = "block";
                pause.style.display = "none";
                img.classList.remove("animation-image");
            } else {
                play.style.display = "none";
                pause.style.display = "block";
                img.classList.add("animation-image");
            }
        },
        '$store.state.currentSong': function () {
            this.currentSong = this.$store.state.currentSong;

            setTimeout(() => {
                var pause = document.querySelector(".bi.bi-pause-circle");
                var x = document.getElementById("audio");

                if (pause.style.display == "block") {
                    x.play();
                }

            }, 500);

        },
        "currentTime": function () {
            this.currentTime = Math.round(this.currentTime);
        }
    },
    components: {
        'left-nav': LeftNav
    }
}
</script>

<style>
.button-note {
    width: 30%;
    padding: 10% 0;
}

.bi.bi-volume-up {
    width: 1.4rem;
    height: 1.4rem;

}

.boxVolunm {
    width: 100%;
    display: flex;
    justify-content: space-around;
}

.button-sound {
    display: flex;
    width: 70%;
    height: 100%;
    padding: 10% 0;
}

.volume-slider-con {
    height: 3.5px;
    width: 50%;
    position: relative;
    background-color: #6e5283;
    margin-top: 10px;
    margin-left: 4px;
    cursor: pointer;
}

.volume-slider {
    height: 100%;
    width: 100%;
    position: relative;
    background-color: white;

}

.currentProgressBar {
    width: 74%;
    background-color: #6e5283;
    height: 3px;
    margin: auto;
}

.currentProgress {
    background-color: white;
    width: 0px;
    height: 3px;
    transition: 100ms;
}

.animation-image {
    animation: imgRotate 10s linear infinite;
}

@keyframes imgRotate {
    100% {
        transform: rotate(360deg);
    }
}

.currentTimeContainer {
    width: 100%;
    display: flex;
    justify-content: space-around;

}

.currentTime,
.totalTime {
    font-size: 12px;
    font-family: monospace;
    color: white;
}

.bi.bi-skip-start-fill,
.bi.bi-skip-end-fill,
.bi.bi-arrow-counterclockwise,
.bi.bi-shuffle {
    width: 28px;
    height: 28px;
    color: white;
    cursor: pointer;
}

.bi.bi-play-circle {
    width: 35px;
    height: 35px;
    color: white;
    cursor: pointer;
}

.bi.bi-pause-circle {
    width: 35px;
    height: 35px;
    color: white;
    cursor: pointer;
    display: none;
}

.playerButtons {
    text-align: center;

}

.button {
    font-size: 2rem;
    display: inline-block;
    vertical-align: middle;
    padding: 0.5rem;
    margin: 0 0.25rem;
    color: rgba(0, 0, 0, 0.75);
    border-radius: 50%;

    outline: 0;
    text-decoration: none;
    cursor: pointer;
    transition: 0.5s;

}

.play {
    margin: 0 1.5rem;
}

.boxplayer {
    position: fixed;
    color: white;
    background-image: url("../assets/backgroundPlayer.2ddaa50b.png");
    background-size: cover;
    width: 100%;
    bottom: 0;
    height: 92px;
    z-index: 999999;
}

.infor-song {
    display: flex;
    padding: 20px 0;
    justify-content: space-around;
}

.infor-song img {
    border-radius: 50%;
    border: 2px solid white;
}

.boxplayer-infor {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 150px;
}

.boxplayer-type {
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.boxplayer-infor .name {
    font-size: 14px;
    font-weight: 500;
}

.boxplayer-infor .singer {
    font-size: 12px;
    color: #a3a3a3;
}

.boxMain_list--item a {
    text-decoration: none;
}

.item1:hover .item1_option {
    opacity: 1;
}

.item1:hover img {
    transform: scale(1.08);
}

.item1 {
    border-radius: 4px;
}

.jss3 {
    height: 70%;
    overflow-y: scroll;
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}

.jss3::-webkit-scrollbar {
    display: none;
}

.jss2_boxSearch {
    position: fixed;
    display: flex;
    width: 100%;
    background-color: #37075d;
    box-shadow: 0 3px 5px rgb(0 0 0 / 10%);
    transition: all 0.5s linear;
    z-index: 999999;
}

.boxSearch_general {
    display: flex;
    padding: 15px 0;
}

.boxSearch_general--path {
    color: #683592;
    margin: 0 1.5rem;
}

.boxSearch_general--path svg {
    width: 28px;
    height: 45px;
    margin-right: 12px;
}

.boxSearch_general--input input {
    background-color: #55257c;
    border-radius: 40px;
    width: 35rem;
    border-color: #411565;
    height: 42px;
}

.form-control:focus {
    color: rgb(248, 246, 246);
    background-color: #55257c;
    border-color: #55257c;
    box-shadow: none;
}

.boxSearch_general--input input::placeholder {
    font-weight: 500;
    color: rgb(150, 144, 144);
    font-size: 13px;
}

.jss2_boxMain {
    background-image: url("../assets/background.b3c1beb7.svg");
    width: 100%;
    height: 100%;
    background-attachment: fixed;
}

.boxSearch_option {
    display: flex;
    padding: 15px 0;
    margin-left: 11rem;
}

.boxSearch_option--setting,
.boxSearch_option--upload {
    width: 40px;
    height: -moz-fit-content;
    height: fit-content;
    fill: white;
    padding: 8px;
    border-radius: 50%;
    background-color: #55257c;
    margin: 0 5px;
}

.boxSearch_option--user img {
    margin-left: 5px;
    border-radius: 50%;
}

.jss2_boxMain h5:nth-child(1) {
    padding-top: 7rem;
    padding-left: 3.7rem;
    color: white;
    font-weight: 600;
}

h6 {
    font-size: 18px;
    padding-left: 3.7rem;
    color: white;
    font-weight: 600;
}

.boxMain_list {
    display: flex;
}

.boxMain_list--item {
    display: block;
    margin-top: 0.7rem;
}

.boxMain_list--item:nth-child(1) {
    margin-left: 3.7rem;
    margin-right: 1.8rem;
}

.boxMain_list--item:nth-child(2),
.boxMain_list--item:nth-child(3),
.boxMain_list--item:nth-child(4) {
    margin-right: 1.8rem;
}

.boxMain_list--item p {
    width: 162px;
    padding-top: 10px;
    color: white;
    font-size: 14px;
    font-weight: 500;
    white-space: pre-wrap;
}

.boxMain_list--item img {
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    border-radius: 4px;
    max-width: 100%;
    max-height: 100%;
    z-index: 999999;
}

/* .boxMain_list--item img:hover{
    transform: scale(1.08);
  } */
.item1_option {
    position: relative;
    display: flex;
    justify-content: center;
    height: 2rem;
    width: 162px;
    height: 162px;
    fill: white;
    margin-top: -10.2rem;
    opacity: 0;
    cursor: pointer;
    transition: all 0.1s ease-in;
    z-index: 9;
    border-radius: 4px;
    background-color: #32323254;
}

/* .item1_option:hover {
    opacity: 1;
  } */
.item1_option>svg {
    width: 1rem;
}

.item1_option--play {
    height: 2rem;
    width: 2rem;
    fill: white;
    margin: 4rem 1rem;
}
</style>
