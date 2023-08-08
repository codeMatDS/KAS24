// import Link from "next/link";
import Layout from "../components/Layout";
import data from "../utils/ui_text.json";
import Tabs from "../components/Tabs";
import TabPanel from "../components/TabPanel";
import { useState } from "react";

// type Props = {
// items: User[]
// }

// const WithStaticProps = ({ items }: Props) => (

const IndexPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  // const [state, setState] = useState<State>({
  //   activeTab: 0,
  // });

  const handleTabChange = (newTabIndex: number) => {
    // setState({ activeTab: newTabIndex });
    setActiveTab(newTabIndex);
  };

  return (
    //   place-items-center p-4
    <Layout title="Home | Next.js + TypeScript Example">
      <main className="grid justify-items-center min-h-screen mt-[253px]  text-white">
        <h1 className="sr-only">{data.title}</h1>
        <div className="grid  w-full max-w-[1110px] lg:grid-cols-[0.9273fr_3fr] gap-[30px]" style="HEIGHT: fit-content;">
          <div className="rounded-2xl bg-dark-blue">
            {/*  */}
            <div className="flex p-6 flex-row items-center lg:items-start gap-5 lg:gap-[38px] lg:flex-col rounded-2xl bg-blue lg:profile">
              <img
                src="/images/image-jeremy.png"
                alt="Jeremy Robson"
                width={84}
                height={84}
                className="w-16 lg:w-[84px] rounded-full border-[3px] border-white"
              />
              <p className="flex flex-col lg:name-padding text-[15px] text-pale-blue">
                {data.reportText}
                <span className="clamp-title mt-0.5 lg:leading-[48px] font-light text-white font-rubik">
                  {data.reportFor}
                </span>
              </p>
            </div>

            <Tabs activeTab={activeTab} setActiveTab={handleTabChange} />
          </div>

          <div className="h-full">
            {data.timeFrames.map((mode, index) => (
              <TabPanel
                key={`tab-panel-${index}`}
                activeIndex={activeTab}
                index={index}
                mode={mode.toLowerCase() as "daily" | "weekly" | "monthly"}
              />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;
