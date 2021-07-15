import React from 'react';
import './Profile.scss';
import { PROFILE_COVER } from 'constants/image';
import { TabGroup } from '@statikly/funk'
import { me } from 'containers/Profile/_mocks_/profile';
import MyProfile from 'containers/Profile/components/MyProfile/MyProfile';
import MyFavorites from './components/MyFavorites/MyFavorites';

const TABS_HEAD = [
    'PROFILE INFO',
    'FAVORITES',
    'DISCUSSION',
    'RESERVATION',
];

export default function Profile() {
    return (
        <div className="profile mt-20">
            <div className="profile__wrapper max-w-screen-lg mx-auto">
                <div
                    className="profile__wrapper__info"
                    style={{ backgroundImage: `url(${PROFILE_COVER})` }}
                >
                    <div className="info__avatar">
                        <img className=" rounded-full" src={me.avatarUrl} alt="avatar user" />
                    </div>
                    <div className="info__name">
                        <h1>{me.fullName}</h1>
                    </div>
                </div>
                <div className="profile__wrapper__content mt-8 ">
                    <TabGroup numTabs={4} direction={TabGroup.direction.HORIZONTAL}>
                        <TabGroup.TabList className="content__head h-14 mb-5">
                            {TABS_HEAD.map((item, index) => (
                                <TabGroup.Tab
                                    key={item + index}
                                    index={index}
                                    className=" head__item "
                                    activeClassName="bg-yellow-500 italic"
                                    inactiveClassName=""
                                >
                                    {item}
                                </TabGroup.Tab>
                            ))}
                        </TabGroup.TabList>
                        <div className="pt-6 flex justify-center relative">
                            <TabGroup.TabPanel
                                index={0}
                                className="content__body w-full"
                                activeClassName="translate-y-0 opacity-1"
                                inactiveClassName="opacity-0 translate-y-2"
                            >
                                <div className="max-w-screen-md mx-auto">
                                    <MyProfile me={me} />
                                </div>
                            </TabGroup.TabPanel>
                            <TabGroup.TabPanel
                                index={1}
                                className="content__body w-full"
                                activeClassName="translate-y-0 opacity-1"
                                inactiveClassName="opacity-0 translate-y-2"
                            >
                                <div className="mx-auto max-w-screen-lg" >
                                    <MyFavorites />
                                </div>
                            </TabGroup.TabPanel>

                            <TabGroup.TabPanel
                                index={2}
                                className="content__body w-full"
                                activeClassName="translate-y-0 opacity-1"
                                inactiveClassName="opacity-0 translate-y-2" >
                                item 3
                            </TabGroup.TabPanel>
                            <TabGroup.TabPanel
                                index={3}
                                className="content__body w-full"
                                activeClassName="translate-y-0 opacity-1"
                                inactiveClassName="opacity-0 translate-y-2" >
                                item 4
                            </TabGroup.TabPanel>
                        </div>

                    </TabGroup>
                </div>
            </div>
        </div>
    )
}
