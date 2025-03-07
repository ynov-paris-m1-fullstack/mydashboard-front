export default function Layout({ children }) {
    return (
        <>
            <Header />
            <div className={styles.wrapper}>
                <Sidebar />
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </>
    )
}