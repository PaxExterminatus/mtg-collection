import axios, {AxiosResponse} from 'axios'
import {
    IQueryCardOracle,
    IQueryCardTranslated,
    IResponseList,
    IDataCard,
    IDataCardTranslated, LanguagesType,
} from './index'

type ListOfOracle = Promise<AxiosResponse<IResponseList<IDataCard>>>;
type ListOfTranslated = Promise<AxiosResponse<IResponseList<IDataCardTranslated>>>;

class ScryfallSearchCard {
    oracle({code, number}: IQueryCardOracle): ListOfOracle
    {
        return axios.get(`https://api.scryfall.com/cards/search?q=set:${code}+number:${number}`) as ListOfOracle
    }

    translate({code, number, language= 'ru'}: IQueryCardTranslated): ListOfTranslated
    {
        return axios.get(`https://api.scryfall.com/cards/search?q=set:${code}+number:${number}+lang:${language}`) as ListOfTranslated
    }
}

export {
    ScryfallSearchCard,
}

export default ScryfallSearchCard