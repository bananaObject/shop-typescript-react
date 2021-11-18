import React from 'react';
import FooterList from './footerList/footerList';
import styles from './style/style.module.scss';

const Footer:React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.wrp}>
                <p className={styles.copy}>&copy; 2021 Brand All Rights Reserved.</p>
                <FooterList/>
            </div>
        </footer>
    );
};

export default Footer;
