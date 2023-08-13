import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import toaster from "../../../utility/toaster";

export const usersService = createApi({
  reducerPath: "userService",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  tagTypes: ["Users", "Status Update"],
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: (payload) => {
        const { page, rowsPerPage, status, search } = payload;
        return {
          url: `users?_page=${page}&_limit=${rowsPerPage}${
            status !== "all" ? `&status=${status}` : ""
          }&q=${search}`,
          method: "GET",
        };
      },
      transformErrorResponse: (response) =>
        toaster.error(response?.data?.message),
      providesTags: ["Users", "Status Update"],
    }),
    getUserDetails: builder.query({
      query: (id) => ({
        url: `users/${id}`,
        method: "GET",
      }),
      transformErrorResponse: (response) =>
        toaster.error(response?.data?.message),
      providesTags: ["Status Update"],
    }),
    addUser: builder.mutation({
      query: (user) => {
        return {
          url: `users`,
          method: "POST",
          body: user,
        };
      },
      transformErrorResponse: (response) =>
        toaster.error(response?.data?.message),
      invalidatesTags: ["Users"],
    }),
    editUser: builder.mutation({
      query: (payload) => {
        const { userData, currentId } = payload;
        return {
          url: `users/${currentId}`,
          method: "PUT",
          body: userData,
        };
      },
      transformErrorResponse: (response) =>
        toaster.error(response?.data?.message),
      invalidatesTags: ["Users"],
    }),
    deleteUser: builder.mutation({
      query: (payload) => {
        const { currentId } = payload;
        return {
          url: `users/${currentId}`,
          method: "DELETE",
        };
      },
      transformErrorResponse: (response) =>
        toaster.error(response?.data?.message),
      invalidatesTags: ["Users"],
    }),
    blockUnblockUser: builder.mutation({
      query: (payload) => {
        const { currentId, apiData } = payload;
        return {
          url: `users/${currentId}`,
          method: "PATCH",
          body: apiData,
        };
      },
      transformErrorResponse: (response) =>
        toaster.error(response?.data?.message),
      invalidatesTags: ["Status Update"],
    }),
  }),
});
export const {
  useGetAllUsersQuery,
  useGetUserDetailsQuery,
  useAddUserMutation,
  useEditUserMutation,
  useDeleteUserMutation,
  useBlockUnblockUserMutation,
} = usersService;
