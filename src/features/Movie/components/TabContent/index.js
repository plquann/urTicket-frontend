import { TabGroup } from '@statikly/funk';

export default function TabContent({ index, content }) {
    console.log("🚀 ~ index", index);

    return (
        <TabGroup.TabPanel
            index={index}
            className="py-16 transition transform duration-700 "
            activeClassName="opacity-100 translate-x-0"
            inactiveClassName="absolute opacity-0 -translate-x-2"
        >
            {content}
        </TabGroup.TabPanel>
    );
}