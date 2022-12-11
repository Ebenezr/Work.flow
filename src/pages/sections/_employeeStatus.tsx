import React from "react";
import { Table, Pagination } from "rsuite";

const { Column, HeaderCell, Cell } = Table;

interface mockUsers {
  employeeName: string;
  jobTitle: string;
  teamLead: string;
  status: string;
}

const mockUsers: mockUsers[] = [
  {
    employeeName: "Cameron Wiliamsonn",
    jobTitle: "Front-end Developer",
    teamLead: "Donatella Nobatti",
    status: "Offboarding",
  },
  {
    employeeName: "Lewis N. Clark",
    jobTitle: "Project Manager",
    teamLead: "Hugo First",
    status: "Onboarding",
  },
  {
    employeeName: "Eneanor Pena",
    jobTitle: "Senior UX Designer",
    teamLead: "Mike Roscope",
    status: "Onboarding",
  },
  {
    employeeName: "Christian Mingle",
    jobTitle: "UX Designer",
    teamLead: "Mike Roscope",
    status: "Onboarding",
  },
  {
    employeeName: "Christian Mingle",
    jobTitle: "UX Designer",
    teamLead: "Mike Roscope",
    status: "Onboarding",
  },
];
const defaultData = mockUsers;

const EmployeeStatus = () => {
  const [limit, setLimit] = React.useState(10);
  const [page, setPage] = React.useState(1);
  const [sortColumn, setSortColumn] = React.useState();
  const [sortType, setSortType] = React.useState();

  const handleChangeLimit = (dataKey: number) => {
    setPage(1);
    setLimit(dataKey);
  };

  return (
    <div className="flex-1 rounded-md border-[1px] border-gray-200 bg-white p-6">
      {/* article header */}
      <div className="flex items-center justify-between gap-3">
        <p className="whitespace-nowrap font-semibold text-neutral-600">
          Employee Status
        </p>
        <div className="flex items-center gap-3">
          <button className="font-base flex items-center gap-2 rounded-md bg-neutral-100 px-4  py-[3px] hover:bg-neutral-200 sm:text-xs md:text-xs lg:text-base">
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-5 w-5 text-neutral-400 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                />
              </svg>
            </>
            Filter & Sort
          </button>
        </div>
      </div>
      {/* content */}
      <div>
        <Table data={defaultData}>
          <Column flexGrow={2} align="left" fixed>
            <HeaderCell>Employee Name</HeaderCell>
            <Cell dataKey="employeeName" />
          </Column>

          <Column flexGrow={2} fixed>
            <HeaderCell>Job Title</HeaderCell>
            <Cell dataKey="jobTitle" />
          </Column>

          <Column flexGrow={2}>
            <HeaderCell>Last Team Lead</HeaderCell>
            <Cell dataKey="teamLead" />
          </Column>

          <Column flexGrow={1}>
            <HeaderCell>Status</HeaderCell>
            <Cell>
              {(rowData) => (
                <p
                  className={`${
                    rowData.status === "Onboarding"
                      ? "text-green-400"
                      : "text-orange-400"
                  } `}
                >
                  {rowData.status}
                </p>
              )}
              {/* className={`${rowData} === "" text-green-400`} */}
            </Cell>
          </Column>
        </Table>
        <div style={{ padding: 20 }}>
          <Pagination
            prev
            next
            first
            last
            ellipsis
            boundaryLinks
            maxButtons={5}
            size="xs"
            layout={["total", "-", "limit", "|", "pager", "skip"]}
            total={defaultData.length}
            limitOptions={[10, 30, 50]}
            limit={limit}
            activePage={page}
            onChangePage={setPage}
            onChangeLimit={handleChangeLimit}
          />
        </div>
      </div>
    </div>
  );
};

export default EmployeeStatus;
