interface videoDTO {
    idx: number;
    title1: string;
    title2: string;
    video: string;
}

interface functionDTO {
    idx: number;
    title: string;
    content: string;
    textColor: string;
    bgColor: string;
    img: string[];
}


const videoLists: videoDTO[] = [
    {
        idx: 1,
        title1: '상품과 노래방 이용 주문을',
        title2: '편리하게 할 수 있어요.',
        video: '/video/kOrderOrderProd.mp4'
    },
    {
        idx: 2,
        title1: '비회원 고객은 충전과 동시에',
        title2: '노래방을 이용할 수 있어요.',
        video: '/video/kOrderNonMemberFee.mp4'
    },
    {
        idx: 3,
        title1: '시간을 충전하고 원하는만큼',
        title2: '사용 할 수 있어요.',
        video: '/video/kOrderMemberFeeTime.mp4'
    },
    {
        idx: 4,
        title1: '곡을 충전하고 원하는만큼',
        title2: '사용 할 수 있어요.',
        video: '/video/kOrderMemberFeeSong.mp4'
    },
    {
        idx: 5,
        title1: '남은 시간을 저장하고',
        title2: '다음에 다시 사용할 수 있어요.',
        video: '/video/kOrderMemberSaveFee.mp4'
    }
];

const funcLists: functionDTO[] = [
    {
        idx: 1,
        title: '기본요금 설정 기능',
        content: '상품 주문과 함께 이용 시간 결제와\n반주기 충전이 동시에 이루어집니다.',
        textColor: 'text-[#F12147]',
        bgColor: 'bg-[#FFF1F4]',
        img: ["/defaultFee.svg"]
    },
    {
        idx: 2,
        title: '요금제별 자동 서비스 기능',
        content: '시간이나 룸별로 다양한 요금제 구성이 가능하여\n설정된 서비스 시간이 자동으로\n잔여 시간(곡)에 맞춰 발급됩니다.',
        textColor: 'text-[#0F5FE3]',
        bgColor: 'bg-[#EFF5FF]',
        img: ["/autoService.svg"]
    },
    {
        idx: 3,
        title: '상품 판매 기능',
        content: '고객층의 연령대를 고려한 직관적인 UI로\n상품 판매와 홍보가 가능합니다.',
        textColor: 'text-[#00B750]',
        bgColor: 'bg-[#EAFAF1]',
        img: ["/salesProd.svg"]
    },
    {
        idx: 4,
        title: '대기화면 홍보',
        content: '동영상, 이미지, 문구로 자체 제작한 업소의 광고를\n대기화면에 표출해 손님에게 보여줄 수 있습니다.',
        textColor: 'text-[#E7A600]',
        bgColor: 'bg-[#FEF8EA]',
        img: ["/waitScreen.svg"]
    },
    {
        idx: 5,
        title: '회원전용 서비스',
        content: '남은 시간 또는 곡을 쿠폰으로 저장하여\n재방문을 유도 할 수 있으며\n쿠폰을 사용할 수 있습니다.',
        textColor: 'text-[#7130C8]',
        bgColor: 'bg-[#F6F2FB]',
        img: ["/onlyMember.svg"]
    },
    {
        idx: 6,
        title: '모바일 핸드폰 관리자앱',
        content: '고객이 어디서든 주문이 가능한 모바일오더 키업과\n매출 통계와 반주기 원격제어가 가능한\n관리자용 앱을 제공합니다.',
        textColor: 'text-[#00ACAC]',
        bgColor: 'bg-[#ECF6F6]',
        img: ["/adminApp01.svg", "/adminApp02.svg"]
    },
];

export {
    funcLists,
    videoLists
};