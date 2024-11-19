// bn custom settings

import { createHmac } from "crypto";
import packageMetadata from "../../package.json"
type AppMode = "development" | "staging" | "production" | "test"
type AppModeBoolean = `is${Capitalize<AppMode>}`
type AppEnv = { mode: AppMode } & Record<AppModeBoolean, boolean>

// name is taken from package.json name field
const name = `${process.env.APP_NAME ?? packageMetadata.name.split("/")?.[0].replace("@", "")}` as const
const dnsZone =  process.env.APP_DNSZONE ?? `bndigital.dev`

// custom object defines the current environment
const env: AppEnv  = {
    mode: process.env.NODE_ENV as AppMode,
    isDevelopment: process.env.NODE_ENV === 'development',
    isStaging: process.env.NODE_ENV === 'staging',
    isProduction: process.env.NODE_ENV === 'production',
    isTest: process.env.NODE_ENV === 'test',
}

// custom object that is being injected into strapi config
const appSettings = {
    name: name,
    version: process.env.APP_VERSION ?? "latest",
    domain: process.env.DOMAIN ?? `${name}.${dnsZone}`,
    workingDir: `${process.cwd()}`,
    env,
    dnsZone,
}

const randomSecret = (name: string): string => generateSecret(name, appSettings.name)

const generateSecret: (secretName: string, namespace: string) => string = (secretName, namespace) => {
    return createHmac("sha3-256", namespace).update(secretName).digest("hex");
};

export {randomSecret, appSettings}