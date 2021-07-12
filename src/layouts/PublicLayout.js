import React from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';


function PublicLayout(props) {
    const { children, withFooter = true } = props;

    return (
        <div className="w-full">
            <Header />
            {children}
            {withFooter && <Footer />}
        </div>
    )
}

export default PublicLayout;