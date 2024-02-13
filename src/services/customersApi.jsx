import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const customBaseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8000/api/v1/",
  prepareHeaders: (headers, { body }) => {
    const preparedHeaders = new Headers(headers);
    if (body instanceof FormData) {
      // No need to set the boundary manually, let the browser handle it
      preparedHeaders.set("Content-Type", "multipart/form-data");
    } else if (
      typeof body === "object" &&
      !preparedHeaders.has("Content-Type")
    ) {
      // Only set the content-type to json if appropriate
      preparedHeaders.set("Content-Type", "application/json");
    }
    // Return the modified headers
    return preparedHeaders;
  },
});

export const customersApi = createApi({
  reducerPath: "customersApi",
  baseQuery: customBaseQuery,
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
