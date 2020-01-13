import axios, {AxiosResponse} from 'axios'
import {ScryfallListModel} from "./ScryfallListModel";
import { SearchQueryFace } from './'

class ScryfallSearch {
    protected url({code, number, language = 'en'}: SearchQueryFace)
    {
        return `https://api.scryfall.com/cards/search?q=set:${code}+number:${number}+lang:${language}`;
    }

    search({code, number, language= 'en'}: SearchQueryFace): Promise<AxiosResponse<ScryfallListModel>>
    {
        return axios.get(this.url({code, number, language})) as Promise<AxiosResponse<ScryfallListModel>>
    }
}

export {
    ScryfallSearch,
}
export default ScryfallSearch