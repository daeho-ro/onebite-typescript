let toUnknown: unknown;
let toAny: any;
let toNever: never;
let toVoid: void;

let fromUnknown: unknown;
let fromAny: any;
let fromNever: never;
let fromVoid: void;

toUnknown = fromUnknown;
toAny = fromUnknown;
toNever = fromUnknown;
toVoid = fromUnknown;

toUnknown = fromNever;
toAny = fromNever;
toNever = fromNever;
toVoid = fromNever;

toUnknown = fromVoid;
toAny = fromVoid;
toNever = fromVoid;
toVoid = fromVoid;

toUnknown = fromAny;
toAny = fromAny;
toNever = fromAny;
toVoid = fromAny;

toUnknown.toUpperCase();
toAny.toUpperCase();
