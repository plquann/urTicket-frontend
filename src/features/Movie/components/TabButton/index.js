import { TabGroup } from '@statikly/funk';

export default function TabButton({ index, title }) {
    console.log("🚀 ~ title", title);

    return (
        <TabGroup.Tab
            index={index}
            className="py-2 px-14 mb-2 font-bold uppercase rounded-full transition ease-in duration-300 mx-2 focus:outline-none hover:shadow-btn-shadow"
            activeClassName="bg-btn-gradient"
            inactiveClassName="text-white"
            style={{ border: "1px solid #11326f" }}
        >
            {title}
        </TabGroup.Tab>
    );
}