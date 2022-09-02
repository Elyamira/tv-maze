export interface Schedule {
    id: number;
    url: string;
    name: string;
    season: number;
    number: number;
    type: string;
    airdate: string;
    airtime: string;
    airstamp: string;
    runtime: number;
    rating: Rating;
    image?: string | null;
    summary?: string | null;
    show: Show;
    _links: Links;
  }
  export interface Rating {
    average?: number | null;
  }
  export interface Show {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres?: (string)[] | null;
    status: string;
    runtime: number;
    averageRuntime: number;
    premiered: string;
    ended?: null;
    officialSite: string;
    schedule: ShowScedule;
    rating: Rating;
    weight: number;
    network: Network;
    webChannel?: string | null;
    dvdCountry?: string | null;
    externals: Externals;
    image: Image;
    summary: string;
    updated: number;
    _links: Links;
    starring?: string[] | [];
    _embedded?: Embedded;
    
  }
  export interface ShowScedule {
    time: string;
    days?: (string)[] | null;
  }
  export interface Network {
    id: number;
    name: string;
    country: Country;
    officialSite?: string | null;
  }
  export interface Country {
    name: string;
    code: string;
    timezone: string;
  }
  export interface Externals {
    tvrage?: null;
    thetvdb: number;
    imdb?: null;
  }
  export interface Image {
    medium: string;
    original: string;
  }
  export interface Links {
    self: SelfOrPreviousepisodeOrNextepisode;
    previousepisode?: SelfOrPreviousepisodeOrNextepisode;
    nextepisode?: SelfOrPreviousepisodeOrNextepisode;
  }
  export interface SelfOrPreviousepisodeOrNextepisode {
    href: string;
  }

  export interface Embedded {
    cast: Cast [];
  }
  export interface Cast {
    person: Person;
    character: Character;
    self: boolean;
    voice: boolean;
  }
  export interface Person {
    id: number;
    url: string;
    name: string;
    country: Country;
    birthday: string;
    deathday?: null;
    gender: string;
    image: Image;
    updated: number;
    _links: Links;
  }
  export interface Country {
    name: string;
    code: string;
    timezone: string;
  }
  export interface Image {
    medium: string;
    original: string;
  }
  export interface Links {
    self: Self;
  }
  export interface Self {
    href: string;
  }
  export interface Character {
    id: number;
    url: string;
    name: string;
    image: Image;
    _links: Links;
  }
  