"use client";

function error({ error, reset }) {
    return (
        <div>
            <h3>에러남~</h3>
            <button onClick={() => reset()}></button>
        </div>
    );
}

export default error;
