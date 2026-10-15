
interface kWebDTO {
    idx: number;
    title: string;
    content: string;
    img: string;
}

interface kRemoteDTO {
    idx: number;
    title: string;
    img: string;
}

const kWebMain: kWebDTO[] = [
    {
        idx: 1,
        title: '청소년/비회원 아이콘표시',
        content: '실제 충전한 내역 확인\n(비회원/회원 구분 가능)',
        img: '/kWeb02.svg'
    },
    {
        idx: 2,
        title: '사용건별',
        content: '회원이 실제\n사용한 내역 확인',
        img: '/kWeb03.svg'
    },
    {
        idx: 3,
        title: '시간대별 매출',
        content: '시간대별로\n매장 현황 확인',
        img: '/kWeb04.svg'
    },
    {
        idx: 4,
        title: '방별 이용 통계',
        content: '방 컨디션을 확인',
        img: '/kWeb05.svg'
    }
];

const kRemoteMain: kRemoteDTO[] = [
    {
        idx: 1,
        title: '계산하기',
        img: '/kRemote02.svg'
    },
    {
        idx: 2,
        title: '서비스 충전하기',
        img: '/kRemote03.svg'
    },
    {
        idx: 3,
        title: '반주기 메시지',
        img: '/kRemote04.svg'
    },
    {
        idx: 4,
        title: '반주기 재부팅',
        img: '/kRemote05.svg'
    }
]

export {
    kRemoteMain, kWebMain
};

