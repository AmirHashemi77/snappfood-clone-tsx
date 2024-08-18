import { FC, PropsWithChildren } from "react";
import style from "./SideBarItemWrapper.module.scss";

const SideBarItemWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className={style.wrapper}>{children}</div>;
};
export default SideBarItemWrapper;
