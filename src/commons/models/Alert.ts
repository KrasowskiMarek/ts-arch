export enum AlertType {
    error = "error",
    success = "success",
}

export class Alert {
    constructor(
        public error?: any,
        public type?: AlertType,
        public time?: number,
        public injected?: string,
        public message?: string,
        public messageCode?: string,
        public messageId?: string,
    ) {}
}
