import { Velar } from "velar";
import AppModule from "./app/app.module";
import settings from "./settings";

const app = Velar.create(AppModule);

app.listen(settings.port, () => {
	console.log(`listening on port ${settings.port}`);
});
