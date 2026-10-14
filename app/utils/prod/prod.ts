import fpl from '../../../public/prod/SF10FPL.svg';
import fpp from '../../../public/prod/SF10FPP.svg';
import sp from '../../../public/prod/SP22K.svg';

interface KorderProdInfoDTO {
    idx: number;
    title: string;
    purchaseType?: string;
    purchaseBGColor?: string;
    purchaseColor?: string;
    description: string;
    size: string;
    color: string;
    spec: string;
    os: string;
    option: string;
    bgColor: string;
    img: string;
}
const KorderProdInfoLists: KorderProdInfoDTO[] = [
    {
        idx: 1,
        title: 'SF-10FPL',
        purchaseType: '후불형',
        purchaseBGColor: 'bg-[#F2F0FF]',
        purchaseColor: 'text-[#520092]',
        description: '일시불 및 할인 기능',
        size: '243.5x9.3x162mm',
        color: '다크그레이',
        spec: '모니터 : 10.1인치 터치스크린\nCPU : Quad-core\nRAM : 4G\n저장장치 : 64G\n네트워크 : WI-FI',
        os: 'Android 11',
        option: '거치대 포함',
        bgColor: 'bg-[#FEEEF1]',
        img: fpl
    },
    {
        idx: 2,
        title: 'SF-10FPP',
        purchaseType: '선불형',
        purchaseBGColor: 'bg-[#E5F1FF]',
        purchaseColor: 'text-[#005CD1]',
        description: '일시불 및 할인 기능',
        size: '243.5x9.3x162mm',
        color: '다크그레이',
        spec: '모니터 : 10.1인치 터치스크린\nCPU : Quad-core\nRAM : 4G\n저장장치 : 64G\n네트워크 : WI-FI',
        os: 'Android 11',
        option: '거치대 / 카드리더기 포함',
        bgColor: 'bg-[#FEEEF1]',
        img: fpp
    },
    {
        idx: 3,
        title: 'SP-22K',
        description: '일시불 및 할인 기능',
        size: '519x318x40mm',
        color: '화이트',
        spec: '모니터 : 21.5인치 터치 스크린\nCPU : Celeron Intel J1900\nRAM : 8G\n저장장치 : SSD 120G\n네트워크 : WI-FI',
        os: 'Window 10',
        option: '캣단말기, 멀티패드, 영수증프린트, 금전함, 키보드, 마우스',
        bgColor: 'bg-[#EFF5FF]',
        img: sp
    }
]

export default KorderProdInfoLists;