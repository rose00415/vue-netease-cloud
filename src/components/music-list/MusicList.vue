<template>
    <h2>
        发现好歌单
        <button>查看更多</button>
    </h2>
    <div class="swiper-container swiper-music-list">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in musiclist">
                <img :src="item.picUrl" alt="">
                <span>{{item.playCount}}</span>
                <p>{{item.name}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import 'swiper/css/swiper.min.css'
    import Swiper from 'swiper'
    import {getMusicList} from "@/api";

    export default {
        name: "MusicList",
        data(){
          return{
              musiclist:[]
          }
        },
        mounted() {
            const mySwiper=new Swiper('.swiper-music-list',{
                slidesPerView:3,
                spaceBetween:20,
            })
            this.getMusicListData()
        },
        methods:{
            async getMusicListData(){
                const res=await  getMusicList() //使用封装好的api方法 去后台获取列表歌单
                this.musiclist=res.data.result
                console.log(this.musiclist)
            }
        }
    }
</script>

<style scoped lang="less">
    button{
        float: right;
        width: 80px;
        height: 30px;
        background: #ffffff;
        border-radius: 15px;
        border: 1px solid #ebebeb;
    }
    .swiper-slide{
        width: 30vw;
        /*height: 33vw;*/
        text-align: center;
    img{
        width: 80%;
    }
    span{
        position: absolute;top: 0;right: 10px;color: #ffffff;
    }
    }

</style>