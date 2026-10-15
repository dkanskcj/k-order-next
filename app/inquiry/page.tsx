'use client';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect } from 'react';

function Inquiry() {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from('.inq', {
            yPercent: 50,
            opacity: 0,
        })
        return () => {
            ScrollTrigger.killAll();
        }
    }, [])
    return (
        <div className="w-full pb-18 flex flex-col justify-center items-center">
            <div className='w-full max-w-[1920px] mcenter'>
                <div className='inq w-full py-18 text-center space-y-10'>
                    <div className='space-y-3'>
                        <div className='text-5xl font-semibold leading-13.5'>
                            도입문의
                        </div>
                        <div className='text-xl whitespace-pre-wrap text-[#25292E] leading-8.5 break-keep'>
                            무엇이든 물어보세요. 신속한 답변 드리겠습니다.
                        </div>
                    </div>
                    <div className='max-w-228 mcenter low:px-3 lg:px-0'>
                        <div className='flex justify-center items-center bg-[#FDFCF4] gap-10 py-11 rounded-xl border border-[#EEECDC]'>
                            <div className='sText space-y-2'>
                                <div className='w-full fcenter gap-10'>
                                    <div><Image width={88} height={88} src='/icons/phone.svg' alt="" /></div>
                                    <div className='space-y-2 text-start py-[4.5px]'>
                                        <div className='text-lg leading-4.5'>전화상담</div>
                                        <div className='text-[42px] leading-12.5 font-semibold'>1811-6909</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Inquiry;
