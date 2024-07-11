import { Process } from ".";

export interface CompanyAreaModel{
    name: string,
    description: string,
    isActive: boolean,
    processes: Array<Process>
}