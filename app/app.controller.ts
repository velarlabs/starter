import { Body, Controller, Get, Param, Post } from "velar";
import AppService from "./app.service";
import { LoginDto } from "./app.dto";

@Controller("api")
class AppController {
	constructor(private readonly appService: AppService) {}

	@Get("/ping")
	ping() {
		return this.appService.sayPong();
	}

	@Post("/login")
	login(@Body() loginData: LoginDto) {
		return this.appService.login(loginData);
	}

	@Get("/profile/:id")
	async profile(@Param("id") id: string) {
		const user = await this.appService.findUser(id);
		return `user: ${user.userId}`;
	}
}

export default AppController;
