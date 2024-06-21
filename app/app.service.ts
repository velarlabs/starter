import { Injectable } from "velar";
import { LoginDto } from "./app.dto";
import { UserRepository } from "./app.repository";

@Injectable()
class AppService {
	constructor(private readonly userRepository: UserRepository) {}
	async login({ username }: LoginDto) {
		return `login successful for ${username}`;
	}

	async findUser(id: string) {
		return this.userRepository.findOne(id);
	}
}

export default AppService;
