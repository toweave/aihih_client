import Header from "@/components/custom/header/Header";
import { FcProps } from "@/types/fc-props";

import styles from './Frame.module.scss';

const Frame: React.FC<FcProps> = ({children, className = ""}) => {
  return (
    <div className={`root-layout`}>
      <Header></Header>
      <main className={`${className} ${styles.frame} flex flex-1 flex-col`}>
        {children}
      </main>
    </div>
  )
}
export default Frame;