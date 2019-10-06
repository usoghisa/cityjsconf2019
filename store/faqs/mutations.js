export default {
    set(state, faqs) {
        if (typeof faqs !== 'undefined') {
         state.list = faqs;
        }
    }
}