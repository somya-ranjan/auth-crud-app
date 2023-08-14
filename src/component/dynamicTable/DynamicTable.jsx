import React from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { nanoid } from "nanoid";
import NoData from "../errorPage/NoData";

function DynamicTable(props) {
  const {
    column,
    rows,
    handleChangeRowsPerPage,
    handleChangePage,
    page,
    rowsPerPage,
    totalItem,
    isLoading,
  } = props;
  return (
    <TableContainer
      component={Paper}
      sx={{
        position: "relative",
        height: "60vh",
        background: "#edf6f9",
      }}
    >
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {column.map((item) => (
              <TableCell
                key={nanoid()}
                sx={{
                  width: item.maxWidth,
                  textAlign: item.align,
                  backgroundColor: "lightgray",
                  fontWeight: item.fontWeight,
                  textTransform: "capitalize",
                }}
              >
                {item.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody sx={{ background: "#edf6f9" }}>
          {!rows?.length ? (
            <NoData />
          ) : (
            rows?.map((item) => (
              <TableRow key={nanoid()}>
                {column.map((label) => {
                  return (
                    <TableCell
                      key={nanoid()}
                      sx={{
                        width: label.maxWidth,
                        textAlign: label.align,
                        textTransform: label.textTransform,
                      }}
                    >
                      {isLoading ? (
                        <Box fullWidth className="skeleton" />
                      ) : (
                        item[label._id]
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      {rows?.length ? (
        <TablePagination
          sx={{
            backgroundColor: "#edf6f9",
            position: "sticky",
            top: rows?.length <= 5 && "100%",
            bottom: rows?.length > 5 && "0",
            left: "0",
          }}
          component="div"
          count={totalItem}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 15, 30, 50]}
        />
      ) : null}
    </TableContainer>
  );
}

export default DynamicTable;
