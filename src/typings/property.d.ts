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
    fromState?: State,
    state: State;
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

declare type State =
    "null" |
    "Showing: to be seen" |
    "Showing: requested" |
    "Seen" |
    "Discontinue" |
    "Investigate" |
    "Contract: action needed" |
    "Contract: awaiting response" |
    "Sale complete" |
    "Rental unit";

declare interface Property {
    id: string;
    address: Address;
    facts: PropertyFacts;
    listing: Listing;
    notes: Note[];
    priceAdjustments: PriceAdjustment;
    state: State;
}
