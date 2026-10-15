"use client"

import { Fragment, useEffect } from "react";
import { checkMobile } from "../store/persist";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import prodList from '../utils/prod/prod';
import standList from '../utils/prod/stand';
import Image from "next/image";

function Prod() {
    const isMobile = checkMobile((state) => state.mobile);



    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const animate = gsap.timeline({
            defaults: {
                opacity: 0,
            }
        })

        animate.from('.title', {
            yPercent: 50,
            delay: 0.2
        }).from('.prod', {
            yPercent: 10,
        }).from('.install', {
            yPercent: 10,
        })

    }, []);

    return (
        <div className='w-full pb-18 flex flex-col justify-center items-center space-y-10'>
            <div className='title pt-18 text-center space-y-1.5'>
                <div className='text-xl text-primary font-medium'>
                    케이오더
                </div>
                <div className='text-4xl font-semibold whitespace-pre-wrap leading-13.5'>
                    상품안내
                </div>
            </div>
            <div className='prod max-w-228 mcenter low:space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:grid-rows-1 gap-5'>
                {
                    prodList.map((res) => {
                        return <Fragment key={res.idx}>
                            <div className='flex flex-col rounded-2xl border border-[#D2D5DB] low:mx-3 lg:mx-0'>
                                <div className={`w-full h-full flex justify-center items-center rounded-t-2xl ${res.bgColor} py-8`} onClick={(event) => {
                                    if (isMobile) {
                                        alert(1);
                                        return;
                                    }
                                    const targetElement = event.currentTarget.children[0];
                                    !targetElement.classList.contains('active') ?
                                        gsap.to(targetElement, {
                                            scale: 1.5,
                                        }) :
                                        gsap.to(targetElement, {
                                            scale: 1,
                                        })
                                    targetElement.classList.toggle('active')

                                }}>
                                    <Image src={res.img} alt="" />
                                </div>
                                <div className='px-6 py-8 space-y-6'>
                                    <div className='space-y-3'>
                                        <div className='space-y-1'>
                                            <div className='text-primary font-medium text-lg'>케이오더</div>
                                            <div className='flex justify-start items-center gap-3'>
                                                <div className='font-semibold leading-12.5 low:text-2xl xsm:text-3xl lg:text-4xl'>{res.title}</div>
                                                {
                                                    res.purchaseColor ?
                                                        <div className={`${res.purchaseColor} ${res.purchaseBGColor} text-lg rounded-lg px-3.5 py-1.5`}>{res.purchaseType}</div>
                                                        :
                                                        <div className={`text-lg rounded-lg px-3.5 py-1.5`}>{res.purchaseType}</div>
                                                }
                                            </div>
                                        </div>
                                        <div className='low:text-lg xsm:text-xl lg:text-2xl'>{res.description}</div>
                                    </div>
                                    <div className='space-y-2.5'>
                                        <div className='bg-[#F9FAFC] low:p-2 xsm:p-3 lg:p-6 space-y-3 rounded-2xl'>
                                            <div className='space-y-1'>
                                                <div className='w-fit px-2 py-1.5 rounded-md bg-[#E8EAED] font-medium text-[#535A64] leading-[19.09px]'>사이즈</div>
                                                <div className='low:text-lg xsm:text-xl lg:text-2xl text-[#393E45] leading-9.5'>{res.size}</div>
                                            </div>
                                            <div className='space-y-1'>
                                                <div className='w-fit px-2 py-1.5 rounded-md bg-[#E8EAED] font-medium text-[#535A64] leading-[19.09px]'>색상</div>
                                                <div className='low:text-lg xsm:text-xl lg:text-2xl text-[#393E45] leading-9.5'>{res.color}</div>
                                            </div>
                                            <div className='space-y-1'>
                                                <div className='w-fit px-2 py-1.5 rounded-md bg-[#E8EAED] font-medium text-[#535A64] leading-[19.09px]'>스펙</div>
                                                <div className='low:text-lg xsm:text-xl lg:text-2xl text-[#393E45] leading-9.5 whitespace-pre-wrap'>{res.spec}</div>
                                            </div>
                                            <div className='space-y-1'>
                                                <div className='w-fit px-2 py-1.5 rounded-md bg-[#E8EAED] font-medium text-[#535A64] leading-[19.09px]'>OS</div>
                                                <div className='low:text-lg xsm:text-xl lg:text-2xl text-[#393E45] leading-9.5'>{res.os}</div>
                                            </div>
                                            <div className='space-y-1'>
                                                <div className='w-fit px-2 py-1.5 rounded-md bg-[#E8EAED] font-medium text-[#535A64] leading-[19.09px]'>옵션</div>
                                                <div className='low:text-lg xsm:text-xl lg:text-2xl text-[#393E45] leading-9.5 break-keep'>{res.option}</div>
                                            </div>
                                        </div>
                                        <button className='w-full py-4 rounded-lg bg-black text-white font-medium low:text-base xsm:text-lg lg:text-xl' onClick={() => {
                                            // navigate('/inquiry');
                                        }}>
                                            도입 문의하기
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                    })
                }
            </div>
            <div className='install max-w-[912px] mcenter low:pt-0 lg:pt-[4.5rem] space-y-10 low:px-3 lg:px-0'>
                <div className='pt-[4.5rem] text-center space-y-3'>
                    <div className='text-4xl font-semibold'>
                        거치대
                    </div>
                    <div className='text-xl whitespace-pre-wrap low:break-keep lg:leading-[54px]'>
                        매장 환경에 따라 다양하게 설치 할 수 있습니다.
                    </div>
                </div>
                <div className='low:flex-col lg:flex-row flex justify-center items-center gap-5'>
                    {
                        standList.map((res) => {
                            return <Fragment key={res.idx}>
                                <div className='flex flex-col justify-center items-center space-y-4'>
                                    <div className='flex justify-center items-center min-h-[290px] rounded-[32px] low:py-5 lg:py-10 bg-[#EDEDED]'>
                                        <Image src={res.img} alt="" />
                                    </div>
                                    {/* 글자 */}
                                    <div className='text-xl'>{res.content}</div>
                                </div>
                            </Fragment>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Prod;
