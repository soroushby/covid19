export interface CovidData {
  coordinates: {
    latitude: number; // Float
    longitude: number; // Float
  };
  name: any; // String, human readable
  code: any; // String, ISO 3166-1 alpha-2
  population: number; // Integer or null
  updated_at: Date; // Date
  today: {
    deaths: number; // Int or null
    confirmed: number; // Int or null
  };
  latest_data: {
    death: number; // Int or null
    confirmed: number; // Int or null
    recovered: number; // Int or null
    critical: number; // Int or null
    calculated: {
      death_rate: number; // Float (%) or null
      recovery_rate: number; // Float (%) or null
      recovered_vs_death_ratio: number; // Float (%) or null
      cases_per_million_population: number; // Float (%) or null
    };
  };
}
