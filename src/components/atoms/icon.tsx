import { Icon as FeatherIcon } from '@ailibs/feather-react-ts';
import { FaArrowLeft, FaArrowRight, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { LuWarehouse } from 'react-icons/lu';
import { BsFiletypeXml, BsFiletypePdf } from 'react-icons/bs';
import { BiCommentAdd, BiCommentMinus } from 'react-icons/bi';
import { AiOutlineSetting, AiOutlineShoppingCart, AiOutlineCar } from 'react-icons/ai';
import { MdStore } from 'react-icons/md';

export type IconName =
  | 'activity'
  | 'arrow-down'
  | 'arrow-left'
  | 'arrow-right'
  | 'arrow-up'
  | 'bell'
  | 'book'
  | 'car'
  | 'check'
  | 'chevron-down'
  | 'chevron-up'
  | 'comment-min'
  | 'comment-plus'
  | 'delete'
  | 'document'
  | 'dollar'
  | 'edit'
  | 'email'
  | 'eye'
  | 'external-link'
  | 'file'
  | 'grid'
  | 'home'
  | 'image'
  | 'menu'
  | 'more-vertical'
  | 'pdf'
  | 'percentage'
  | 'plus'
  | 'position'
  | 'print'
  | 'refresh'
  | 'search'
  | 'shopping-cart'
  | 'user'
  | 'warehouse'
  | 'wrench'
  | 'x'
  | 'xml'
  | 'key'
  | 'mic'
  | 'logout'
  | 'bars'
  | 'volume'
  | 'store';

interface Props {
  icon: IconName;
  size?: number;
}

type IconObject = {
  [key in IconName]: React.ReactNode;
};

export default function Icon(props: Props): React.JSX.Element {
  const { icon, size = 16 } = props;

  const iconObject: IconObject = {
    'arrow-down': <FeatherIcon name="arrow-down" size={size} />,
    'arrow-left': <FaArrowLeft size={size} />,
    'arrow-right': <FaArrowRight size={size} />,
    'arrow-up': <FeatherIcon name="arrow-up" size={size} />,
    'chevron-down': <FaChevronDown size={size} />,
    'chevron-up': <FaChevronUp size={size} />,
    'comment-min': <BiCommentMinus size={size} />,
    'comment-plus': <BiCommentAdd size={size} />,
    'external-link': <FeatherIcon name="external-link" size={size} />,
    'more-vertical': <FeatherIcon name="more-vertical" size={size} />,
    'shopping-cart': <AiOutlineShoppingCart size={size} />,
    activity: <FeatherIcon name="activity" size={size} />,
    bell: <FeatherIcon name="bell" size={size} />,
    book: <FeatherIcon name="book" size={size} />,
    car: <AiOutlineCar size={size} />,
    check: <FeatherIcon name="check-circle" size={size} />,
    delete: <FeatherIcon name="trash-2" size={size} />,
    document: <FeatherIcon name="credit-card" size={size} />,
    dollar: <FeatherIcon name="dollar-sign" size={size} />,
    edit: <FeatherIcon name="edit-2" size={size} />,
    email: <FeatherIcon name="mail" size={size} />,
    eye: <FeatherIcon name="eye" size={size} />,
    file: <FeatherIcon name="file" size={size} />,
    grid: <FeatherIcon name="grid" size={size} />,
    home: <FeatherIcon name="home" size={size} />,
    image: <FeatherIcon name="image" size={size} />,
    menu: <FeatherIcon name="menu" size={size} />,
    pdf: <BsFiletypePdf size={size} />,
    percentage: <FeatherIcon name="percent" size={size} />,
    plus: <FeatherIcon name="plus" size={size} />,
    position: <FeatherIcon name="map-pin" size={size} />,
    print: <FeatherIcon name="printer" size={size} />,
    refresh: <FeatherIcon name="refresh-cw" size={size} />,
    search: <FeatherIcon name="search" size={size} />,
    user: <FeatherIcon name="user" size={size} />,
    warehouse: <LuWarehouse size={size} />,
    wrench: <AiOutlineSetting size={size} />,
    x: <FeatherIcon name="x" size={size} />,
    xml: <BsFiletypeXml size={size} />,
    store: <MdStore size={size} />,
    key: <FeatherIcon name="key" size={size} />,
    mic: <FeatherIcon name="mic" size={size} />,
    logout: <FeatherIcon name="log-out" size={size} />,
    bars: <FeatherIcon name="bar-chart" size={size} />,
    volume: <FeatherIcon name="volume-2" size={size} />,
  };

  if (!iconObject[icon]) return <span></span>;

  return iconObject[icon] as React.ReactElement;
}
