type TabsPropsType = {
    tabs: string[];
    currentTab: string;
    setCurrentTab: any;
};
export default function Tabs({ tabs, currentTab, setCurrentTab }: TabsPropsType) {
    return (
        <ul className="flex flex-wrap gap-2 border border-text/50 rounded-md px-2 py-1 text-xs sm:text-sm">
            {tabs.map((tab: string) => (
                <li
                    role="button"
                    key={tab}
                    onClick={() => setCurrentTab(tab)}
                    className={`hover:opacity-90 active:opacity-80 uppercase ${
                        currentTab === tab ? "text-primary" : "text-text"
                    }`}
                >
                    {tab}
                </li>
            ))}
        </ul>
    );
}
