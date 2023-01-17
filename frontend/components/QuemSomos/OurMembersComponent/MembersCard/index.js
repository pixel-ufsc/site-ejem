import styles from "./card.module.css";
// import Image from 'next/image'

export default function MembersCard({nome, cargo, foto}) {
    console.log(foto)
    return(
        <section className={styles.section}>
            <div className={styles.imageContainer}>
                <img src={foto} width="166" height="195"  alt="membros"></img>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.name}>{nome}</div>
                <div className={styles.description}>
                    {cargo}
                </div>
            </div>
        </section>
    )
}