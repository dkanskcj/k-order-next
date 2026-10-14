"use client";

import { Fragment } from 'react/jsx-runtime';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

interface menuListDTO {
    idx: number;
    url: string;
    content: string;
}

function Header() {
    const location = usePathname();
    const emnuLists: menuListDTO[] = [
        {
            idx: 1,
            url: 'prod',
            content: '상품안내'
        },
        {
            idx: 2,
            url: 'package',
            content: '케이머신 패키지'
        },
        {
            idx: 3,
            url: 'inquiry',
            content: '도입문의'
        }
    ];

    return (
        <header className="header fbetween low:px-3 md:px-0">
            <div className='relative min-w-24 max-xsm:max-w-24 w-50 h-full min-h-20 cursor-pointer' >
                <Image fill src="/logo.svg" alt="" />
            </div>
            <div className='flex lg:gap-4'>
                {
                    emnuLists.map((res) => {
                        if (location.split('/')[1] === res.url) {
                            return <Fragment key={res.idx}>
                                <Link href={res.url} className='max-xsm:max-w-20 low:flex low:items-center low:text-center low:text-sm low:break-keep low:px-3 low:py-2 lg:px-6 lg:py-4 text-[#ff6105b6] hover:text-[#ff6205]' >
                                    {res.content}
                                </Link>
                            </Fragment>
                        } else {
                            return <Fragment key={res.idx}>
                                <Link href={res.url} className='max-xsm:max-w-20 low:flex low:items-center low:text-center low:text-sm low:break-keep low:px-3 low:py-2 lg:px-6 lg:py-4 hover:text-[#ff6205]' >
                                    {res.content}
                                </Link>
                            </Fragment>
                        }
                    })
                }
            </div>
        </header>
    );
}

export default Header;
