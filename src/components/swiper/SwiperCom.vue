<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in imgs" :key="item.id">
                <img :src="item.pic" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    import 'swiper/css/swiper.min.css'
    import Swiper from 'swiper'

    import {getBanner} from "@/api";

    export default {
        name: "SwiperCom",
        data(){
            return{
          // imgs:[//这个用法不标准 网页上的图片不应该是前端本地的图
          //     {pic:require('../../assets/img/swiper1.jpg'),id:0},
          //     {pic:require('../../assets/img/swiper2.jpg'),id:1},
          //     {pic:require('../../assets/img/swiper3.png'),id:2},
          //           ]
                imgs:[]
            }
        },
        created() {
            //创建之后向后台要数据，imgs【】为空数组
            this.getBannerImgs()

        },
        mounted() {
            const mySwiper=new  Swiper('.swiper-container',{//括号里，可以id class 只要能找到对应的cort
                loop:true,
                autoplay:true
            })
        },
        methods:{
             async getBannerImgs(){
                const res=await getBanner(1) //后台要安卓端的图片数据
                 this.imgs=res.data.banners //将后台要到的数据，赋值给本对象的data
            }
        }
    }
</script>

<style scoped>
.swiper-slide>img{
    width: 100%;}
</style>