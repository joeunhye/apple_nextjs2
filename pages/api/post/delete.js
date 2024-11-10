import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "/pages/api/auth/[...nextauth]";

export default async function handler(req, res) {
	const session = await getServerSession(req, res, authOptions);
	if (req.method == "DELETE") {
		try {
			let client = await connectDB;
			const db = client.db("forum");

			let findPost = await db.collection("post").findOne({ _id: new ObjectId(req.body) });
			if (findPost.author == session.user.email) {
				let result = await db.collection("post").deleteOne({ _id: new ObjectId(req.body) });
				res.redirect(302, "/list");
				res.status(200).json("삭제완료");
			} else {
				return res.json("현재유저와 작성자 불일치");
			}
		} catch (error) {
			res.status(500);
		}
	}
}
