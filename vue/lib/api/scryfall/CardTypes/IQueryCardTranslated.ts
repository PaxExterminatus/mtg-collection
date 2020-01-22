import {
    IQueryCardOracle,
    LanguagesType,
} from '..';

interface IQueryCardTranslated extends IQueryCardOracle {
    language: LanguagesType
}

export {
    IQueryCardTranslated
}