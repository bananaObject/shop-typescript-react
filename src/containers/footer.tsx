import React from 'react';
import FooterList from '../component/footer/footerList';

const Footer:React.FC = () => {
    return (
        <footer className="footer">
            <div className="box-container footer__wrapper">
                <p className="footer__copy">&copy; 2021 Brand All Rights Reserved.</p>
                <FooterList/>
            </div>
        </footer>
    );
};

export default Footer;
