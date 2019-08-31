export default {
    set(state, pages) {
        if (typeof pages !== 'undefined') {
        state.list = pages.sort(function(a, b) {
            return a.orderOnTopMenu-b.orderOnTopMenu
        });
        }
    },
    current(state, page) {
        return state.current = page;
    }
}