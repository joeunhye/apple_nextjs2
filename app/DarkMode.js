"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function DarkMode() {
    const router = useRouter();
    const [cookieState, setCookieState] = useState("light");
    useEffect(() => {
        let cookieData = ("; " + document.cookie).split(`; mode=`).pop().split(";")[0];
        if ((cookieData = "")) {
            document.cookie = "mode=light; max-age=" + 3600 * 24 * 400;
        }
    }, []);
    return (
        <span
            onClick={() => {
                let cookieData = ("; " + document.cookie).split(`; mode=`).pop().split(";")[0];

                if (cookieData == "light") {
                    document.cookie = "mode=dark; max-age=" + 3600 * 24 * 400;
                    router.refresh();
                    setCookieState("dark");
                } else {
                    document.cookie = "mode=light; max-age=" + 3600 * 24 * 400;
                    router.refresh();
                    setCookieState("light");
                }
            }}
        >
            {cookieState == "light" ? "🌙" : "☀️"}
        </span>
    );
}

export default DarkMode;
