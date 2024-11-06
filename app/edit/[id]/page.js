import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit({ params }) {
    const { id } = await params;
    let client = await connectDB;
    const db = client.db("forum");
    let result = await db.collection("post").findOne({ _id: new ObjectId(id) });

    // await db.collection("post").updateOne({수정할 게시물 정보}, { $set: {} });
    await db.collection("post").updateOne({ _id: new ObjectId(id) }, { $set: {} });
    return (
        <div className="p-20">
            <h4>수정페이지</h4>
            <form action="/api/post/edit" method="POST">
                <input name="title" defaultValue={result.title} />
                <input name="content" defaultValue={result.content} />
                <input style={{ display: "none" }} name="_id" defaultValue={result._id.toString()} />
                <button type="submit">전송</button>
            </form>
        </div>
    );
}
