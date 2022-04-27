<template>
    <ListViewHeader/>
</template>

<script>
    import {getPlayListDetail} from "@/api";
    import ListViewHeader from "@/components/list-view/ListViewHeader";
    export default {
        name: "ListView",
        components:{
        ListViewHeader
        },
        data(){
            aaa:[]
        },
        created() {
            //通过id向后端要数据
            this.getPlayListMusic()
        },
        methods:{
            async getPlayListMusic(){
                //2 this.$route.query来接受 前组件传来的参数
                //3.根据参数id向后台查找对应歌单的歌曲等信息
                const res=await getPlayListDetail(this.$route.query.id)
                console.log(res.data)
                // 要到数据后更新data
            }
        }
    }
</script>

<style scoped>

</style>