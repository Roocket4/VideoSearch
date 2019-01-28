import axios from 'axios';

const KEY = 'AIzaSyB-6XqZTpLndOvAfP8LlGFyrBaWV1JH0z8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }


})
