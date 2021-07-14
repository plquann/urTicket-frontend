import React, { useRef } from 'react';
import MovieBackDrop from 'containers/Movie/components/MovieBackDrop/MovieBackDrop';
import WrapperInfo from 'containers/Movie/components/WrapperInfo/WrapperInfo';
import Page from 'components/Page/Page';

export default function Details() {
    const scheduleRef = useRef(null);
    console.log('page details');
    
    const executeScroll = () => scheduleRef.current.scrollIntoView();

    return (
        <Page title="Movie | UR-TICKET">
            <MovieBackDrop />
            <WrapperInfo refProp={scheduleRef} handleScroll={executeScroll} />
        </Page>
    )
}
