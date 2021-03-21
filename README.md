# AS2 Network Chainlink External Adapter

[![nodejs](https://github.com/as2network/chainlink-adapter/actions/workflows/nodejs.yml/badge.svg)](https://github.com/as2network/chainlink-adapter/actions/workflows/nodejs.yml)

## Input Params

- `base`, `from`, or `coin`: The symbol of the currency to query
- `quote`, `to`, or `market`: The symbol of the currency to convert to
- `endpoint`: Optional endpoint param

## Output

```json
{
  "jobRunID": "278c97ffadb54a5bbb93cfec5f7b5503",
  "data": {
    "price": 77777.77,
    "result": 77777.77
  },
  "statusCode": 200
}
```

## Building

```bash
npm ci
npm run build
```

## License

Apache-2.0
