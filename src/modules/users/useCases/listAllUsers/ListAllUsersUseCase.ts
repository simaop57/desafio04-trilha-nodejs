import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id)

    if(!user || user.admin === false) {
      throw new Error("User not found, or User is not Admin.");
    }

    const listAllUsers = this.usersRepository.list()

    return listAllUsers
  }
}

export { ListAllUsersUseCase };
