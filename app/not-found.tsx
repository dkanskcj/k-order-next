"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// 2026-10-15
// header footer 없이 사용하는 방법 따로 알아 볼 예정
function NotFound() {
    const redirect = useRouter();
    const [num, setNum] = useState<number>(3);

    useEffect(() => {
        const time = setInterval(() => {
            setNum((prev) => prev - 1);
        }, 1000);

        const location = setTimeout(() => {
            redirect.push('/');
        }, 3000)

        return () => {
            clearInterval(time);
            clearTimeout(location);
        }
    }, []);

    return (
        <div className="w-full pb-18 flex flex-col justify-center items-center space-y-4">
            <p>요청하신 페이지가 존재하지 않거나 삭제되었습니다.</p>
            <p>{num} 초 후에 메인 페이지로 이동합니다.</p>
        </div>
    );
}

export default NotFound;
