import React, { useRef } from 'react';
import MovieBackDrop from 'containers/Movie/components/MovieBackDrop';
import WrapperInfo from 'containers/Movie/components/WrapperInfo';

export default function Details() {
    const scheduleRef = useRef(null);
    // console.log('🚀 ~ file: index.js ~ line 9 ~ Details ~ scheduleRef', scheduleRef);
    console.log('page details')
    const executeScroll = () => scheduleRef.current.scrollIntoView();

    return (
        <>
            <MovieBackDrop />
            <WrapperInfo refProp={scheduleRef} handleScroll={executeScroll} />
        </>
    )
}
