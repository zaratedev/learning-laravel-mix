import axios from 'axios';

function getPosts() {

    return axios.get('/posts');
}


async function fire() {
    let { data } = await getPosts();
    console.log(data[0]);
    /*getPosts().then( response => {
        console.log(response.data[0]);
    });*/
}

fire();