const developmentSiteUrl = "http://localhost:3000";

export function getSiteUrl(): string {
  const configuredSiteUrl = process.env.SITE_URL?.trim();

  if (!configuredSiteUrl) {
    if (process.env.NODE_ENV === "development") {
      return developmentSiteUrl;
    }

    throw new Error(
      "SITE_URL is required in production. Set it to the site's absolute production URL.",
    );
  }

  let siteUrl: URL;

  try {
    siteUrl = new URL(configuredSiteUrl);
  } catch {
    throw new Error(
      `Invalid SITE_URL: "${configuredSiteUrl}". Use an absolute URL such as https://example.com.`,
    );
  }

  if (siteUrl.protocol !== "http:" && siteUrl.protocol !== "https:") {
    throw new Error(
      `Invalid SITE_URL protocol: "${siteUrl.protocol}". Use http:// or https://.`,
    );
  }

  return siteUrl.toString().replace(/\/+$/, "");
}

export function getAbsoluteUrl(path = ""): string {
  const normalizedPath = path.replace(/^\/+/, "");

  return new URL(normalizedPath, `${getSiteUrl()}/`).toString();
}
