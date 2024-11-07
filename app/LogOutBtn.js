"use client";
import { signOut } from "next-auth/react";

function LogOutBtn() {
    return <button onClick={() => signOut()}>로그아웃</button>;
}

export default LogOutBtn;
