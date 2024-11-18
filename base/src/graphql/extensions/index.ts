import resolvers, { resolversConfig } from "../resolvers";
import type * as Nexus from "nexus";
type Nexus = typeof Nexus;

// TODO: check this initial list with strapi services:list output
const readOnlyEntities = ["plugin::users-permissions.permission", "plugin::users-permissions.role"];
const writeOnlyEntities = ["plugin::upload.folder"];

const schemaExtension = ({ nexus}: {nexus: Nexus }) => ({
  types: [
    nexus.extendType<"UsersPermissionsUser">({
      type: "UsersPermissionsUser",
      definition: (t) => {
        t.nonNull.id("id");
      },
    }),
  ],
  resolvers,
  resolversConfig,
});

export { readOnlyEntities, schemaExtension, writeOnlyEntities };
