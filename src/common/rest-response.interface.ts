interface RestResponse<T> {
    data?: T;
    message?: string;
    statusCode: number;
}
