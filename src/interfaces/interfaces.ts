export interface ICryptoCoin {
  readonly id: string,
  readonly name: string,
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