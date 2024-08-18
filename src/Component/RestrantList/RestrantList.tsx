import { FC, PropsWithChildren } from "react";
import style from "./RestrantList.module.scss";

const RestrantList: FC<PropsWithChildren> = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};
export default RestrantList;
