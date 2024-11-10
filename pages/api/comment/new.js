import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
	const session = await getServerSession(req, res, authOptions);
	if (req.method == "POST") {
		let client = await connectDB;
		const db = client.db("forum");

		req.body = JSON.parse(req.body);

		let comment = {
			content: req.body.comment,
			author: session?.user.email,
			parent: new ObjectId(req.body._id),
		};

		await db.collection("comment").insertOne(comment);
		res.status(200).json("댓글 작성 완료");
	}
}
