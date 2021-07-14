import { FC } from "react";
import PenelGroup from "./PenelGroup";
const MyHome: FC = () => {
  return  (
    <div className="home-index oya">
      <PenelGroup />
      {/* <SystemInfo systemInfo={system.info} /> */}
      {/* <MoneyAccessChart /> */}
    </div>
  );
};

export default MyHome;
