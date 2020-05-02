import axios from 'axios';

const key = "AIzaSyBQulyqo_kVgtXKqs8awAwnQ82h-GkA6cI"

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet, contentDetails, status',
        key
    }
})