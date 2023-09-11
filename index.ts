import { nodes } from "membrane";
const { sys_email } = nodes;

export const Root = {
  configure: async (args) => await sys_email.configure({ ...args }).$invoke(),

  send: async (args) => {
    await sys_email.send({ ...args }).$invoke();
  },
};
