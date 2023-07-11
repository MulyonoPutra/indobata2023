import { Category } from './category';

export type ProductsArrayType = Product[];
export type ProductCategoriesType = Category[];

export interface Product {
	technicalSpecifications: TechnicalSpecifications;
	_id: string;
	name: string;
	description: string;
	ingredients: string[];
	features: string[];
	applications: string[];
	images: string[];
	category: Category;
	stock: number;
	createdAt: string;
	updatedAt: string;
}

export interface TechnicalSpecifications {
	compressiveStrength: string;
	settingTime: string;
	waterCementRatio: string;
	density: string;
	maximumAggregateSize: string;
}
