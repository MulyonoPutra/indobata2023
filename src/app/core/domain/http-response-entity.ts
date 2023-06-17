export interface HttpResponseEntity<T> {
	message: string;
	data: T;
	page?: number;
	totalPages?: number;
	totalItems?: number;
}
