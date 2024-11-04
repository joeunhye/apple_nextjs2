import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import React from "react";

async function Detail({ params }) {
    const { id } = await params;
    let client = await connectDB;
    const db = client.db("forum");
    let result = await db.collection("post").findOne({ _id: new ObjectId(id) });

    return (
        <div>
            <h2>상세페이지임</h2>
            <h3>{result.title}</h3>
            <p>{result.content}</p>
        </div>
    );
}

export default Detail;
