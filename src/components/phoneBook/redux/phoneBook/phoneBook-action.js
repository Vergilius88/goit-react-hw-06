import ids from "short-id";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("phoneBook/addContact", ({ name, number }) => ({
  payload: {
    id: ids.generate(),
    name,
    number,
  },
}));

const removeContact = createAction("phoneBook/removeContact");

const findContact = createAction("phoneBook/findContact");

export default { addContact, removeContact, findContact };
