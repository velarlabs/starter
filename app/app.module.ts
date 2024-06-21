import { Module } from "velar";
import AppController from "./app.controller";
import AppService from "./app.service";

@Module({
	controllers: [AppController],
	providers: [AppService],
})
class AppModule {}

export default AppModule;
