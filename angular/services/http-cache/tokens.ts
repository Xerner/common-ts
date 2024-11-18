import { InjectionToken } from "@angular/core";
import { IHttpCacheSettings } from "./interfaces/IHttpCacheSettings";
import { IHttpCacheItem } from "./interfaces/IHttpCache";

/**
 * Injection token for HTTP cache settings.
 * @type {InjectionToken<IHttpCacheSettings>}
 */
export const HTTP_CACHE_SETTINGS = new InjectionToken<IHttpCacheSettings>("HTTP_CACHE_SETTINGS")

/**
 * Injection token for preloaded HTTP cache items.
 * @type {InjectionToken<IHttpCacheItem<any>[]>}
 */
export const PRELOADED_HTTP_CACHE = new InjectionToken<IHttpCacheItem<any>[]>("PRELOADED_HTTP_CACHE")
