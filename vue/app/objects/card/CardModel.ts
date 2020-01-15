import { ICardModel } from './'
import { IDataCard } from 'lib/api/scryfall'

class CardModel implements ICardModel {
    public name: string;
    public type: string;
    public text: string;
    constructor(private model: IDataCard)
    {
        this.name = model.name;
        this.type = model.printed_type_line || model.type_line;
        this.text = model.printed_text || model.oracle_text;
    }
}

export {
    CardModel
}

export default CardModel