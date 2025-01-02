export enum FormResult {
    Success,
    Error
}

export interface iFormData {
    name: string;
    email: string;
    message: string;
}

export type EmailData = {
    from: string;
    to: string;
    subject: string;
    html: string;
}

export enum NavbarPage {
    Home,
    Contact,
    Blog,
    None
}