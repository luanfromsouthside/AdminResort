import { Room } from './room.model';
import { Staff } from './staff.model';
import { Customer } from './customer.model';
export interface Booking {
    ID: string,
    Customer: Customer,
    Staff?: Staff,
    Room: Room,
}