export interface SaveEmployeeRequest {
    id: number;
    private: boolean;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    schedule: number;
    instagram: string;
    bio: string;
    services: number[];
}
