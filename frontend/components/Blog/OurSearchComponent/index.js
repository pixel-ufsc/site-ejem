import styles from "./oursearch.module.css";
import { useEffect, useState } from 'react';
// Hooks
import useDebounce from "../../../hooks/useDebounce";
// Components
import OurPostComponent from "../OurPostComponent";
// Icons
import { AiOutlineSearch } from "react-icons/ai";


export default function OurSearchComponent({ onSearch }) {
    const [searchValue, setSearchValue] = useState('');
    const debouncedSearch = useDebounce(searchValue, 500); // This will make it so the search is only made 500ms after the user stops typing

    useEffect(() => {
        console.log(debouncedSearch)
        onSearch?.(debouncedSearch)
    }, [debouncedSearch])

    return(
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.title}>Blog</div>
                <div className={styles.search}>
                    <button className={styles.button} type="submit"><AiOutlineSearch size={30} color={"#2E4494"}></AiOutlineSearch></button>
                    <input className={styles.input} placeholder="O que você procura?" type="search" onChange={(e) => setSearchValue(e.target.value)}></input>
                </div>
            </div>
        </section>
    )
}
