"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

function DarkMode() {
    const router = useRouter();
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
                } else {
                    document.cookie = "mode=light; max-age=" + 3600 * 24 * 400;
                    router.refresh();
                }
            }}
        >
            🌙
        </span>
    );
}

export default DarkMode;
