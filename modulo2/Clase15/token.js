// @ts-nocheck
//Math.random()
console.log(parseInt(Math.random() * 1_000_000))
console.log(parseInt(Math.random() * 1_000_000))
console.log(parseInt(Math.random() * 1_000_000))
console.log(parseInt(Math.random() * 1_000_000))
console.log(parseInt(Math.random() * 1_000_000))
console.log(parseInt(Math.random() * 1_000_000))

// crypto.randomUUID() funciona con node apartir v16
console.log(crypto.randomUUID());
console.log(crypto.randomUUID());
console.log(crypto.randomUUID());
const token = crypto.randomUUID()
console.log("saco los - ==>",token.replaceAll("-", ""));
