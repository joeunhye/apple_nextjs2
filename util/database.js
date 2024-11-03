import { MongoClient } from "mongodb";
const url = "mongodb+srv://masimel33:qwer1234@forum.xmg5r.mongodb.net/?retryWrites=true&w=majority&appName=forum";
let connectDB;

if (process.env.NODE_ENV === "development") {
	if (!global._mongo_) {
		global._mongo_ = new MongoClient(url).connect();
	}
	connectDB = global._mongo_;
} else {
	connectDB = new MongoClient(url).connect();
}
export { connectDB };
