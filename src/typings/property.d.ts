declare interface Address {
    street: string;
    street2?: string;
    city: string;
    state: string;
    zip: string;
}

declare type PriceHistoryEvent =
    "Sold" |
    "Listed for sale" |
    "Listing removed" |
    "Price change"

declare interface PriceHistory {
    date: string;
    event: PriceHistoryEvent;
    price: number;
}

declare interface TaxHistory {
    taxAssessment: number;
    taxes: number;
    year: number;
}

declare interface Listing {
    priceHistory: PriceHistory[];
    taxHistory: TaxHistory[];
}

declare interface Note {
    author: string;
    body: string;
    date: string;
    fromState?: number,
    state: number;
}

declare interface PriceAdjustment {
    amount: number;
    author: string;
    date: string;
    body: string;
    title: string;
}

declare interface PropertyFacts {
    bathrooms: number;
    bedrooms: number;
    floorSqft: number;
    lotSqft: number;
    type: string;
    yeaBuilt: number;
}

declare interface Property {
    id: string;
    address: Address;
    facts: PropertyFacts;
    listing: Listing;
    notes: Note[];
    priceAdjustments: PriceAdjustment;
    state: number;
}
