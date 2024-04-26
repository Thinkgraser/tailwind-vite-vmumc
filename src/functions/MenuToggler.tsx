export default function MenuToggler(id: string) {
  let dropdown = document.getElementById(id);
  dropdown?.classList.toggle("hidden");
}
