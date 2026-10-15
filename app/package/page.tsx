
'use client';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { Fragment } from 'react/jsx-runtime';
import { kPosDesc, kRemoteDesc, kWebDesc } from '../utils/common/contents';
import kPos from '../utils/package/kPos';
import { kRemoteMain, kWebMain } from '../utils/package/kWebnRemote';

function KPackage() {
    const kPosDescElements = useRef<HTMLDivElement[]>([]);
    const kPosDescDetailElements = useRef<HTMLDivElement[]>([]);
    const kWebDescElements = useRef<HTMLDivElement[]>([]);
    const kWebDescDetailElements = useRef<HTMLDivElement[]>([]);
    const kRemoteDescElements = useRef<HTMLDivElement[]>([]);
    const kRemoteDescDetailElements = useRef<HTMLDivElement[]>([]);
    const carouselElement = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const kPosTitle = gsap.timeline({
            defaults: {
                yPercent: 50,
                opacity: 0,
                stagger: 0.1,
            }
        });

        kPosTitle.from('.title', {
            delay: 0.2
        })
            .from(kPosDescElements.current, {})
            .from(kPosDescDetailElements.current, {})
            .from('.kceo', {})


        gsap.from(kWebDescElements.current, {
            scrollTrigger: {
                trigger: '#kceo',
                start: '-50% 50%',
                end: 'bottom 50%',
                scrub: 1,
                once: true
            },
            yPercent: 50,
            opacity: 0,
            stagger: 0.1,
            onStart: () => {
                if (kPosTitle.isActive()) {
                    kPosTitle.progress(1);
                }
            }
        })
        gsap.from(kWebDescDetailElements.current, {
            scrollTrigger: {
                trigger: '#kceo',
                start: 'bottom+=20% 50%',
                end: '+=20%',
                scrub: 1,
                once: true
            },
            yPercent: 50,
            opacity: 0,
            stagger: 0.1
        })

        gsap.from('.kremote', {
            scrollTrigger: {
                trigger: '#kremote',
                start: '-50% 50%',
                end: '+=20%',
                scrub: 1,
                once: true
            },
            yPercent: 50,
            opacity: 0,
            duration: 0.5
        })

        gsap.from(kRemoteDescElements.current, {
            scrollTrigger: {
                trigger: '.kremote',
                start: '-30% 50%',
                end: '+=20%',
                scrub: 1,
                once: true
            },
            yPercent: 50,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1
        })

        gsap.from(kRemoteDescDetailElements.current, {
            scrollTrigger: {
                trigger: '.kremote',
                start: '+=20% 50%',
                end: '+=10%',
                scrub: 1,
                once: true
            },
            yPercent: 50,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1
        })

        return () => {
            ScrollTrigger.killAll();
        }

    }, [])

    return (
        <div className='w-full pb-18 flex flex-col justify-center items-center'>
            {/* 케이카운터 */}
            <div className="w-full space-y-6">
                <div className='w-full bg-[#F9FAFC]'>
                    <div className='title max-w-306 mcenter'>
                        <div className="flex low:flex-col lg:flex-row justify-between py-10 gap-10">
                            <div className='lg:w-176 flex justify-center items-center'>
                                <Image width={704} height={320} src='/kCounter.svg' alt="" />
                            </div>
                            <div className='rounded-2xl p-10 bg-white space-y-6'>
                                <div className='low:text-3xl xsm:text-4xl lg:text-5xl font-bold text-[#2837C0]'>케이카운터</div>
                                <div className='text-[19px] text-[#535A64] whitespace-pre-wrap low:break-keep lg:break-normal'>
                                    정산 및 매출 확인과<br />
                                    실시간 재고관리 및 다양한 회원 서비스가<br />
                                    가능합니다.
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center low:py-3 lg:py-6'>
                    <div className='flex low:flex-col lg:flex-row'>
                        {
                            kPos.map((res, index) => {
                                return <Fragment key={res.idx}>
                                    <div ref={(e) => { kPosDescElements.current[index] = e! }} className='kPosFeatDetail w-76.5 flex justify-center items-center border-r rounded-2xl border-[#F0F2F5]'>
                                        <div className='flex flex-col justify-center items-center text-center py-2 space-y-4'>
                                            <div className='w-fit px-3 py-1 rounded-full bg-[#EAEBF9] text-xs font-semibold text-[#2837C0]'>{`${res.idx}`.padStart(2, '0')}</div>
                                            <div className='text-[19px] font-semibold'>{res.content}</div>
                                        </div>
                                    </div>
                                </Fragment>
                            })
                        }
                    </div>
                </div>
                <div className='kPosDesc max-w-306 mcenter grid low:grid-cols-1 low:grid-rows-6 lg:grid-cols-3 lg:grid-rows-2 gap-3 low:px-3 lg:px-0'>
                    {
                        kPosDesc.map((res, index) => {
                            return <Fragment key={res.idx}>
                                <div ref={(e) => { kPosDescDetailElements.current[index] = e! }} className='flex items-center low:p-3 xsm:p-4 lg:p-5 gap-2 rounded-lg bg-[#F9FAFC] break-keep'>
                                    <Image width={20} height={21} src='/icons/blueCheck.svg' alt="" />
                                    <div>{res.content}</div>
                                </div>
                            </Fragment>
                        })
                    }
                </div>
            </div>
            <div id='kceo' className='w-full bg-[#F9FAFC] low:mt-10 low:px-3 lg:px-0 lg:mt-40'>
                <div className='kceo max-w-306 mcenter'>
                    <div className="flex low:flex-col lg:flex-row justify-between low:pt-3 low:pb-10 lg:py-10 gap-10">
                        <div className='lg:w-176 low:py-3 xsm:py-4 lg:py-12 flex justify-center items-center'>
                            <Image width={127} height={260} src='/kWeb01.svg' alt="" />
                        </div>
                        <div className='rounded-2xl low:p-5 xsm:p-8 lg:p-10 bg-white space-y-6'>
                            <div className='space-y-1 text-primary'>
                                <div className='text-sm font-medium'>점주용 모바일 관리 시스템</div>
                                <div className='low:text-2xl xsm:text-3xl lg:text-4xl font-bold'>케이오더 CEO<br />매출통계</div>
                            </div>
                            <div className='lg:text-[19px] text-[#535A64] whitespace-pre-wrap'>
                                모바일 앱을 통하여<br />실시간으로 매출 상세 확인이 가능합니다.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={(e) => { carouselElement.current = e! }} className='flex low:flex-col lg:flex-row justify-center items-center py-6'>
                {
                    kWebMain.map((res, index) => {
                        return <Fragment key={res.idx}>
                            <div ref={(e) => { kWebDescElements.current[index] = e! }} className='w-76.5 h-full flex flex-col justify-center items-center space-y-4'>
                                <div className='h-70 flex justify-center items-center py-2.5'><Image width={127} height={260} src={res.img} alt="" /></div>
                                <div className='h-full flex flex-col justify-start items-center text-center py-2 space-y-4'>
                                    <div className='w-fit px-3 py-1 rounded-full bg-[#FEEEF1] text-xs font-semibold text-primary'>{`${res.idx}`.padStart(2, '0')}</div>
                                    <div className='text-[19px] font-semibold'>{res.title}</div>
                                    <div className='text-[17px] text-[#535A64] whitespace-pre-wrap'>{res.content}</div>
                                </div>
                            </div>
                        </Fragment>
                    })
                }
            </div>
            <div className='max-w-306 mcenter grid low:grid-cols-1 low:grid-rows-1 lg:grid-cols-3 lg:grid-rows-2 gap-3 low:py-3 lg:py-6'>
                {
                    kWebDesc.map((res, index) => {
                        return <Fragment key={res.idx}>
                            <div ref={(e) => { kWebDescDetailElements.current[index] = e! }} className='flex items-center p-5 gap-2 rounded-lg bg-[#F9FAFC]'>
                                <Image width={20} height={21} src='/icons/blueCheck.svg' alt="" />
                                <div>{res.content}</div>
                            </div>
                        </Fragment>
                    })
                }
            </div>
            <div id='kremote' className='w-full bg-[#F9FAFC] low:mt-10 lg:mt-40'>
                <div className='kremote max-w-306 mcenter'>
                    <div className="flex low:flex-col lg:flex-row justify-between low:py-5 lg:py-10 gap-10">
                        <div className='lg:w-176 low:py-5 xsm:py-8 lg:py-12 flex justify-center items-center'>
                            <Image width={121} height={256} src='/kRemote01.svg' alt="" />
                        </div>
                        <div className='rounded-2xl low:p-5 xsm:p-8 lg:p-10 bg-white space-y-6'>
                            <div className='space-y-1 text-[#00A4A4]'>
                                <div className='text-sm font-medium'>점주용 모바일 관리 시스템</div>
                                <div className='low:text-2xl xsm:text-3xl lg:text-4xl font-bold'>케이오더 CEO<br />원격제어</div>
                            </div>
                            <div className='text-[19px] text-[#535A64] whitespace-pre-wrap break-keep'>
                                반주기 원격제어를 통해 외부 업무 중에도<br />매장을 실시간 운영 및 통제가 가능해집니다.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex low:flex-col lg:flex-row justify-center items-center low:py-3 lg:py-6'>
                {
                    kRemoteMain.map((res, index) => {
                        return <Fragment key={res.idx}>
                            <div ref={(e) => { kRemoteDescElements.current[index] = e! }} className='w-76.5 flex flex-col justify-center items-center low:space-y-1 lg:space-y-4'>
                                <div className='h-70 flex justify-center items-center py-2.5'><Image width={120} height={255} src={res.img} alt="" /></div>
                                <div className='flex flex-col justify-center items-center text-center py-2 space-y-4'>
                                    <div className='w-fit px-3 py-1 rounded-full bg-[#FEEEF1] text-xs font-semibold text-primary'>{`${res.idx}`.padStart(2, '0')}</div>
                                    <div className='text-[19px] font-semibold'>{res.title}</div>
                                </div>
                            </div>
                        </Fragment>
                    })
                }
            </div>
            <div className='low:w-full lg:min-w-306 max-w-306 mcenter grid low:grid-cols-1 low:grid-rows-4 lg:grid-cols-3 lg:grid-rows-2 gap-3 low:px-3 lg:px-0 py-6'>
                {
                    kRemoteDesc.map((res, index) => {
                        return <Fragment key={res.idx}>
                            <div ref={(e) => { kRemoteDescDetailElements.current[index] = e! }} className='flex items-center p-5 gap-2 rounded-lg bg-[#F9FAFC]'>
                                <Image width={20} height={21} src='/icons/blueCheck.svg' alt="" />
                                <div>{res.content}</div>
                            </div>
                        </Fragment>
                    })
                }
            </div>
        </div>
    );
}

export default KPackage;
