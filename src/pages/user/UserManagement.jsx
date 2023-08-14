import React, { useEffect, useState } from "react";
import { Paper, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

// // static import
import AddEditUser from "../../component/popUpModal/AddEditUser";
import DynamicTable from "../../component/dynamicTable/DynamicTable";
import columnData from "../../component/json/userColumn.json";
import Actions from "../../component/Action/Action";
import TableTopBar from "../../component/tableTopBar/TableTopBar";
import DeleteUser from "../../component/popUpModal/DeleteUser";
import { useGetAllUsersQuery } from "../../store/services";

function Main() {
  // initial state
  const navigate = useNavigate();

  // // local state
  const [modalOpen, setModalOpen] = useState({
    open: false,
    currentData: "",
    type: "",
  });
  const [deleteModalOpen, setDeleteModalOpen] = useState({
    open: false,
    currentId: "",
  });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [status, setStatus] = useState("all");
  const [search, setSearch] = useState("");

  // filter list
  const listItem = [
    { name: "All", value: "all" },
    { name: "Active", value: "active" },
    { name: "Blocked", value: "blocked" },
  ];

  // redux state and api calling
  const { data, isLoading } = useGetAllUsersQuery({
    page,
    rowsPerPage,
    status,
    search,
  });

  // insert data
  let rows = [];
  rows = data?.map((item, index) => {
    const actions = (
      <Actions
        view={() => navigate(`/main-page/${item?.id}`)}
        remove={() => handelRemove(item?.id)}
        edit={() => handelEdit(item)}
      />
    );
    const sr_no = index + 1 + page * rowsPerPage;
    return { ...item, actions, sr_no };
  });

  // // function
  const handelRemove = (item) => {
    setDeleteModalOpen({ open: true, currentId: item });
  };

  const handelEdit = (item) => {
    setModalOpen({ open: true, currentData: item, type: "editUser" });
  };

  const downloadFile = (content, filename, contentType) => {
    // Create a excel file
    const excelFile = new Blob([content], { type: contentType });
    const url = URL.createObjectURL(excelFile);

    // Create a link to download it
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", filename);
    link.click();
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  //* Function to export data to excel
  const handelExportToExcel = (tableData) => {
    const excelFileData = [
      ["Sr. No", "User Name", "User Email", "Status"],
      ...tableData?.map((item) => [
        item.sr_no,
        item.name,
        item.email,
        item.status,
      ]),
    ]
      .map((e) => e.join(","))
      .join("\n");
    downloadFile(excelFileData, "User data.csv", "text/csv;charset=utf-8;");
  };

  return (
    <>
      <Grid container justifyContent="center">
        <Grid item py={5} xs={11} sm={10} md={10} lg={9}>
          <Paper sx={{ background: "#edf6f9" }}>
            <TableTopBar
              label="Status"
              list={listItem}
              btnName="Export Data To Excel"
              handelExportData={() => {
                handelExportToExcel(rows);
              }}
              handleStatusChange={handleStatusChange}
              status={status}
              search={search}
              handleSearch={handleSearch}
              handelAddEmployee={() =>
                setModalOpen({ open: true, currentID: "", type: "addUser" })
              }
              disableExportBtn={!rows?.length}
            />

            <DynamicTable
              column={columnData}
              rows={rows}
              isLoading={isLoading}
              handleChangeRowsPerPage={handleChangeRowsPerPage}
              handleChangePage={handleChangePage}
              page={page}
              rowsPerPage={rowsPerPage}
              totalItem={rows?.length > 5 ? 15 : rows?.length}
            />
          </Paper>
        </Grid>
      </Grid>

      {/* add user and edit user */}
      <AddEditUser
        modalOpen={modalOpen.open}
        onClose={() => setModalOpen({ open: false, currentData: "", type: "" })}
        label={modalOpen.type}
        selectedData={modalOpen.currentData}
      />

      {/* Delete user */}
      <DeleteUser
        isOpen={deleteModalOpen.open}
        onClose={() => setDeleteModalOpen({ open: false, currentId: "" })}
        selectedId={deleteModalOpen.currentId}
      />
    </>
  );
}

export default Main;
