import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth/next";
import { authOptions } from "/pages/api/auth/[...nextauth]";

export default async function handler(req, res) {
	const session = await getServerSession(req, res, authOptions);

	if (session) {
		req.body.author = session.user.email;
	}

	if (req.method == "POST") {
		if (req.body.title == "") {
			res.status(500).json("제목을 입력해주세요");
		}

		try {
			let client = await connectDB;
			const db = client.db("forum");
			await db.collection("post").insertOne(req.body);
			res.redirect(302, "/list");
		} catch (error) {
			// DB에러시 실행할 코드~~
		}
	}
}
