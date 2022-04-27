import axios from "axios";


const baseUrl='http://localhost:3000'


export  function getBanner(type=0) {
    return axios.get(`${baseUrl}/banner?type=${type}`)
}
//获取歌单列表
export function  getMusicList(limit=10) {
    return axios.get(`${baseUrl}/personalized?=limit=${limit}`)
}
//获取歌单对应歌曲
export function  getPlayListDetail(id) {
    return axios.get(`${baseUrl}/playlist/detail?id=${id}`)
}