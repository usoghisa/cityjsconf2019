export default {
    async get ({commit}, page ) {
        let components = [];
        if(typeof page !== "undefined") {
            for (let index = 0; index < page.widgets.length; index++) {
                if (page.widgets[index].type === 'Component') {

                    await import(`@/components/${page.widgets[index].custom}`).then(comp => {
                         components.push(comp);
                    })
                }
            }
        }
        await commit('set', components);
   },
}

