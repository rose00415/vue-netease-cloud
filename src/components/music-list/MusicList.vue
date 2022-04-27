<template>
    <h2>
        发现好歌单
        <button>查看更多</button>
    </h2>
    <div class="swiper-container swiper-music-list">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in musiclist">
                <router-link :to="{path:'/list-view',query:{id:item.id}}">
                <img :src="item.picUrl" alt="">
                <span>{{item.playCount>100000000?(item.playCount/100000000).toFixed(2)+'亿':(item.playCount/10000).toFixed(1)+'万'}}</span>
                <p>{{item.name}}</p>
                </router-link>
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
        created() {
            this.getMusicListData()//调用methods里的异步方法
            // data里默认为空数据
            // creared时候，向后台要数据，更新data
            // 更新data之后，同新数据渲染页面（vue实例做的
            // 监测到数据被修改后，updata里

        },
        updated() {
            const mySwiper=new Swiper('.swiper-music-list',{
                slidesPerView:3,
                spaceBetween:20,
            })
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
        font-size: 12px;
        /*text-align: center;*/
    img{

        width: 100%;
    }
    span{
        position: absolute;top: 0;right: 10px;color: #ffffff;
    }
        p{
            margin: 0;
        }
    }

</style>