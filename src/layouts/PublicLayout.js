import React from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';


function PublicLayout(props) {

    const { children } = props;

    return (
        <div className="w-full">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default PublicLayout;