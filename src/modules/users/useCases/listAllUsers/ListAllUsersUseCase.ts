import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute(data: IRequest): User[] {
    const user = this.usersRepository.findById(data.user_id);

    if (!user) throw new Error("User does not exist!");
    if (!user.admin) throw new Error("You must be an admin user!");

    const result = this.usersRepository.list();

    return result;
  }
}

export { ListAllUsersUseCase };
