# hkoscraper
### Project to give programatic access to archived HKO weather warning data

Written by [@jamiewildehk](https://github.com/jamiewildehk)

Currently this is only scraping the thunderstorm warnings, though it could easily be extended to hot/cold weather warnings and typhoon warnings.

## API

Only one end point now:
/hko/ts/[date:YYYYMMDD]

## Implementation

The scraping is performed by Yahoo Pipes, using the YQL defined in the [YQL Query I wrote](http://query.yahooapis.com/v1/public/yql/jamiewildehk/hko_warn_ts)

Implemented as an express application for heroku or own hosting. Similar code could be used client side.

```JSON
{
  "warning": {
    "warnings": 1,
    "totalDuration": 60,
    "details": [
      {
        "from": "2014-07-14T21:00:00.000Z",
        "to": "2014-07-14T22:00:00.000Z"
      }
    ]
  }
}
```
