import { ICardModel } from './'
import { IDataCard } from 'lib/api/scryfall'
import { WebString } from 'lib/advanced/WebString'

class CardModel implements ICardModel {
    public name: string;
    public type: string;
    public text: string;
    public flower: string;
    constructor(private model: IDataCard)
    {
        this.name = model.printed_name || model.name;
        this.type = model.printed_type_line || model.type_line;
        this.text = new WebString(model.printed_text || model.oracle_text).getSlashNToBr;
        this.flower = new WebString(model.flavor_text).getSlashNToBr;
    }
}

export {
    CardModel
}

export default CardModel