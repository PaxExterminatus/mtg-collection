import { ICardModel, ICardImages } from './'
import { IDataCard, EnumLanguages } from 'lib/api/scryfall'
import { webstr } from 'lib/advanced/strings'

class CardModel implements ICardModel {
    name: string;
    type: string;
    text: string;
    flower: string;
    images: ICardImages;
    lang: EnumLanguages;
    constructor(private model: IDataCard)
    {
        this.name = model.printed_name || model.name;
        this.type = model.printed_type_line || model.type_line;
        this.text = webstr(model.printed_text || model.oracle_text).getSlashNToBr;
        this.flower = webstr(model.flavor_text).getSlashNToBr;
        this.images = {
            hq: model.highres_image,
            small: model.image_uris.small,
            normal: model.image_uris.normal,
            large: model.image_uris.large,
            artCrop: model.image_uris.art_crop,
            borderCrop: model.image_uris.border_crop,
            png: model.image_uris.png,
        };
        this.lang = model.lang
    }
}

export {
    CardModel
}

export default CardModel