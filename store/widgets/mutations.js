export default {
    set(state, widgets) {
        if (typeof widgets !== 'undefined') {
         state.list = widgets;
        }
    }
}