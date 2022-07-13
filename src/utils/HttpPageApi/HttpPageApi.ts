import axios, {AxiosRequestConfig, AxiosResponse, AxiosError} from "axios";

interface BaseError {
    error: string;
}

export type BaseAxiosError = AxiosError<BaseError>;

const ENDPOINT_PREFIX = "/api";

export default class HttpPageApi {
    constructor(readonly pagePrefix: string) {}
    private basicRequestConfig(endpoint: string): AxiosRequestConfig {
        return {
            "url": ENDPOINT_PREFIX + "/" + this.pagePrefix + "/" + endpoint,
        };
    }

    private async sendRequest<SuccessT>(config: AxiosRequestConfig) {
        const response = await axios(config);
        const data = response.data;
        return data;
    }

    protected sendGetRequest<SuccessT>(endpoint: string, params: any) {
        const config = this.basicRequestConfig(endpoint);
        config.method = "get";
        config.params = params;
        return this.sendRequest<SuccessT>(config);
    }

    protected sendPostRequest<SuccessT>(endpoint: string, postParams: any, getParams: any) {
        const config = this.basicRequestConfig(endpoint);
        config.method = "post";
        config.data = postParams;
        config.params = getParams;
        return this.sendRequest<SuccessT>(config);
    }

    protected sendPutRequest<SuccessT>(endpoint: string, putParams: any, getParams: any) {
        const config = this.basicRequestConfig(endpoint);
        config.method = "put";
        config.data = putParams;
        config.params = getParams;
        return this.sendRequest<SuccessT>(config);
    }

    protected sendDeleteRequest<SuccessT>(endpoint: string, putParams: any, getParams: any) {
        const config = this.basicRequestConfig(endpoint);
        config.method = "delete";
        config.data = putParams;
        config.params = getParams;
        return this.sendRequest<SuccessT>(config);
    }

    protected sendPatchRequest<SuccessT>(endpoint: string, putParams: any, getParams: any) {
        const config = this.basicRequestConfig(endpoint);
        config.method = "patch";
        config.data = putParams;
        config.params = getParams;
        return this.sendRequest<SuccessT>(config);
    }

    protected createGetRequest<ResponseType>(endpoint: string) {
        return (params: any = {}) => {
            return this.sendGetRequest<ResponseType>(endpoint, params);
        };
    }

    protected createPostRequest<ResponseType>(endpoint: string) {
        return (postParams: any, getParams: any = {}) => {
            return this.sendPostRequest<ResponseType>(endpoint, postParams, getParams);
        };
    }

    protected createPutRequest<ResponseType>(endpoint: string) {
        return (postParams: any, getParams: any = {}) => {
            return this.sendPutRequest<ResponseType>(endpoint, postParams, getParams);
        };
    }

    protected createPatchRequest<ResponseType>(endpoint: string) {
        return (postParams: any, getParams: any = {}) => {
            return this.sendPatchRequest<ResponseType>(endpoint, postParams, getParams);
        };
    }

    protected createDeleteRequest<ResponseType>(endpoint: string) {
        return (postParams: any, getParams: any = {}) => {
            return this.sendDeleteRequest<ResponseType>(endpoint, postParams, getParams);
        };
    }
}
