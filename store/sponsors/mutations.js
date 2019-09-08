export default {
    set(state, sponsors) {
        if (typeof sponsors !== 'undefined') {
         state.list = sponsors;
        }
    }
}