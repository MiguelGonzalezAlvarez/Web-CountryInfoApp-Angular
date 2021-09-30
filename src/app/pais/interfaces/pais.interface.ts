// Generated by https://quicktype.io

export interface Pais {
    name:         Name;
    tld?:         string[];
    cca2:         string;
    ccn3?:        string;
    cca3:         string;
    cioc?:        string;
    independent?: boolean;
    status:       Status;
    unMember:     boolean;
    currencies?:  Currencies;
    idd:          Idd;
    capital?:     string[];
    altSpellings: string[];
    region:       Region;
    subregion?:   string;
    languages?:   { [key: string]: string };
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    area:         number;
    demonyms?:    Demonyms;
    flag?:        string;
    maps:         Maps;
    population:   number;
    flags:        Flags;
    borders?:     string[];
}

export interface Currencies {
    TOP?: PuneHedgehog;
    DKK?: PuneHedgehog;
    EUR?: PuneHedgehog;
    XCD?: PuneHedgehog;
    LRD?: PuneHedgehog;
    TND?: PuneHedgehog;
    ANG?: PuneHedgehog;
    USD?: PuneHedgehog;
    FOK?: PuneHedgehog;
    KPW?: PuneHedgehog;
    COP?: PuneHedgehog;
    EGP?: PuneHedgehog;
    ETB?: PuneHedgehog;
    MNT?: PuneHedgehog;
    MUR?: PuneHedgehog;
    PKR?: PuneHedgehog;
    SLL?: PuneHedgehog;
    GBP?: PuneHedgehog;
    JEP?: PuneHedgehog;
    FKP?: PuneHedgehog;
    XPF?: PuneHedgehog;
    BSD?: PuneHedgehog;
    HKD?: PuneHedgehog;
    TZS?: PuneHedgehog;
    BBD?: PuneHedgehog;
    XOF?: PuneHedgehog;
    AMD?: PuneHedgehog;
    MXN?: PuneHedgehog;
    KRW?: PuneHedgehog;
    FJD?: PuneHedgehog;
    TWD?: PuneHedgehog;
    ALL?: PuneHedgehog;
    AUD?: PuneHedgehog;
    TVD?: PuneHedgehog;
    AOA?: PuneHedgehog;
    UZS?: PuneHedgehog;
    MMK?: PuneHedgehog;
    MWK?: PuneHedgehog;
    PEN?: PuneHedgehog;
    CUC?: PuneHedgehog;
    CUP?: PuneHedgehog;
    KID?: PuneHedgehog;
    HNL?: PuneHedgehog;
    XAF?: PuneHedgehog;
    NGN?: PuneHedgehog;
    PYG?: PuneHedgehog;
    TJS?: PuneHedgehog;
    SGD?: PuneHedgehog;
    BRL?: PuneHedgehog;
    IQD?: PuneHedgehog;
    NPR?: PuneHedgehog;
    SCR?: PuneHedgehog;
    CHF?: PuneHedgehog;
    BAM?: BAM;
    MKD?: PuneHedgehog;
    NOK?: PuneHedgehog;
    MZN?: PuneHedgehog;
    ZMW?: PuneHedgehog;
    NZD?: PuneHedgehog;
    BWP?: PuneHedgehog;
    CNY?: PuneHedgehog;
    INR?: PuneHedgehog;
    JPY?: PuneHedgehog;
    ZAR?: PuneHedgehog;
    ZWB?: PuneHedgehog;
    LSL?: PuneHedgehog;
    PHP?: PuneHedgehog;
    BZD?: PuneHedgehog;
    SSP?: PuneHedgehog;
    LBP?: PuneHedgehog;
    SDG?: BAM;
    ILS?: PuneHedgehog;
    JOD?: PuneHedgehog;
    CRC?: PuneHedgehog;
    GMD?: PuneHedgehog;
    IRR?: PuneHedgehog;
    SHP?: PuneHedgehog;
    UYU?: PuneHedgehog;
    GGP?: PuneHedgehog;
    KMF?: PuneHedgehog;
    KZT?: PuneHedgehog;
    LKR?: PuneHedgehog;
    RSD?: PuneHedgehog;
    THB?: PuneHedgehog;
    KGS?: PuneHedgehog;
    TTD?: PuneHedgehog;
    MRU?: PuneHedgehog;
    OMR?: PuneHedgehog;
    SAR?: PuneHedgehog;
    NIO?: PuneHedgehog;
    MDL?: PuneHedgehog;
    YER?: PuneHedgehog;
    BDT?: PuneHedgehog;
    DZD?: PuneHedgehog;
    MAD?: PuneHedgehog;
    GHS?: PuneHedgehog;
    CAD?: PuneHedgehog;
    JMD?: PuneHedgehog;
    KES?: PuneHedgehog;
    SBD?: PuneHedgehog;
    TMT?: PuneHedgehog;
    HTG?: PuneHedgehog;
    IMP?: PuneHedgehog;
    CDF?: PuneHedgehog;
    SEK?: PuneHedgehog;
    TRY?: PuneHedgehog;
    MOP?: PuneHedgehog;
    SRD?: PuneHedgehog;
    DJF?: PuneHedgehog;
    WST?: PuneHedgehog;
    CLP?: PuneHedgehog;
    AZN?: PuneHedgehog;
    LAK?: PuneHedgehog;
    KWD?: PuneHedgehog;
    RON?: PuneHedgehog;
    CVE?: PuneHedgehog;
    KHR?: PuneHedgehog;
    GTQ?: PuneHedgehog;
    BTN?: PuneHedgehog;
    VES?: PuneHedgehog;
    BHD?: PuneHedgehog;
    ISK?: PuneHedgehog;
    VND?: PuneHedgehog;
    BYN?: PuneHedgehog;
    CKD?: PuneHedgehog;
    BGN?: PuneHedgehog;
    PLN?: PuneHedgehog;
    BIF?: PuneHedgehog;
    LYD?: PuneHedgehog;
    DOP?: PuneHedgehog;
    QAR?: PuneHedgehog;
    BOB?: PuneHedgehog;
    PGK?: PuneHedgehog;
    AFN?: PuneHedgehog;
    STN?: PuneHedgehog;
    ERN?: PuneHedgehog;
    GYD?: PuneHedgehog;
    SOS?: PuneHedgehog;
    RUB?: PuneHedgehog;
    IDR?: PuneHedgehog;
    AWG?: PuneHedgehog;
    MGA?: PuneHedgehog;
    HRK?: PuneHedgehog;
    GNF?: PuneHedgehog;
    VUV?: PuneHedgehog;
    BMD?: PuneHedgehog;
    MYR?: PuneHedgehog;
    HUF?: PuneHedgehog;
    GEL?: PuneHedgehog;
    MVR?: PuneHedgehog;
    SYP?: PuneHedgehog;
    KYD?: PuneHedgehog;
    AED?: PuneHedgehog;
    CZK?: PuneHedgehog;
    GIP?: PuneHedgehog;
    ARS?: PuneHedgehog;
    SZL?: PuneHedgehog;
    PAB?: PuneHedgehog;
    RWF?: PuneHedgehog;
    UGX?: PuneHedgehog;
    UAH?: PuneHedgehog;
    BND?: PuneHedgehog;
    NAD?: PuneHedgehog;
}

export interface PuneHedgehog {
    name:   string;
    symbol: string;
}

export interface BAM {
    name: string;
}

export interface Demonyms {
    eng:  Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Flags {
    svg: string;
    png: string;
}

export interface Idd {
    root?:     string;
    suffixes?: string[];
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:      string;
    official:    string;
    nativeName?: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common:   string;
}

export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
    UserAssigned = "user-assigned",
}
