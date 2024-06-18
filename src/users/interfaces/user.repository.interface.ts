import { User } from '../schemas/user.schema';

export interface UserRepositoryInterface {
  /**
   * Registers a new user.
   * @param userDto - Data transfer object containing user details.
   * @returns A promise that resolves to the created user.
   */
  register(userDto: RegisterUserDTO): Promise<User>;

  /**
   * Retrieves all users.
   * @returns A promise that resolves to an array of users.
   */
  findAll(): Promise<User[]>;

  /**
   * Finds a user by their ID.
   * @param id - The ID of the user to find.
   * @returns A promise that resolves to the user or null if not found.
   */
  findById(id: string): Promise<User | null>;

  /**
   * Finds a user by their email.
   * @param email - The email of the user to find.
   * @returns A promise that resolves to the user or null if not found.
   */
  findByEmail(email: string): Promise<User | null>;

  /**
   * Finds a user by their username.
   * @param username - The username of the user to find.
   * @returns A promise that resolves to the user or null if not found.
   */
  findByUserName(username: string): Promise<User | null>;

  /**
   * Finds a user by their mobile number.
   * @param mobile - The mobile number of the user to find.
   * @returns A promise that resolves to the user or null if not found.
   */
  findByMobile(mobile: number): Promise<User | null>;
}
