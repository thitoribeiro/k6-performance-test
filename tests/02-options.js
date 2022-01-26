import http from 'k6/http'

export let options = {
    //Declaring configuration
    vus: 8,
    duration: '3s'
    }

export default function () {
    http.get('https://www.google.com');
}

