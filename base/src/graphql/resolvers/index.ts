import type { Core } from '@strapi/strapi';
import { url } from "./upload-file";
import { me } from "./user";

const Query = {
  me,
};

const Mutation = {

};

const UploadFile = {
  url,
};

type ResolverConfig = {
  [key: string]: Partial<{
    auth: boolean | { scope: string[] }
    policies: Core.Policy[]
    middlewares: Core.Middleware[]
  }>
}

export const resolversConfig: ResolverConfig = {
  "Query.me": {
    auth: true,
  },
};

export default { Query, Mutation, UploadFile };
