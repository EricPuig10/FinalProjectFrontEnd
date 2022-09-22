import {Navbar} from "../components/navbar/Navbar";
import { Sidebar } from "../components/sidebar/Sidebar";
import { CandidatsByBootcampTable } from "../components/tablematerial/CandidatsByBootcampTable";

export const CandidatsByBootcampPage = () => {
  return (
    <>
      <Navbar />
      <div>
        <Sidebar />
        <CandidatsByBootcampTable />
      </div>
    </>
  );
};
