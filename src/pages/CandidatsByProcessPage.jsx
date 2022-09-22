import {Navbar} from "../components/navbar/Navbar";
import { Sidebar } from "../components/sidebar/Sidebar";
import { CandidatsByProcessTable } from "../components/tablematerial/CandidatsByProcessTable";

export const CandidatsByProcessPage = () => {
  return (
    <>
      <Navbar />
      <div>
        <Sidebar />
        <CandidatsByProcessTable />
      </div>
    </>
  );
};
