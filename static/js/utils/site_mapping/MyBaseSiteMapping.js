/**
 * @description
 * This class is specifically defined for handling all site mapping related to the django mybase app
 */
class MyBaseSiteMapping {
    /**
     * @description
     * Redirects the user to the specified url.
     * @param url
     * The url to redirect the user to - will be relative to the mybase app base url
     */
    static redirect(url) {
        const normalizedUrl = url.replace(/^\/+/, "");
        window.location.href = `${MyBaseSiteMapping.MYBASE_URL}${normalizedUrl}`;
    }
}
// The name of the my base django app
MyBaseSiteMapping.MYBASE = "mybase";
// The url for the mybase django app
MyBaseSiteMapping.MYBASE_URL = `${window.location.origin}/${MyBaseSiteMapping.MYBASE}/`;
export {};
//# sourceMappingURL=MyBaseSiteMapping.js.map