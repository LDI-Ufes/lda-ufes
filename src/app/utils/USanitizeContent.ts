export const USanitizeContentTSX = (content: string): string => {
  return content
    .replace(/import\s+.*?from\s+["'].*?["'];?\n?/g, "")
    .replace(/const\s+\w+\s*=\s*\(\)\s*=>\s*{/g, "")
    .replace(/return\s*\(/g, "")
    .replace(/\);?\s*};?\s*export\s+default.*?;/g, "")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .replace(/[{}()]/g, "")
    .trim();
};

export const USanitizeContentMDX = (content: string): string => {
  return content
    .replace(/^---[\s\S]*?---/, "")
    .replace(/^```[\s\S]*?```/, "")
    .replace(/^#{1,3}\s/, "");
};
