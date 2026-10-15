interface noIdxDTO {
    idx: number;
    content: string;
}

const kPosDesc: noIdxDTO[] = [
    {
        idx: 1,
        content: '방 이동 및 합치기'
    },
    {
        idx: 2,
        content: '키오스크 제어 (상품 주문, 메시지 등)'
    },
    {
        idx: 3,
        content: '상품판매 및 재고 관리/예약 대기자 편집'
    },
    {
        idx: 4,
        content: '다양한 요금제 설정'
    },
    {
        idx: 5,
        content: '시간/요일/방별, 회원/비회원/요금제 설정'
    },
    {
        idx: 6,
        content: '회원가입 및 관리(회원 정액권, 이용권(1인 1매))'
    }
];

const kWebDesc: noIdxDTO[] = [
    {
        idx: 1,
        content: '키오스크 및 카운터 충전 내역'
    },
    {
        idx: 2,
        content: '키오스크 및 카운터에서 사용한 내역'
    },
    {
        idx: 3,
        content: '간편결제를 통한 충전 내역'
    },
    {
        idx: 4,
        content: '카운터 및 태블릿에서 상품을 판매한 내역'
    },
    {
        idx: 5,
        content: '카운터 및 모바일 앱에서 서비스 지급 내역'
    },
    {
        idx: 6,
        content: '코인 반주기별 사용한 내역'
    }
];

const kRemoteDesc: noIdxDTO[] = [
    {
        idx: 1,
        content: '방 이동하기'
    },
    {
        idx: 2,
        content: '방 합치기'
    },
    {
        idx: 3,
        content: '반주기 메시지 전송'
    },
    {
        idx: 4,
        content: '점검중 설정'
    }
];

export {
    kPosDesc,
    kWebDesc,
    kRemoteDesc
}