export interface INominatimParams {
    format?: 'html' | 'json' | 'xml' | 'jsonv2';
    json_callback?: string;
    accept_language?: string;
    'accept-language'?: string;
    q: string;
    street?: string;
    city?: string;
    state?: string;
    country?: string;
    viewbox?: string;
    postalcode?: string;
    countryCodesArray?: string[];
    countrycodes?: string;
    bounded?: 0 | 1;
    polygon?: 0 | 1;
    addressdetails?: 0 | 1;
    email?: string;
    exclude_place_ids?: string;
    limit?: number;
    dedupe?: 0 | 1;
}
export interface INominatimResult {
    place_id: string;
    osm_id: string;
    osm_type: string;
    boundingbox?: string[4];
    lat: string;
    lng: string;
    display_name: string;
    class: string;
    type: string;
    importance: number;
    icon: string;
    address: {
        house_number?: string;
        road?: string;
        neighbourhood?: string;
        suburb?: string;
        city_district?: string;
        city: string;
        county?: string;
        state: string;
        country: string;
        country_code: string;
        postcode?: string;
        peak?: string;
        bakery?: string;
        electronics?: string;
    };
}
export declare class NominatimJS {
    static search(params: INominatimParams): Promise<INominatimResult[]>;
}
