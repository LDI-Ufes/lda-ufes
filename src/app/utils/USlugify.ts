export function USlugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/\d+/g, "")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z-]/g, "")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-")
    .toLowerCase();
}