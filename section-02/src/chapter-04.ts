// type alias
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: 'hello',
  nickname: 'world',
  birth: '1990-01-01',
  bio: 'bio',
  location: 'location',
};

let user2: User = {
  id: 2,
  name: 'hello',
  nickname: 'world',
  birth: '1990-01-01',
  bio: 'bio',
  location: 'location',
};

// index signature
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk',
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 82,
};
