import { USER_AGENT } from "../constants/strings";

const uFetch = async (
    url: string,
    param?: Record<string, number | string | undefined>,
    postBody?: object,
) => {
    // Construct fetch parameters
    const defaultInit = {
        headers: {
            "User-Agent": USER_AGENT,
            "Content-Type": "application/json",
        },
        method: postBody === undefined ? "GET" : "POST",
        mode: "cors",
    };
    const init = postBody === undefined ? defaultInit : {
        ...defaultInit,
        body: JSON.stringify(postBody),
    };

    // Concat the URL
    const serializedParam =
        param === undefined
            ? ""
            : Object.keys(param)
                .filter((key: string) => param[key] !== undefined)
                .map((key: string) => key + ("=" + param[key]))
                .join("&");
    const paramedURL = url + (serializedParam === "" ? "" : "?" + serializedParam);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const respose = await fetch(paramedURL, init);
    return await respose.json();
};

export { uFetch };