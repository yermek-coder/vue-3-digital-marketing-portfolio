import { ref, onMounted, onUnmounted, computed, nextTick } from 'vue';

export default (targetClass: string, observerCallback: (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => void) => {
  const observerOptions = {
    rootMargin: '0px',
    threshold: 0.7
  }

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  
  onMounted(() => {
    document.querySelectorAll(`.${targetClass}`).forEach((i) => {
      if (i) {
        observer.observe(i);
      }
    });
  });
  
  onUnmounted(() => {
    observer.disconnect();
  })
}