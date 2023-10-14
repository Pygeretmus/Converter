# Converter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Header with exchange rates

The header displays the current exchange rate (USD, EUR) against the hryvnia (UAH). The current exchange rate came from monobank public API (https://api.monobank.ua/bank/currency)

## Convertator

Two currencys have their own input and select. Input is taken a number to indicate the number of units to convert. Select contains three currencies - UAH, USD, EUR.
Conversion occurs in both directions: when changing the value in the first currency, the value in the second is recalculating, and vice versa when changing the currency in selects.