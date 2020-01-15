import {
    IQueryCardOracle,
    LanguageEnum,
} from '..';

interface IQueryCardTranslated extends IQueryCardOracle {
    language: LanguageEnum
}

export {
    IQueryCardTranslated
}