import axios, {AxiosResponse} from 'axios'
import {ScryfallListModel} from "./ScryfallListModel";
import { SearchQueryFace } from './'

class ScryfallSearch {
    oracle(code: string, number: string): Promise<AxiosResponse<ScryfallListModel>>
    {
        return axios.get(`https://api.scryfall.com/cards/search?q=set:${code}+number:${number}`) as Promise<AxiosResponse<ScryfallListModel>>
    }

    translate({code, number, language= 'en'}: SearchQueryFace): Promise<AxiosResponse<ScryfallListModel>>
    {
        return axios.get(`https://api.scryfall.com/cards/search?q=set:${code}+number:${number}+lang:${language}`) as Promise<AxiosResponse<ScryfallListModel>>
    }
}

export {
    ScryfallSearch,
}
export default ScryfallSearch