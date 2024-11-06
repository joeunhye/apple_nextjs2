"use client";

import Link from "next/link";
import DetailLink from "./DetailLink";

function ListItem({ result }) {
    return (
        <div>
            {result.map((data) => (
                <div className="list-item" key={data._id}>
                    <Link href={`/detail/${data._id}`}>{data.title}</Link>
                    <Link href={`/edit/${data._id}`}> [Edit]</Link>
                    <DetailLink />
                    <p>{data.content}</p>
                    <p>1월 1일</p>
                    <button
                        onClick={(e) => {
                            fetch("/api/post/delete", { method: "DELETE", body: data._id }).then(() => {
                                e.target.parentElement.style.opacity = 0;
                                setTimeout(() => {
                                    e.target.parentElement.style.display = "none";
                                }, 1000);
                            });
                        }}
                    >
                        🗑
                    </button>
                </div>
            ))}
        </div>
    );
}

export default ListItem;
