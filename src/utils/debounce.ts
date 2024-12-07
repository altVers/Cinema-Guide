export function debounce(func: Function, delay: number = 300) {
  let timeout: number;

  return function(...args: any[]) {
      clearTimeout(timeout);
      timeout = window.setTimeout(() => func.apply(this, args), delay);
  };
}