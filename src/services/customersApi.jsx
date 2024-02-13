import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const customersApi = createApi({
  reducerPath: "customersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1/",
    prepareHeaders: (headers, { body }) => {
      if (body instanceof FormData) {
        return headers;
      }
      return {
        ...headers,
        "Content-Type": "application/json",
      };
    },
  }),
  tagTypes: ["Customer"],
  endpoints: (builder) => ({
    // Get All Customers
    customers: builder.query({
      query: () => "/customers",
      providesTags: ["Customer"],
    }),
    // Get one customer
    customer: builder.query({
      query: (id) => `/customers/${id}`,
      providesTags: ["Customer"],
    }),
    // Create customer
    createCustomer: builder.mutation({
      query: (formData) => ({
        url: "/customers",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Customer"],
    }),
    // Update Customer
    updateCustomer: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/customers/${id}`,
        method: "PATCH",
        body: rest,
      }),
      invalidatesTags: ["Customer"],
    }),
    // Delete Customer
    deleteCustomer: builder.mutation({
      query: (id) => ({
        url: `/customers/${id}`,
        method: "Delete",
      }),
      invalidatesTags: ["Customer"],
    }),
  }),
});

export const {
  useCustomersQuery,
  useCustomerQuery,
  useCreateCustomerMutation,
  useUpdateCustomerMutation,
  useDeleteCustomerMutation,
} = customersApi;
