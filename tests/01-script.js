import http from 'k6/http'

/*
**Runing the tests with virtual users
**k6 run --vus 10 --duration 5s tests/01-script.js 
*/

export default function() {
    http.get('https://www.google.com');
}