import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "./filtersSlice.js";

export const getContacts = (state) => state.contacts.items;

export const getIsLoading = (state) => state.contacts.loading;

export const getError = (state) => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [getContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
