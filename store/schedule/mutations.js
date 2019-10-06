export default {
    set(state, schedule) {
        if (typeof schedule !== 'undefined') {
         state.list = schedule;
        }
    }
}