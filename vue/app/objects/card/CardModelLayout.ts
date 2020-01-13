import { ScryfallCardModel } from 'lib/api/scryfall'
import { StringExtends } from 'lib/string-filter/StringWebExtends';
import { CardFace } from './'

class CardModelLayout {

    constructor(private model: ScryfallCardModel) {}

    get oracle(): CardFace {
        return {
            name: this.model.name,
            type: this.model.type_line,
            text: StringExtends(this.model.oracle_text).getSlashNToBr,
        }
    }

    get printed(): CardFace {
        return {
            name: this.model.printed_name || '',
            type: this.model.printed_type_line || '',
            text: StringExtends(this.model.printed_text).getSlashNToBr,
        }
    }
}

export {
    CardModelLayout,
    CardFace,
}

export default CardModelLayout