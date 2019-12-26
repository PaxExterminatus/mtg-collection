import axios from 'axios'

function url(path: string) {
    return `http://localhost:9990/api/${path}/index.json`
}

function collection() {
    return {
        load: function () {
            return axios.get(url('collection'))
        }
    }
}

export {
    collection,
}
