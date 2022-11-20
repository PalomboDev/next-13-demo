// Layout Types
export enum FooterType {
    SERVER_SIDE,
    CLIENT_SIDE
}

// Error Type
export type ErrorResponse = {
    error: string;
    code: number;
}

// Object Types
export type Album = {
    userId: null;
    id: number;
    title: string;
};

export type Comment = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
};

export type Photo = {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
};

export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

export type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};

export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    },
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
};