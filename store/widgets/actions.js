import fetchLocal from '../fetchlocal';

export default {
    async get ({commit}, page ) {
        let components = [];
        let widgets = [];

        if(typeof page !== "undefined") {
            for (let index = 0; index < page.widgets.length; index++) {
                await fetchLocal.getAllEntries(`widgets`).then(data => {
                    let widget = data.entries.filter((widget) => {
                        return widget._id === page.widgets[index]["_id"]
                    });

                    if (widget[0].type === 'Component') {
                      widgets.push(widget[0]);
                    }
                })
            }

            for (let index = 0; index < widgets.length; index++) {
                await import(`@/components/${widgets[index].custom}`).then(comp => {
                    components.push(comp);
                })
            }
        }

        await commit('set', components);
   },
}