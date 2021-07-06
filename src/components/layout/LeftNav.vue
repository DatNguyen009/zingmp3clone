<template>
<div class="jss1">
    <div class="jss1_logo">
        <router-link to="/">
            <img src="../../assets/logo-dark.606079e5.svg" alt="logo zingmp3" width="120" height="40">
        </router-link>
    </div>
    <div class="jss1_menu">
        <div class="jss1_item1">
            <svg class="jss1_item1--icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM8 15c0-1.66 1.34-3 3-3 .35 0 .69.07 1 .18V6h5v2h-3v7.03c-.02 1.64-1.35 2.97-3 2.97-1.66 0-3-1.34-3-3z"></path>
            </svg>
            <p>Cá Nhân</p>
        </div>
        <div class="jss1_item2">
            <svg class="jss1_item2--icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z"></path>
            </svg>
            <p>Khám Phá</p>
        </div>
    </div>
    <div class="jss1_line">
    </div>
    <div class="jss1_box">
        <p> Đăng nhập để khám phá những playlist riêng của chính bạn. </p>
        <button> Đăng nhập </button>
    </div>
</div>
</template>

<style>
.jss1 {
    width: 240px;
    height: auto;
    background-color: #411565;
}

.jss1_logo {
    padding: 15px 27px;
    display: flex;
}

.jss2 {
    width: calc(100% - 240px);
    background-color: #37075d;
}

.jss1_menu {
    padding: 15px 0;
}

.jss1_item1,
.jss1_item2 {
    display: flex;
    color: white;
    padding: 10px 27px;
}

.jss1_item1--icon,
.jss1_item2--icon {
    width: 25px;
    fill: white !important;
    height: fit-content;
}

.jss1_item1 p,
.jss1_item2 p {
    padding-left: 10px;
    margin-bottom: 0;
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    font-weight: 500;
}

.jss1_item1 {
    padding-left: 29px;
}

.jss1_item2 {
    border-left: 2px solid rgb(238, 101, 101);
    background-color: #ffffff1c;
}

.jss1_line {
    border-top: 1px solid #80808059;
    margin: 0 22px;
}

.jss1_box {
    background-color: #ed2b91;
    border-radius: 20px;
    padding: 40px 1.5rem;
    margin: 1rem;
}

.jss1_box p {
    color: white;
    text-align: center;
}

.jss1_box button {
    display: flex;
    border: 1px solid white;
    background-color: #ed2b91;
    color: white;
    padding: 5px 30px;
    border-radius: 20px;
    margin: 0 auto;
}
.jss1_box button:focus{
    outline: none;
}
</style>
