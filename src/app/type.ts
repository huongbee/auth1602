export interface User {
    _id: string;
    email: string;
    name: string;
    avatar: string;
    posts?: string[];
    friends?: string[];
    receiveRequests?: string[];
    sendRequests?: string[];
}
export interface Loading {
    loading: boolean;
}
