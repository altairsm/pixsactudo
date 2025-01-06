export class UserService {
    constructor(private userModel: any) {}

    async createUser(userData: { name: string; email: string; cpf: string; accessPassword: string }) {
        // Logic to create a new user registration
        const newUser = await this.userModel.create(userData);
        return newUser;
    }

    async getUsers() {
        // Logic to retrieve all user registrations
        const users = await this.userModel.findAll();
        return users;
    }

    async getUserById(userId: string) {
        // Logic to retrieve a user by ID
        const user = await this.userModel.findByPk(userId);
        return user;
    }

    async updateUser(userId: string, updatedData: { name?: string; email?: string; cpf?: string; accessPassword?: string }) {
        // Logic to update a user registration
        await this.userModel.update(updatedData, { where: { id: userId } });
        return this.getUserById(userId);
    }

    async deleteUser(userId: string) {
        // Logic to delete a user registration
        await this.userModel.destroy({ where: { id: userId } });
        return { message: 'User deleted successfully' };
    }
}