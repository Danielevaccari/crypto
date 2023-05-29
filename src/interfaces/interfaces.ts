export interface ICryptoCoin {
  readonly id: string,
  readonly name: string,
  readonly image: {
    small: string,
    large: string,
    thumb: string,
  },
  readonly market_data: {
    current_price: {
      eur: number,
    }
  },
  readonly description: {
    // Add languages if needed (look at the fetched data object)
    en: string
  },
}

export interface IMarketChartData {
  readonly prices: [[
    date: number,
    price: number,
  ]],
  readonly market_caps: [[
    date: number,
    cap: number,
  ]],
  readonly total_volumes: [[
    date: number,
    volume: number,
  ]],
}