import {
    ScryfallObjectTypes,
    SupportedLanguages,
    ScryfallColorsTypes,
    ScryfallLegacyTypes,
    ScryfallGamesTypes,
    ScryfallRarityTypes,
    ScryfallBorderTypes,
} from './'

interface ScryfallCardModel {
    object: ScryfallObjectTypes
    id: string
    oracle_id: string
    multiverse_ids: number[]
    mtgo_id?: number
    mtgo_foil_id?: number
    arena_id?: number
    tcgplayer_id?: number
    name: string
    printed_name?: string
    lang: SupportedLanguages
    released_at: string
    uri: string
    scryfall_uri: string
    layout: string
    highres_image: boolean
    image_uris: {
        small: string
        normal: string
        large: string
        png: string
        art_crop: string
        border_crop: string
    }
    mana_cost: string
    cmc: number
    type_line: string
    printed_type_line?: string
    oracle_text: string
    printed_text: string
    power: string
    toughness: string
    colors: ScryfallColorsTypes[]
    color_identity: ScryfallColorsTypes[]
    legalities: {
        standard: ScryfallLegacyTypes
        future: ScryfallLegacyTypes
        historic: ScryfallLegacyTypes
        pioneer: ScryfallLegacyTypes
        modern: ScryfallLegacyTypes
        legacy: ScryfallLegacyTypes
        pauper: ScryfallLegacyTypes
        vintage: ScryfallLegacyTypes
        penny: ScryfallLegacyTypes
        commander: ScryfallLegacyTypes
        brawl: ScryfallLegacyTypes
        duel: ScryfallLegacyTypes
        oldschool: ScryfallLegacyTypes
    }
    games: ScryfallGamesTypes[]
    reserved: boolean
    foil: boolean
    nonfoil: boolean
    oversized: boolean
    promo: boolean
    reprint: boolean
    variation: boolean
    set: string
    set_name: string
    set_type: string
    set_uri: string
    set_search_uri: string
    scryfall_set_uri: string
    rulings_uri: string
    prints_search_uri: string
    collector_number: string
    digital: boolean
    rarity: ScryfallRarityTypes
    flavor_text: string
    card_back_id: string
    artist: string
    artist_ids: string[]
    illustration_id: string
    border_color: ScryfallBorderTypes
    frame: string
    full_art: boolean
    textless: boolean
    booster: boolean
    story_spotlight: boolean
    edhrec_rank: number
    prices: {
        usd: string
        usd_foil: string
        eur: string
        tix: string
    }
    related_uris: {
        gatherer: string
        tcgplayer_decks: string
        edhrec: string
        mtgtop8: string
    }
    purchase_uris: {
        tcgplayer: string
        cardmarket: string
        cardhoarder: string
    }
}

export {
    ScryfallCardModel,
}
