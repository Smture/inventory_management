export class CreateUserDto {
    readonly name: string;
    readonly email: string;
    readonly password: string; // This is for demonstration; consider hashed passwords in production.
}
