const BASE_PATH = process.env.NODE_ENV === "production" ? "/egyptian-tour" : "";

export function assetPath(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${BASE_PATH}${path}`;
}
