"use client";

import { useEffect, useState } from "react";

function Comment({ boardId }) {
	const [comment, setComment] = useState("");

	useEffect(() => {
		fetch("/api/comment/list")
			.then(response => response.json())
			.then(result => {
				console.log(result);
			});
	}, []);

	return (
		<div>
			<div>댓글 목록 </div>
			<input type="text" onChange={e => setComment(e.target.value)} />
			<button
				onClick={() => {
					fetch("/api/comment/new", {
						method: "POST",
						body: JSON.stringify({
							comment: comment,
							_id: boardId,
						}),
					});
				}}
			>
				전송
			</button>
		</div>
	);
}

export default Comment;
