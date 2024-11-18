import { readOnlyEntities, schemaExtension, writeOnlyEntities } from "./extensions"
import type { Core } from '@strapi/strapi';

// automated security settings disables graphQL functions per entity
function extendSchema(strapi: Core.Strapi) {
  const extensionService = strapi.plugin("graphql").service("extension")
  // Disabling CRUD operations for public-facing APIs
  readOnlyEntities.forEach(entity => extensionService.shadowCRUD(entity).disableMutations())
  writeOnlyEntities.forEach(entity => extensionService.shadowCRUD(entity).disableQueries())
  // Decorating schema with custom fields, resolvers and extensions
  extensionService.use(schemaExtension)
}

export { extendSchema }
