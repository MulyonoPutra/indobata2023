export interface HttpResponseEntity<T> {
	message: string;
	data: T;
	paging: {
		total: number;
		totalPages: number;
		current: number;
	};
}

export interface ResponseMessageEntity {
	message: string;
}
