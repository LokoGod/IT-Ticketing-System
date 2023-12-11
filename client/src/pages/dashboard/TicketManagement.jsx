import React from "react";
import SidebarLayout from "../../components/Layouts/SidebarLayout";
import TicketManagementTable from "../../components/other/TicketManagementTable";

import { FaAngleRight, FaHouse } from "react-icons/fa6";
import { TbReportAnalytics } from "react-icons/tb";

import { Tooltip } from "react-tooltip";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";

const TicketManagement = () => {
  return (
    <div>
      <SidebarLayout>
        <div className="text-xs m-2">
          <Breadcrumb
            spacing="8px"
            separator={<FaAngleRight color="gray.500" />}
          >
            <BreadcrumbItem>
              <BreadcrumbLink href="#">
                <FaHouse />
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">Ticket Management</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>

        <div className="ml-2 mt-8 flex items-center">
          <h1 className="text-2xl font-bold">Ticket Management</h1>
          <Tooltip id="report" style={{ borderRadius: "10px" }} place="left" />
          <Button
            colorScheme="teal"
            size="md"
            variant="outline"
            className="ml-auto"
            data-tooltip-id="report"
            data-tooltip-content="Get Report"
          >
            <TbReportAnalytics />
          </Button>
        </div>

        <div className="ml-2 mt-5 flex">
          <Input
            className="w-2/3 mr-2"
            variant="outline"
            size="sm"
            placeholder="Outline"
          />

          <Select
            className="w-1/4 mr-2"
            variant="outline"
            size="sm"
            placeholder="Outline"
          />
          <Select
            className="w-1/4 mr-2"
            variant="outline"
            size="sm"
            placeholder="Outline"
          />
          <Select
            className="w-1/4"
            variant="outline"
            size="sm"
            placeholder="Outline"
          />
        </div>

        <TicketManagementTable />
      </SidebarLayout>
    </div>
  );
};

export default TicketManagement;
