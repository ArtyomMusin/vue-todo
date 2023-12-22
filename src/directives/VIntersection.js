// при появлении элемента el во viewport вызывается коллбек loadMorePosts - binding.value()
export default {
    name: 'intersection',
    mounted(el, binding) {
        // вся логика ниже это логика для браузерного апи IntersectionObserver
        const options = {
            rootMargin: "0px",
            threshold: 1.0,
        };
        const callback = (entries) => {
            if (entries[0].isIntersecting ) {
                binding.value()
            }
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(el)
    }
}