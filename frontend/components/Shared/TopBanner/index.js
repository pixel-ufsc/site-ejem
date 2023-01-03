import styles from "./topBanner.module.css";

function TopBanner({ bgOption, children }) {
  const bgOptions = {
    home: "/shared/TopBanner/back_HOME.png",
    quemSomos: "/shared/TopBanner/back_QUEM-SOMOS.png",
    servicos: "/shared/TopBanner/Servicos.png",
    contato: "/shared/TopBanner/Contato.png",
    blog: "/shared/TopBanner/Blog.png",
    post: "/shared/Background_images/blog_card_web_odd.png",
    ebooks: "/shared/TopBanner/Ebook.png",
  };

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${bgOptions[bgOption]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {children}
    </div>
  );
}

export default TopBanner;

