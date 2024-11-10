import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
	let client = await connectDB;
	const db = client.db("forum");
	let result = await db.collection("comment").find({ parent: new ObjectId() }).toArray();
}
