"use client";

import { useRouter } from "next/navigation";
import React from "react";

function DetailLink() {
    let router = useRouter();
    return <button onClick={() => router.push("/")}>DetailLink</button>;
}

export default DetailLink;

// usePathname() 쓰면 현재 URL 출력
// useSearchParams() 쓰면 search parameter (query string) 출력
// useParams() 쓰면 [dynamic route]에 입력한 내용 (URL 파라미터)을 출력
