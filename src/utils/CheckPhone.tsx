export default function CheckPhone(id: string): boolean {
  const input = document.getElementById(id) as HTMLInputElement;
  return !input.value.includes("_");
}
