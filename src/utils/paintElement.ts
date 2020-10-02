export default (id: any) => {
  const element: any = document.getElementById(id);
  element.style.background = '#E50914';
};

export const removeFocus = (id: any, color: any) => {
  const element: any = document.getElementById(id);
  element.style.background = color;
};
