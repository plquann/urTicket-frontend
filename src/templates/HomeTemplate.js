import React, { useState } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { Route } from 'react-router-dom';
import { useScrollPosition } from 'hooks/useScrollPosition';

export default function HomeTemplate(props) {
    const [hideOnScroll, setHideOnScroll] = useState(true);

    useScrollPosition(
        ({ prevPos, currPos }) => {
          const isShow = currPos.y > prevPos.y
          if (isShow !== hideOnScroll) setHideOnScroll(isShow)
        },
        [hideOnScroll],
        false,
        false,
        100
    )
    const { Component, ...restRoute } = props;

    return (
        <Route {...restRoute} render={(propsRoute) => {
            return (
                <div className="w-full">
                    <Header show={hideOnScroll}/>
                    <Component {...propsRoute} />
                    <Footer />
                </div>
            )
        }}>
        </Route>
    )
}