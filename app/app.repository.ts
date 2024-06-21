import { Injectable } from "velar";

@Injectable()
export class UserRepository {
	async findOne(id: string) {
		return { userId: id };
	}
}
