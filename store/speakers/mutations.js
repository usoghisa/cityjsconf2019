export default {
    set(state, speakers) {
        if (typeof speakers !== 'undefined') {
          state.list = speakers;
        }
    }
}