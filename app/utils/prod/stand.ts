import desk from '../../../public/prod/desk.svg';
import stand from '../../../public/prod/stand.svg';
import wall from '../../../public/prod/wall.svg';

interface KProdInfoDTO {
    idx: number;
    content: string;
    img: string;
}
const kProdInfoList: KProdInfoDTO[] = [
    {
        idx: 1,
        content: '탁상형',
        img: desk
    },
    {
        idx: 2,
        content: '거치대',
        img: stand
    },
    {
        idx: 3,
        content: '벽면 부착형',
        img: wall
    }
]

export default kProdInfoList;