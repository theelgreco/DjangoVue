import type {ConfigurationParameters} from "@/api";
import {Configuration} from "@/api";

const defaultApiConfigurationParameters: ConfigurationParameters = {
    basePath: window.location.origin,
    headers: {
        'X-Csrftoken': getCsrfToken()
    }
}

function getCsrfToken() : string {
    const regex = /csrftoken=[A-Za-z0-9]*/

    const token = regex.exec(document.cookie)

    return token ? token[0].replace("csrftoken=", "") : ""
}

export const defaultApiConfiguration = new Configuration(defaultApiConfigurationParameters)