import {
    IQueryCardOracle,
    EnumLanguages,
} from '..';

interface IQueryCardTranslated extends IQueryCardOracle {
    language: EnumLanguages
}

export {
    IQueryCardTranslated
}