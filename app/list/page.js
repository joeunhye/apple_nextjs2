import { connectDB } from "@/util/database";
import ListItem from "./ListItem";

export const dynamic = "force-dynamic";

async function List() {
    let client = await connectDB;
    const db = client.db("forum");
    let result = await db.collection("post").find().toArray();
    result.map((data) => {
        data._id = data._id.toString();
    });
    // console.log(result);

    return (
        <div className="list-bg">
            <ListItem result={result} />
        </div>
    );
}

export default List;
