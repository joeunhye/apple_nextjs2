import React from "react";

async function Write2() {
    async function handleSubmit() {
        "use server";
        console.log("hello");
    }

    return (
        <div>
            <form action={handleSubmit}>
                <input type="text" name="title" />
                <button type="submit">전송</button>
            </form>
        </div>
    );
}

export default Write2;
