import {ScryfallCardModel} from './'
import {StringExtends} from "@/library/string-filter/StringWebExtends";

class ScryfallCard  {
    protected oracle: ScryfallCardModel;
    protected translate: ScryfallCardModel;
    constructor(oracle: ScryfallCardModel, translate: ScryfallCardModel) {
        this.oracle = oracle;
        this.translate = translate;
    }

    get images() {
        return {
            cover: this.oracle.image_uris.border_crop,
            translate: this.translate.image_uris.border_crop,
        }
    }

    get object() {
        return this.oracle.object
    }

    get name() {
        return {
            oracle: this.oracle.name,
            translate: this.translate.printed_name,
        }
    }

    get lang() {
        return this.oracle.lang
    }

    get releasedDate() {
        return this.oracle.released_at
    }

    get set() {
        return {
            code: this.oracle.set.toUpperCase(),
            name: this.oracle.set_name,
        }
    }

    get rarity() {
        return this.oracle.rarity
    }

    get type() {
        return {
            line: this.oracle.type_line,
            translate: this.translate.printed_type_line,
        }
    }

    get text() {
        return {
            oracle: StringExtends(this.oracle.oracle_text).getSlashNToBr,
            translate: StringExtends(this.translate.printed_text).getSlashNToBr,
        }
    }

    get flavor() {
        return {
            oracle: this.oracle.flavor_text,
            translate: this.translate.flavor_text,
        }
    }

    get prices() {
        return this.oracle.prices;
    }

    get url() {
        return {
            scryfall: {
                set: this.oracle.scryfall_set_uri,
                card: this.oracle.scryfall_uri,
            }
        }
    }
}

export {
    ScryfallCard,
}

export default ScryfallCard
