import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyAFtVB7BpJTXcRdgf7l2KZSaZXSS7_fY08',
      libraries: 'places', 
    },
})