build:
  npx tsc --resolveJsonModule --esModuleInterop convert.ts

convert: build
  node convert.js