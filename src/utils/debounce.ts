export default function debounce(
  func: () => void,
  timer: number,
  timerId: NodeJS.Timeout | null
) {
  if (timerId) {
    clearTimeout(timerId);
  }
  return setTimeout(() => {
    func();
  }, timer);
}
