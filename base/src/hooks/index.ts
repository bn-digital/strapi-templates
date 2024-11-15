// bn custom settings

import { createHmac } from "crypto";
import packageMetadata from "../../package.json"

// name is taken from package.json name field
const name = `${process.env.APP_NAME ?? packageMetadata.name.split("/")?.[0].replace("@", "")}` as const
const dnsZone =  process.env.APP_DNSZONE ?? `bndigital.dev`

const app = {
    name: name,
    version: process.env.APP_VERSION ?? "latest",
    domain: process.env.DOMAIN ?? `${name}.${dnsZone}`,
}

const randomSecret = (name: string): string => generateSecret(name, app.name)

const generateSecret: (secretName: string, namespace: string) => string = (secretName, namespace) => {
    return createHmac("sha3-256", namespace).update(secretName).digest("hex");
};

export {randomSecret}