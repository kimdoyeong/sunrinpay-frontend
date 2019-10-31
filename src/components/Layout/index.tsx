import React from 'react'
import logo from '../../assets/logo.svg';
import style from './index.module.css';

interface LayoutProps {
    children: React.ReactNode
}
function Layout({ children }: LayoutProps) {
    return (
        <div className={style.wrap}>
            <header className={style.header}>
                <nav className={style.nav}>
                    <img src={logo} alt="Sunrinpay" className={style.logo} />
                </nav>
            </header>
            <main className={style.main}>
                {children}
            </main>
        </div>
    )
}

export default Layout;