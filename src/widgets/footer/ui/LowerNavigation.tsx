import { Link } from "react-router-dom";
import { FooterList } from "../consts";
import s from './style.module.scss'

export const LowerNavigation: React.FC = () => {

  return (
    <div className={s.nav}>
      {FooterList.map((item) => (
        <Link to={'/'}
          key={item.label}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};