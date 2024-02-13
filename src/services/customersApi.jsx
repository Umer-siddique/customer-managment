import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const customersApi = createApi({
  reducerPath: "customersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/v1/" }),
  endpoints: (builder) => ({
    // Get All Customers
    customers: builder.query({
      query: () => "/customers",
    }),
    // Get one customer
    customer: builder.query({
      query: (id) => `/customers/${id}`,
    }),
    // Create customer
    createCustomer: builder.mutation({
      query: (customer) => ({
        url: "/customers",
        method: "POST",
        body: customer,
      }),
    }),
    // Update Customer
    updateCustomer: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/customers/${id}`,
        method: "PATCH",
        body: rest,
      }),
    }),
    // Delete Customer
    deleteCustomer: builder.mutation({
      query: (id) => ({
        url: `/customers/${id}`,
        method: "Delete",
      }),
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
