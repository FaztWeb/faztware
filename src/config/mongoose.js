import { connect } from "mongoose";
import { MONGODB_URL } from "../config";

(async () => {
  const db = await connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Database connected to:", db.connection.name);
})();
