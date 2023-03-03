import styles from './tagsfilter.module.css';

export default function TagsFilter({ postsData, onChangeSelected }) {
    return (
        <div className={styles.container}>
            <>
                <input type="radio" name="categoria" onClick={() => onChangeSelected?.('')} id="Todos" defaultChecked />
                <label htmlFor="Todos">Todos</label>
            </>

            {postsData?.map((post) => {
                // Creates one button for each 'categoria' tag from API
                return post.attributes.categorias.data.map((categoria) => {
                    return (
                        <>
                            <input
                                type="radio"
                                name="categoria"
                                key={categoria.id}
                                onClick={() => onChangeSelected?.(categoria.attributes.tag)}
                                id={categoria.attributes.tag}
                            />
                            <label htmlFor={categoria.attributes.tag}>{categoria.attributes.tag}</label>
                        </>
                    );
                });
            })}
        </div>
    );
}
