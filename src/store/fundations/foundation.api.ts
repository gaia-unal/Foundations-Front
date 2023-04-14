import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { foundation } from "../../foundations/interface/foundation";
import { BasicInformationMember } from "../../foundations/interface/basicInformationMember.interface";
import { member } from "../../foundations/interface/member.interface";

export interface resFoundationHeaders {
  id: string;
  name: string;
}

export const foundationApi = createApi({
  reducerPath: "foundationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ["Foundation", "Member"],

  endpoints: (build) => ({
    getFoundationsHeaders: build.query<resFoundationHeaders[], void>({
      query: () => "foundation",
      providesTags: ["Foundation"],
    }),
    getFoundationById: build.query<foundation, string>({
      query: (id) => `foundation/${id}`,
      providesTags: ["Member"],
    }),
    updateFoundation: build.mutation<
      foundation,
      { foundation: foundation; id: string }
    >({
      query: ({ foundation, id }) => ({
        url: `foundation/${id}`,
        method: "PATCH",
        body: foundation,
      }),
      invalidatesTags: ["Foundation"],
    }),
    createFoundation: build.mutation<foundation, foundation>({
      query: (foundation) => ({
        url: "foundation",
        method: "POST",
        body: foundation,
      }),
      invalidatesTags: ["Foundation"],
    }),
    deleteFoundation: build.mutation<void, string>({
      query: (id) => ({
        url: `foundation/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Foundation"],
    }),
    getMember: build.query<member, string>({
      query: (id) => `member/${id}`,
      providesTags: ["Member"],
    }),
    addMember: build.mutation<foundation, { id: string; member: member }>({
      query: ({ id, member }) => ({
        url: `foundation/${id}/member`,
        method: "POST",
        body: member,
      }),
      invalidatesTags: ["Member"],
    }),
    updateMember: build.mutation<void, { member: member; id: string }>({
      query: ({ member, id }) => ({
        url: `member/${id}`,
        method: "PATCH",
        body: member,
      }),
      invalidatesTags: ["Member"],
    }),
    levelupMember: build.mutation<void, string>({
      query: (id) => ({
        url: `member/${id}/levelup`,
        method: "PATCH",
      }),
      invalidatesTags: ["Member"],
    }),
    deleteMember: build.mutation<void, string>({
      query: (id) => ({
        url: `member/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Member"],
    }),
    customSearch: build.query<
      member[],
      {
        key: string;
        param: string;
        category: string;
      }
    >({
      query: ({ key, param, category }) => ({
        url: `member/search/${category}?param=${param}&key=${key}`,
        method: "GET",
      }),
      providesTags: ["Member"],
    }),
  }),
});

export const {
  useGetFoundationsHeadersQuery,
  useGetFoundationByIdQuery,
  useCreateFoundationMutation,
  useDeleteFoundationMutation,
  useUpdateFoundationMutation,
  useAddMemberMutation,
  useDeleteMemberMutation,
  useGetMemberQuery,
  useUpdateMemberMutation,
  useLevelupMemberMutation,
  useLazyCustomSearchQuery,
} = foundationApi;
