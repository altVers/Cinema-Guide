import { FC } from "react";
import { Icon } from "../Icon/Icon";
import styles from './Socials.module.css'

export const Socials:FC = () => {
    return <div className={styles.socials}>
        <a className={styles.socials__link} href="#"><Icon id="vk" width="36" height="36"/></a>
        <a className={styles.socials__link} href="#"><Icon id="youtube" width="36" height="36"/></a>
        <a className={styles.socials__link} href="#"><Icon id="ok" width="36" height="36"/></a>
        <a className={styles.socials__link} href="#"><Icon id="tg" width="36" height="36"/></a> 
    </div>
}