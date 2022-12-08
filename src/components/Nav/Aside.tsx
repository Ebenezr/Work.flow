import React from "react";
import { Sidenav, Nav } from "rsuite";
import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import CalendarIcon from "@rsuite/icons/Calendar";
import PageIcon from "@rsuite/icons/Page";
import HelpOutlineIcon from "@rsuite/icons/HelpOutline";
import CreditCardPlusIcon from "@rsuite/icons/CreditCardPlus";
import PeoplesIcon from "@rsuite/icons/Peoples";
import AdminIcon from "@rsuite/icons/Admin";
import GearIcon from "@rsuite/icons/Gear";

const Aside = () => {
  const [expanded, setExpanded] = React.useState(true);
  const [activeKey, setActiveKey] = React.useState("1");
  return (
    <aside className=" h-full w-80 min-w-min max-w-xs border-r-2 border-neutral-200  bg-white">
      <div className="w-full">
        <hr />
        <Sidenav expanded={expanded} defaultOpenKeys={["3", "4"]}>
          <Sidenav.Body>
            <Nav activeKey={activeKey} onSelect={setActiveKey}>
              <Nav.Item eventKey="1" icon={<DashboardIcon />}>
                Overview
              </Nav.Item>
              <Nav.Item eventKey="2" icon={<PageIcon />}>
                Payroll
              </Nav.Item>
              <Nav.Item eventKey="3" icon={<PeoplesIcon />}>
                Employees
              </Nav.Item>
              <Nav.Item eventKey="4" icon={<CreditCardPlusIcon />}>
                Jobs
              </Nav.Item>

              <Nav.Item eventKey="5" icon={<AdminIcon />}>
                Candidates
              </Nav.Item>
              <Nav.Item eventKey="6" icon={<CalendarIcon />}>
                Calendar
              </Nav.Item>

              <Nav.Item eventKey="7" icon={<HelpOutlineIcon />}>
                Get Help
              </Nav.Item>
              <Nav.Item eventKey="8" icon={<GearIcon />}>
                Settings
              </Nav.Item>
            </Nav>
          </Sidenav.Body>
          <Sidenav.Toggle
            expanded={expanded}
            onToggle={(expanded) => setExpanded(expanded)}
          />
        </Sidenav>
      </div>
    </aside>
  );
};

export default Aside;
