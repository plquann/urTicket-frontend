import React from 'react';
import './New.scss';
import Page from 'components/Page/Page';
import NewLarge from 'containers/News/components/NewLarge/NewLarge';
import NewMedium from 'containers/News/components/NewMedium/NewMedium';

export default function MainNews() {
    return (
        <Page title="News | UR-TICKET">
            <div className="news max-w-screen-xl mx-auto mt-20">
                <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-2">
                        <NewLarge />
                        <div className="grid grid-cols-3 gap-6">
                            <NewMedium />
                            <NewMedium />
                            <NewMedium />
                        </div>
                    </div>
                    <div className="right">
                        <NewMedium />
                    </div>
                </div>
            </div>
        </Page>
    )
}
