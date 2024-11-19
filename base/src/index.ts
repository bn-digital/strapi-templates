 import type { Core } from '@strapi/strapi';
 import {extendSchema} from "./graphql";
 import {appSettings} from "./hooks";

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register( { strapi }: { strapi: Core.Strapi } ) {
    strapi.config.set("app", appSettings);
    extendSchema(strapi);
  },


  bootstrap( { strapi }: { strapi: Core.Strapi } ) {
    strapi.log.info(`[APP] Destination domain: ${strapi.config.get("app.domain")}`);
    strapi.log.info(`[APP] Application: ${strapi.config.get("app.name")}, version: ${strapi.config.get("app.version")}`);
    strapi.log.info(`[APP] Database Engine: ${strapi.config.get("database.connection.client")}`);
  },
};
