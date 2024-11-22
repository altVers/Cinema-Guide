import { FC, ReactNode } from "react"
import styles from './_Container.module.scss'

type Props = {
    children: ReactNode
}

export const Container: FC<Props> = ({children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}