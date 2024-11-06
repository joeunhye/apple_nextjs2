import React from "react";
import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";

async function List() {
    let client = await connectDB;
    const db = client.db("forum");
    let result = await db.collection("post").find().toArray();
    // console.log(result);

    return (
        <div className="list-bg">
            {result.map((data) => (
                <div className="list-item" key={data._id}>
                    <Link href={`/detail/${data._id}`}>{data.title}</Link>
                    <Link href={`/edit/${data._id}`}> [Edit]</Link>
                    <DetailLink />
                    <p>{data.content}</p>
                    <p>1월 1일</p>
                </div>
            ))}
        </div>
    );
}

export default List;
