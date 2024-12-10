import { useEffect, RefObject } from 'react';

export function useChatScroll<T>(
  ref: RefObject<HTMLDivElement>,
  deps: T[]
) {
  const scrollToBottom = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [deps]);

  return { scrollToBottom };
}