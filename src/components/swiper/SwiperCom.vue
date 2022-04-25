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
    export default {
        name: "SwiperCom",
        data(){
            return{
          imgs:[//这个用法不标准 网页上的图片不应该是前端本地的图
              {pic:require('../../assets/img/swiper1.jpg'),id:0},
              {pic:require('../../assets/img/swiper2.jpg'),id:1},
              {pic:require('../../assets/img/swiper3.png'),id:2},
                    ]
            }
        },
        mounted() {
            var mySwiper=new  Swiper('.swiper-container',{
                loop:true,
                autoplay:true
            })
        }
    }
</script>

<style scoped>
.swiper-slide>img{
    width: 100%;}
</style>