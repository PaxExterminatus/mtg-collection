import {IDataCard} from '..'

interface IDataCardTranslated extends IDataCard {
    printed_name: string
    printed_type_line: string
    printed_text: string
}

export {
    IDataCardTranslated,
}