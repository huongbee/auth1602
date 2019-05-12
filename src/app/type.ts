export interface User {
    _id: string;
    email: string;
    name: string;
    posts?: string[];
    friends?: string[];
    receiveRequests?: string[];
    sendRequests?: string[];
}
