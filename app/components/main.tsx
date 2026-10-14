import { gsap } from 'gsap';
import { Fragment, useEffect, useRef, useState } from 'react';
import { checkMobile } from '../store/persist';
import { funcLists, videoLists } from '../utils/main/main';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import ScrollTrigger from 'gsap/ScrollTrigger';


function Main() {
    const [defTarget, setDefTarget] = useState<HTMLDivElement>();
    const mobileImgs = useRef<HTMLImageElement[]>([]);
    const paradigmImgs = useRef<HTMLImageElement[]>([]);
    const suggestElements = useRef<HTMLDivElement[]>([]);
    const suggestImgElements = useRef<HTMLImageElement[]>([]);
    // 모바일 기기(태블릿 포함), 데스크탑 구분
    const [isDevice, setIsDevice] = useState<boolean>(true);
    // 해상도가 작은 휴대폰 구분
    const isMobile = checkMobile((state) => state.mobile);
    // const navigate = useNavigate();

    const getCoordnate = (e: React.MouseEvent<HTMLAreaElement, MouseEvent>) => {
        const targetRect = e.currentTarget.getBoundingClientRect();
        // navigate('/inquiry');
    }

    // 이미지 확대
    const plusMode = (e: HTMLVideoElement, x: number, type: string = '') => {
        if (type !== '') {
            const checkElement = document.getElementById(`${type}`);
            if (checkElement?.classList.contains('active')) {
                gsap.to(checkElement, {
                    xPercent: 0,
                    scale: 1
                });
                checkElement?.classList.toggle('active');
            }
            return;
        }
        const percent = x === 1 ? -50 : 50;
        if (!e.classList.contains('active')) {
            gsap.to(e, {
                xPercent: percent,
                scale: 1.5
            });
        } else {
            gsap.to(e, {
                xPercent: 0,
                scale: 1
            });
        }
        e.classList.toggle('active');
    }

    // 특징 이미지 확대
    const featPlus = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, x: number) => {
        if (isMobile) {
            return;
        }
        let percent: number = 0;
        switch (x) {
            case 1:
                percent = -50;
                break;
            case 2:
                percent = 50;
                break;
            default:
                percent = 0;
                break;
        }

        if (defTarget !== e?.currentTarget) {
            setDefTarget(e.currentTarget);
            if (defTarget && defTarget.classList.contains('active')) {
                defTarget?.classList.toggle('active');
                gsap.to(defTarget, {
                    xPercent: 0,
                    scale: 1,
                    zIndex: 0
                });
            }
        }
        if (!e.currentTarget.classList.contains('active')) {
            gsap.to(e.currentTarget, {
                xPercent: percent,
                scale: 1.5,
                zIndex: 10
            });
        } else {
            gsap.to(e.currentTarget, {
                xPercent: 0,
                scale: 1,
                zIndex: 0
            });
        }
        e.currentTarget.classList.toggle('active');
    }

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const firstAni = gsap.timeline();

        firstAni.from('.banner', {
            yPercent: 50,
            opacity: 0,
            delay: 0.2,
        }).from('.title1', {
            yPercent: 50,
            opacity: 0,
        }).from('.vid1', {
            yPercent: 50,
            opacity: 0,
        })

        gsap.from('.vid2', {
            scrollTrigger: {
                trigger: '.title1',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1,
                once: true,
            },
            yPercent: 50,
            opacity: 0,
            duration: 1,
            onStart: () => {
                const targetElement = document.querySelector('.vid1') as HTMLVideoElement;
                plusMode(targetElement, 1, 'vid1');
                if (firstAni.isActive()) {
                    firstAni.progress(1);
                }
            }
        })

        gsap.from('.vid3', {
            scrollTrigger: {
                trigger: '.vid2',
                start: 'top 30%',
                end: 'bottom bottom',
                scrub: 1,
                once: true,
            },
            yPercent: 50,
            opacity: 0,
            duration: 1,
            onStart: () => {
                const targetElement = document.querySelector('.vid2') as HTMLVideoElement;
                plusMode(targetElement, 2, 'vid2');
                if (firstAni.isActive()) {
                    firstAni.progress(1);
                }
            }
        })

        gsap.from('.vid4', {
            scrollTrigger: {
                trigger: '.vid3',
                start: 'top 30%',
                end: 'bottom bottom',
                scrub: 1,
                once: true,
            },
            yPercent: 50,
            opacity: 0,
            duration: 1,
            onStart: () => {
                const targetElement = document.querySelector('.vid3') as HTMLVideoElement;
                plusMode(targetElement, 1, 'vid3');
                if (firstAni.isActive()) {
                    firstAni.progress(1);
                }
            }
        })

        gsap.from('.vid5', {
            scrollTrigger: {
                trigger: '.vid4',
                start: 'top 30%',
                end: 'bottom bottom',
                scrub: 1,
                once: true,
            },
            yPercent: 50,
            opacity: 0,
            duration: 1,
            onStart: () => {
                const targetElement = document.querySelector('.vid4') as HTMLVideoElement;
                plusMode(targetElement, 2, 'vid4');
                if (firstAni.isActive()) {
                    firstAni.progress(1);
                }
            }
        })

        gsap.from('.title2', {
            scrollTrigger: {
                trigger: '.vid4',
                start: 'top -10%',
                scrub: 1,
                once: true
            },
            yPercent: 50,
            opacity: 0,
            duration: 1,
            onStart: () => {
                const targetElement = document.querySelector('.vid5') as HTMLVideoElement;
                plusMode(targetElement, 1, 'vid5');
                if (firstAni.isActive()) {
                    firstAni.progress(1);
                }
            }
        })

        gsap.from('.feat', {
            scrollTrigger: {
                trigger: '.vid4',
                start: 'top -10%',
                scrub: 1,
                once: true
            },
            yPercent: 50,
            opacity: 0,
            duration: 1
        })

        gsap.from('.ask', {
            scrollTrigger: {
                trigger: '.feat',
                start: 'top 70%',
                end: '50% 50%',
                scrub: 1,
                once: true
            },
            yPercent: 50,
            opacity: 0,
            duration: 1
        })

        // matchMedia 함수 이용하여 viewport 크기 기준으로 애니메이션 적용 가능
        const mobileCheck = gsap.matchMedia();
        console.log(paradigmImgs)
        mobileCheck.add({
            isDesktop: "(min-width: 1200px)",
            isMobile: "(max-width: 1199px)",
        }, (context) => {
            const { isDesktop, isMobile } = context.conditions!;
            isMobile ? setIsDevice(true) : setIsDevice(false);

            const myTrigger = gsap.timeline();

            if (isMobile) {
                myTrigger
                    .from('.paradigmTitle', {
                        yPercent: 20,
                        opacity: 0,
                        duration: 1,
                    }).from('.paradigmSub', {
                        yPercent: 20,
                        opacity: 0,
                        duration: 1
                    }).from('.paradigmContent', {
                        yPercent: 20,
                        opacity: 0,
                        duration: 1,
                    })

                const fadeInOutImgsParadigm = gsap.timeline({ repeat: -1 });

                fadeInOutImgsParadigm
                    .from(paradigmImgs.current[0], {
                        opacity: 0,
                        duration: 0.5
                    })
                    .to(paradigmImgs.current[0], {
                        opacity: 0,
                        duration: 0.5,
                        delay: 1
                    })
                    .from(paradigmImgs.current[1], {
                        opacity: 0,
                        duration: 0.5
                    })
                    .to(paradigmImgs.current[1], {
                        opacity: 0,
                        duration: 0.5,
                        delay: 1
                    })
                    .from(paradigmImgs.current[2], {
                        opacity: 0,
                        duration: 0.5
                    })
                    .to(paradigmImgs.current[2], {
                        opacity: 0,
                        duration: 0.5,
                        delay: 1
                    })
                    .from(paradigmImgs.current[3], {
                        opacity: 0,
                        duration: 0.5
                    })
                    .to(paradigmImgs.current[3], {
                        opacity: 0,
                        duration: 0.5,
                        delay: 1
                    })
                    .from(paradigmImgs.current[4], {
                        opacity: 0,
                        duration: 0.5
                    })
                    .to(paradigmImgs.current[4], {
                        opacity: 0,
                        duration: 0.5,
                        delay: 1
                    })
                    .from(paradigmImgs.current[5], {
                        opacity: 0,
                        duration: 0.5
                    })
                    .to(paradigmImgs.current[5], {
                        opacity: 0,
                        duration: 0.5,
                        delay: 1
                    })
                    .from(paradigmImgs.current[6], {
                        opacity: 0,
                        duration: 0.5
                    })
                    .to(paradigmImgs.current[6], {
                        opacity: 0,
                        duration: 0.5,
                        delay: 1
                    })
            } else {
                myTrigger
                    .from('.paradigmTitle', {
                        yPercent: 20,
                        opacity: 0,
                        duration: 1,
                    }).from('.paradigmSub', {
                        yPercent: 20,
                        opacity: 0,
                        duration: 1
                    }).from('.paradigmContent', {
                        yPercent: 20,
                        opacity: 0,
                        duration: 1,
                    })
            }

            ScrollTrigger.create({
                animation: myTrigger,
                trigger: '.paradigmTarget',
                start: 'top bottom',
                end: '+=80%',
                once: true,
                scrub: 1,
                onEnter: () => {
                    if (firstAni.isActive()) {
                        firstAni.progress(1);
                    }
                },
                onLeaveBack: () => {
                    if (firstAni.isActive()) {
                        firstAni.progress(1);
                    }
                }
            })
        })

        const suggestTimeline = gsap.timeline();

        ScrollTrigger.create({
            animation: suggestTimeline,
            trigger: '.paradigmTarget',
            start: '50% 50%',
            end: '+=80%',
            scrub: 1,
            once: true,
            onEnter: () => {
                if (firstAni.isActive()) {
                    firstAni.progress(1);
                }
                gsap.from('.sug', {
                    yPercent: 20,
                    opacity: 0,
                    duration: 1,
                })

                gsap.from(suggestElements.current, {
                    yPercent: 20,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.3
                })

                setTimeout(() => {
                    gsap.to(suggestImgElements.current, {
                        scale: 1.2,
                        yoyo: true,
                        repeat: -1,
                        stagger: 0.3
                    })
                }, 1200)
            }
        })

        gsap.from('.partner', {
            scrollTrigger: {
                trigger: '.sug',
                start: '50% 50%',
                end: '50% bottom',
                scrub: 1,
                once: true
            },
            yPercent: 20,
            opacity: 0,
            duration: 1
        })

        return () => {
            ScrollTrigger.killAll();
        }
    }, []);

    useEffect(() => {
        if (mobileImgs.current.length > 0) {
            const fadeInOutImgs = gsap.timeline({ repeat: -1 });

            fadeInOutImgs
                .from(mobileImgs.current[0], {
                    opacity: 0,
                    duration: 0.5
                })
                .to(mobileImgs.current[0], {
                    opacity: 0,
                    duration: 0.5,
                    delay: 1
                })
                .from(mobileImgs.current[1], {
                    opacity: 0,
                    duration: 0.5
                })
                .to(mobileImgs.current[1], {
                    opacity: 0,
                    duration: 0.5,
                    delay: 1
                })
        }
    }, [mobileImgs])

    return (
        <div className='imgContainer w-full pb-18 flex flex-col justify-center items-center'>
            <div className='max-w-[1920px] mcenter'>
                <div className='banner'>
                    <Image width={1878} height={480} src="/main/banner_editVer.svg" alt="" useMap='#test' />
                    <map name="test" id='test' className='group cursor-pointer'>
                        <area shape="rect" coords="348,320,488,364" onClick={(event) => { getCoordnate(event) }} />
                    </map>
                </div>
                <div className='title1 pt-18 text-center space-y-1.5'>
                    <div className='text-xl text-primary font-medium'>
                        케이오더
                    </div>
                    <div className='text-4xl font-semibold whitespace-pre-wrap leading-13.5'>
                        노래방의 모든 것을<br></br>간편하게!
                    </div>
                </div>
                <div className='max-w-306 mcenter'>
                    {
                        !isMobile ? videoLists.map((res, index) => {
                            if (index % 2 === 0) {
                                return <Fragment key={res.idx}>
                                    <div className={`flex justify-between items-center px-3 py-31.5 vid${res.idx}`}>
                                        <div className='w-1/2 space-y-1.5 lg:text-3xl font-medium'>
                                            <div>
                                                {res.title1}
                                            </div>
                                            <div>
                                                {res.title2}
                                            </div>
                                        </div>
                                        <div className='w-1/2'>
                                            <video id={`vid${res.idx}`} className='rounded-[20px]' onClick={(event) => { plusMode(event.currentTarget, 1) }} muted autoPlay loop src={res.video}></video>
                                        </div>
                                    </div>
                                </Fragment>
                            }
                            return <Fragment key={res.idx}>
                                <div className={`flex justify-between items-center px-3 py-31.5 vid${res.idx}`}>
                                    <div className='w-1/2 rounded-[20px]'>
                                        <video id={`vid${res.idx}`} className='rounded-[20px]' onClick={(event) => { plusMode(event.currentTarget, 2) }} muted autoPlay loop src={res.video}></video>
                                    </div>
                                    <div className='w-1/2 space-y-1.5 text-3xl font-medium text-right'>
                                        <div>
                                            {res.title1}
                                        </div>
                                        <div>
                                            {res.title2}
                                        </div>
                                    </div>
                                </div>
                            </Fragment>
                        }) :
                            videoLists.map((res, index) => {
                                return <Fragment key={res.idx}>
                                    <div className={`flex flex-col justify-between items-center px-3 py-8 space-y-4 vid${res.idx}`}>
                                        <div className='w-full'>
                                            <video id={`vid${res.idx}`} className='rounded-[20px]' muted autoPlay loop playsInline controls src={res.video}></video>
                                        </div>
                                        <div className='w-full text-center space-y-1.5 text-2xl font-medium'>
                                            <div>
                                                {res.title1}
                                            </div>
                                            <div>
                                                {res.title2}
                                            </div>
                                        </div>
                                    </div>
                                </Fragment>
                            })
                    }
                </div>
                <div className='title2 pt-18 text-center space-y-[6px ]'>
                    <div className='text-xl text-primary font-medium'>
                        서비스 소개
                    </div>
                    <div className='text-4xl font-semibold whitespace-pre-wrap'>
                        이런 기능들이<br></br>있어요
                    </div>
                </div>
                <div className='feat w-full max-w-228 mcenter pt-10 pb-18 space-y-5 low:px-3 lg:px-0'>
                    {
                        funcLists.map((res, index) => {
                            if (isMobile) {
                                res.content = res.content.replace('\n', ' ');
                                if (index % 2 === 0) {
                                    return <Fragment key={res.idx}>
                                        <div className={`w-full ${res.bgColor} rounded-2xl fcenter p-6 gap-10`} onClick={(event) => { featPlus(event, 3) }}>
                                            <div className='w-full space-y-4'>
                                                <div>
                                                    <div className={`text-lg font-medium ${res.textColor}`}>{`${index + 1}`.padStart(2, '0')}</div>
                                                    <div className='low:text-xl lg:text-2xl font-semibold break-keep'>{res.title}</div>
                                                </div>
                                                <div className='text-[18px] low:break-keep lg:whitespace-pre-wrap'>{res.content}</div>
                                            </div>
                                            <div className='w-full fcenter'>
                                                <Image width={370} height={242.86} src={`${res.img[0]}`} alt="" />
                                            </div>
                                        </div>
                                    </Fragment>
                                }
                                return <Fragment key={res.idx}>
                                    <div className={`w-full ${res.bgColor} rounded-2xl fcenter p-6 gap-10`} onClick={(event) => { featPlus(event, 3) }}>
                                        <div className='w-full fcenter'>
                                            {
                                                res.img.length > 1 ?
                                                    <div className='flex gap-2 relative'>
                                                        <Image width={370} height={242.86} className='absolute' ref={e => mobileImgs.current[0] = e!} src={`${res.img[0]}`} alt="" />
                                                        <Image width={370} height={242.86} ref={e => mobileImgs.current[1] = e!} src={`${res.img[1]}`} alt="" />
                                                    </div>
                                                    :
                                                    <Image width={370} height={242.86} src={`${res.img[0]}`} alt="" />
                                            }
                                        </div>
                                        <div className='w-full space-y-4'>
                                            <div>
                                                <div className={`text-lg font-medium ${res.textColor}`}>{`${index + 1}`.padStart(2, '0')}</div>
                                                <div className='low:text-xl lg:text-2xl font-semibold break-keep'>{res.title}</div>
                                            </div>
                                            <div className='text-[18px] low:break-keep lg:whitespace-pre-wrap'>{res.content}</div>
                                        </div>
                                    </div>
                                </Fragment>
                            }

                            if (res.idx === 2 || res.idx === 5) {
                                return null;
                            }
                            if (res.idx === 1 || res.idx === 4) {
                                return <Fragment key={res.idx}>
                                    <div className='w-full h-full grid grid-cols-2 grid-rows-1 gap-5'>
                                        <div className='fcenter col-span-1' onClick={(event) => { featPlus(event, 2) }}>
                                            <div className={`h-full ${res.bgColor} low:p-6 lg:p-12 rounded-2xl`}>
                                                <div className='h-1/2 space-y-4 pb-12'>
                                                    <div>
                                                        <div className={`text-lg font-medium ${res.textColor}`}>{`${index + 1}`.padStart(2, '0')}</div>
                                                        <div className='low:text-xl lg:text-2xl font-semibold break-keep'>{res.title}</div>
                                                    </div>
                                                    <div className='text-[18px] low:break-keep lg:whitespace-pre-wrap'>{res.content}</div>
                                                </div>
                                                <div className='relative h-1/2 fcenter'>
                                                    {
                                                        res.img.length > 1 ?
                                                            null
                                                            :
                                                            <Image width={370} height={242.86} src={`${res.img[0]}`} alt="" />
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className='relative fcenter col-span-1' onClick={(event) => { featPlus(event, 1) }}>
                                            <div className={`h-full ${funcLists[index + 1].bgColor} xsm:p-6 lg:p-12 rounded-2xl`}>
                                                <div className='h-1/2 space-y-4 pb-12'>
                                                    <div>
                                                        <div className={`text-lg font-medium ${funcLists[index + 1].textColor}`}>{`${index + 2}`.padStart(2, '0')}</div>
                                                        <div className='xsm:text-xl lg:text-2xl font-semibold'>{funcLists[index + 1].title}</div>
                                                    </div>
                                                    <div className='text-[18px] xsm:break-keep lg:whitespace-pre-wrap'>{funcLists[index + 1].content}</div>
                                                </div>
                                                <div className='h-1/2 fcenter'>
                                                    {
                                                        funcLists[index + 1].img.length > 1 ?
                                                            null
                                                            :
                                                            <Image width={370} height={242.86} src={`${funcLists[index + 1].img[0]}`} alt="" />
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Fragment>
                            }
                            return res.idx === 3 ? <Fragment key={res.idx}>
                                <div className={`relative w-full ${res.bgColor} rounded-2xl fcenter xsm:px-6 lg:px-12 xsm:py-16 lg:py-[8.78125rem] gap-19`} onClick={(event) => { featPlus(event, 3) }}>
                                    <div className='w-full space-y-4'>
                                        <div>
                                            <div className={`text-lg font-medium ${res.textColor}`}>{`${index + 1}`.padStart(2, '0')}</div>
                                            <div className='xsm:text-xl lg:text-2xl font-semibold'>{res.title}</div>
                                        </div>
                                        <div className='text-[18px] xsm:break-keep lg:whitespace-pre-wrap'>{res.content}</div>
                                    </div>
                                    <div className='w-full fcenter'>
                                        {
                                            res.img.length > 1 ?
                                                null
                                                :
                                                <Image width={370} height={242.86} src={`${res.img[0]}`} alt="" />
                                        }
                                    </div>
                                </div>
                            </Fragment>
                                : <Fragment key={res.idx}>
                                    <div className={`relative w-full ${res.bgColor} rounded-2xl fcenter xsm:px-6 lg:px-12 py-19.75 gap-5`} onClick={(event) => { featPlus(event, 3) }}>
                                        <div className='w-full fcenter'>
                                            {
                                                res.img.length > 1 ?
                                                    <div className='flex gap-2'>
                                                        <Image width={125} height={256} src={`${res.img[0]}`} alt="" />
                                                        <Image width={125} height={256} src={`${res.img[1]}`} alt="" />
                                                    </div>
                                                    :
                                                    null
                                            }
                                        </div>
                                        <div className='w-full space-y-4'>
                                            <div>
                                                <div className={`text-lg font-medium ${res.textColor}`}>{`${index + 1}`.padStart(2, '0')}</div>
                                                <div className='xsm:text-xl lg:text-2xl font-semibold'>{res.title}</div>
                                            </div>
                                            <div className='text-[18px] xsm:break-keep lg:whitespace-pre-wrap'>{res.content}</div>
                                        </div>
                                    </div>
                                </Fragment>
                        })
                    }
                </div>
                <div className='ask py-18 text-center space-y-10 low:px-3 lg:px-0'>
                    <div className='space-y-3'>
                        <div className='text-5xl font-semibold leading-13.5'>
                            도입문의
                        </div>
                        <div className='text-xl whitespace-pre-wrap text-[#25292E] leading-8.5 break-keep'>
                            무엇이든 물어보세요. 신속한 답변 드리겠습니다.
                        </div>
                    </div>
                    <div className='max-w-228 mcenter xsm:px-3 lg_p-0'>
                        <div className='fcenter bg-[#FDFCF4] gap-10 py-11 rounded-xl border border-[#EEECDC]'>
                            {/* 카톡 아이콘 */}
                            {/* <Image fill className='testImg left-[calc(110%)]' src={kakao} alt="" /> */}
                            <div className='sText space-y-2'>
                                {/* 2024-11-14
                                작업자: 김현우
                                TODO: 오더위즈 쪽 카카오톡 링크가 전달되지 않아서 대표번호로 작성
                                 */}
                                {/* <div className='text-[18px] text-start font-medium leading-[21.48px]'>채팅 상담</div>
                                <div className='fcenter gap-1 leading-[50.12px]'>
                                    <div className='low:text-lg xsm:text-xl text-[42px] font-semibold'>카카오톡 문의하기</div>
                                    <Image fill src={rArrow} alt="" />
                                </div> */}
                                <div className='w-full fcenter gap-10'>
                                    <div><Image width={88} height={88} src="/icons/phone.svg" alt="" /></div>
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
            {/* 모바일 캐러셀 디자인 적용 예정 */}
            <div className='paradigmTarget w-full bg-black'>
                <div className='w-full max-w-228 mcenter py-18 space-y-10 low:px-3 lg:px-0'>
                    <div className='flex flex-col justify-center items-start space-y-2'>
                        <div className='flex text-4xl leading-13.5 font-semibold gap-2'>
                            {
                                isMobile ?
                                    <div>
                                        <div className='paradigmTitle text-white'>변화해가는 패러다임</div>
                                        <div className='paradigmSub text-primary flex'>케이오더</div>
                                    </div>
                                    :
                                    <>
                                        <div className='paradigmTitle text-white'>변화해가는 패러다임</div>
                                        <div className='paradigmSub text-primary flex'>케이오더</div>
                                    </>
                            }
                        </div>
                        <div className='paradigmContent text-xl leading-7.5 text-[#D2D5DB]'>기존 노래방에 테이블오더 도입 후 인건비, 업무 피로도가 줄어들며 관리의 편의성까지 더했습니다.</div>
                    </div>
                    {
                        !isDevice ?
                            <div className='slider-container overflow-x-hidden'>
                                <Slider
                                    dots={false}
                                    arrows={false}
                                    infinite={true}
                                    autoplay={true}

                                    autoplaySpeed={1500}
                                    slidesToShow={2}
                                    slidesToScroll={1}
                                >
                                    <Image width={452} height={360} ref={e => paradigmImgs.current[0] = e!} className='img01' src="/kmachine01.svg" alt="" />
                                    <Image width={452} height={360} ref={e => paradigmImgs.current[1] = e!} className='img02' src="/kmachine02.svg" alt="" />
                                    <Image width={452} height={360} ref={e => paradigmImgs.current[2] = e!} className='img03' src="/kmachine03.svg" alt="" />
                                    <Image width={452} height={360} ref={e => paradigmImgs.current[3] = e!} className='img04' src="/kmachine04.svg" alt="" />
                                    <Image width={452} height={360} ref={e => paradigmImgs.current[4] = e!} className='img05' src="/kmachine05.svg" alt="" />
                                    <Image width={452} height={360} ref={e => paradigmImgs.current[5] = e!} className='img06' src="/kmachine06.svg" alt="" />
                                    <Image width={452} height={360} ref={e => paradigmImgs.current[6] = e!} className='img07' src="/kmachine07.svg" alt="" />
                                </Slider>
                            </div>
                            :
                            <div className='relative paradigmImgs w-full flex justify-center gap-5 mob'>
                                <Image width={452} height={360} ref={e => paradigmImgs.current[0] = e!} className='img01 absolute' src="/kmachine01.svg" alt="" />
                                {/* 공간 차지 용도로 absolute 제외 */}
                                <Image width={452} height={360} ref={e => paradigmImgs.current[1] = e!} className='img02 ' src="/kmachine02.svg" alt="" />
                                <Image width={452} height={360} ref={e => paradigmImgs.current[2] = e!} className='img03 absolute' src="/kmachine03.svg" alt="" />
                                <Image width={452} height={360} ref={e => paradigmImgs.current[3] = e!} className='img04 absolute' src="/kmachine04.svg" alt="" />
                                <Image width={452} height={360} ref={e => paradigmImgs.current[4] = e!} className='img05 absolute' src="/kmachine05.svg" alt="" />
                                <Image width={452} height={360} ref={e => paradigmImgs.current[5] = e!} className='img06 absolute' src="/kmachine06.svg" alt="" />
                                <Image width={452} height={360} ref={e => paradigmImgs.current[6] = e!} className='img07 absolute' src="/kmachine07.svg" alt="" />
                            </div>
                    }
                </div>
            </div>
            <div className='w-full bg-[#F9FAFC] space-y-10 py-18'>
                <div className='sug text-center space-y-1.5'>
                    <div className='text-xl text-primary font-medium'>
                        케이오더
                    </div>
                    <div className='text-4xl font-semibold whitespace-pre-wrap leading-13.5'>
                        이런 매장에<br></br>추천해요!
                    </div>
                </div>
                <div className='max-w-228 mcenter space-y-5 low:px-3 lg:px-0'>
                    <div className='low:space-y-5 sm:flex justify-center items-center gap-5'>
                        <div ref={e => suggestElements.current[0] = e!} className='w-full flex justify-start items-center gap-6 low:p-2 lg:p-5 bg-white rounded-2xl'>
                            <div className='rounded-2xl overflow-hidden bg-[#F9FAFC]'>
                                <Image width={92} height={92} ref={e => suggestImgElements.current[0] = e!} src="/icons/note.svg" alt="" />
                            </div>
                            <div className='leading-12.5 text-base font-medium'>노래주점, 노래타운</div>
                        </div>
                        <div ref={e => suggestElements.current[1] = e!} className='w-full flex justify-start items-center gap-6 low:p-2 lg:p-5 bg-white rounded-2xl'>
                            <div className='rounded-2xl overflow-hidden bg-[#F9FAFC]'>
                                <Image width={92} height={92} ref={e => suggestImgElements.current[1] = e!} src="/icons/cafe.svg" alt="" />
                            </div>
                            <div className='leading-12.5 text-base font-medium'>카페&코인 노래방</div>
                        </div>
                    </div>
                    <div className='low:space-y-5 sm:flex justify-center items-center gap-5'>
                        <div ref={e => suggestElements.current[2] = e!} className='w-full flex justify-start items-center gap-6 low:p-2 lg:p-5 bg-white rounded-2xl'>
                            <div className='rounded-2xl overflow-hidden bg-[#F9FAFC]'>
                                <Image width={92} height={92} ref={e => suggestImgElements.current[2] = e!} src="/icons/mic.svg" alt="" />
                            </div>
                            <div className='leading-12.5 text-base font-medium'>일반 노래방</div>
                        </div>
                        <div ref={e => suggestElements.current[3] = e!} className='w-full flex justify-start items-center gap-6 low:p-2 lg:p-5 bg-white rounded-2xl'>
                            <div className='rounded-2xl overflow-hidden bg-[#F9FAFC]'>
                                <Image width={92} height={92} ref={e => suggestImgElements.current[3] = e!} src="/icons/pc.svg" alt="" />
                            </div>
                            <div className='leading-12.5 text-base font-medium'>PC방&코인 노래방</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='partner w-full space-y-10 low:p-3'>
                <div className='pt-18 text-center space-y-1.5'>
                    <div className='text-xl text-primary font-medium'>
                        파트너사
                    </div>
                    <div className='text-4xl font-semibold whitespace-pre-wrap leading-13.5 break-keep'>
                        국내 탑 노래방 브랜드
                    </div>
                </div>
                <div className='max-w-228 mcenter space-y-5'>
                    <Image width={912} height={480} src="/music_brand.svg" alt="" />
                    {/* <Image fill src={brand} alt="" /> */}
                </div>
            </div>
        </div >
    );
}

export default Main;
