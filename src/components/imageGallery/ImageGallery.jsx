import ImageCard from '../imageCard/ImageCard'
import css from './ImageGallery.module.css'

export default function ImageGallery({ data, onClick, onId }) {

    return (
        <>
            <ul className={css.list}>
				{data.map((item) => (
                        <li key={item.id} className={css.item}>
                            <ImageCard data={item} onClick={onClick} onId={ onId} />	
                        </li>
                                    )
                         )
                }
            </ul>
        </>
    )
}