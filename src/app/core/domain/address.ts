export interface Address {
	street: string;
	provinces: string;
	regencies: string;
	districts: string;
	villages: string;
}

export interface Province {
  id: string;
  name: string;
}

export interface Regencies {
  id: string;
  name: string;
  province_id: string;
}

export interface Districts {
  id: string;
  name: string;
  regency_id: string;
}

export interface Villages {
  id: string;
  name: string;
  district_id: string;
}

export interface Region {
	id: string;
	name: string;
}
