import { FC } from "react";
import { GenreCard } from "../GenreCard/GenreGard";
import genresImgArr from "../../data/genresImages";
import styles from './_GenresList.module.scss'


type Props = {
    genres: string[]
}

const imgArr = genresImgArr

export const GenresList: FC<Props> = ({genres}) => {
    const dataArr = []
    for (let index = 0; index < genres.length; index++) {
        dataArr.push([genres[index], imgArr[index]])   
    }
    return (
        <ul className={styles['genres-list']}>
            {dataArr.map((genre, index) => {
                return <li key={index}>
                    <GenreCard imgSrc={genre[1]} genre={genre[0]}/>
                </li>
            })}
        </ul>
    )
}