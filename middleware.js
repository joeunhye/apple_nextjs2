import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

async function middleware(request) {
    //console.log(request.nextUrl); //유저가 요청중인 URL 출력해줌
    //console.log(request.cookies); //유저가 보낸 쿠키 출력해줌
    //console.log(request.headers); //유저의 headers 정보 출력해줌
    //NextResponse.next(); //통과
    // NextResponse.redirect(); //다른페이지 이동
    // NextResponse.rewrite(); //다른페이지 이동

    if (request.nextUrl.pathname.startsWith("/write")) {
        const session = await getToken({ req: request });
        console.log("세션", session);
        if (session == null) {
            return NextResponse.redirect("http://localhost:3000/api/auth/signin", request.url);
        }
    }

    // if (request.nextUrl.pathname.startsWith("/write")) {
    //     const session = await getToken({ req: request });
    //     console.log("세션", session);
    //     if (session == null) {
    //         return NextResponse.redirect("http://localhost:3000/api/auth/signin", request.url);
    //     }
    // }
    //return NextResponse.next();

    //if (request.nextUrl.pathname.startsWith("/list")) {
    //console.log(new Date().toLocaleString());
    //console.log(request.headers.get("sec-ch-ua-platform"));
    //return NextResponse.next();
    //}

    // 미들웨어에서 쿠키 다루기
    // request.cookies.get("쿠키이름"); //출력
    // request.cookies.has("쿠키이름"); //존재확인
    // request.cookies.delete("쿠키이름"); //삭제

    // const response = NextResponse.next();
    // response.cookies.set({
    //     name: "mode",
    //     value: "dark",
    //     maxAge: 3600,
    //     httpOnly: true,
    // });
    // return response; //쿠키생성
}

export default middleware;
