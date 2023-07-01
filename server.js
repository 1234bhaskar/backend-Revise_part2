import { app } from "./app.js";
import { databaseFunc } from "./data/database.js";

databaseFunc();
app.listen(process.env.PORT, () => {
  console.log("port 5000 Server Running");
});
