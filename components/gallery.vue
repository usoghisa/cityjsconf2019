<template>
    <section class="blackbag">
      <div class="container">
         <div class="row">
            <app-h2
                title="Our Gallery"
                subtitle="join us this year"
                :is-h2="true"
                :white="true"
            >
            </app-h2>
                <div class="columns is-multiline">
                    <div class="column is-12">
                    <div class="polaroid">
                      <img src="/images/previous_year/elle.jpg">
                        <div class="pictitle">
                          <p>ELLE</p>
                        </div>
                      </div>
                    <div class="polaroid">
                      <img src="/images/previous_year/dylan.jpg">
                        <div class="pictitle">
                          <p>DYLAN</p>
                        </div>
                      </div>
                    <div class="polaroid">
                      <img src="/images/previous_year/audience2.jpg">
                        <div class="pictitle">
                          <p>AUDIENCE</p>
                        </div>
                      </div>
                  </div>
                  <div class="column is-12">
                  <div class="polaroid">
                    <img src="/images/previous_year/elle.jpg">
                      <div class="pictitle">
                        <p>ELLE</p>
                      </div>
                    </div>
                  <div class="polaroid">
                    <img src="/images/previous_year/audience.jpg">
                      <div class="pictitle">
                        <p>AUDIENCE</p>
                      </div>
                    </div>
                  <div class="polaroid">
                    <img src="/images/previous_year/elle.jpg">
                      <div class="pictitle">
                        <p>ELLE</p>
                      </div>
                    </div>
                </div>

                </div>
                <!-- <div class="column">
                <div class="polaroid">
                  <img src="/images/previous_year/elle.jpg">
                    <div class="container">
                      <p>ELLE</p>
                    </div>
                  </div>
                <div class="polaroid">
                  <img src="/images/previous_year/audience.jpg">
                    <div class="container">
                      <p>AUDIENCE</p>
                    </div>
                </div>
                <div class="polaroid">
                  <img src="/images/previous_year/elle.jpg">
                    <div class="container">
                      <p>ELLE</p>
                    </div>
                </div>
              </div> -->
                </div>

</div>
                <!-- <div class="column">
                    <img src="/images/previous_year/audience.jpg">
                    <img src="/images/previous_year/cinemas.jpg">
                    <img src="/images/previous_year/elle.jpg">
                </div>
                <div class="column" >
                    <img src="/images/previous_year/cinemas.jpg">
                    <img src="/images/previous_year/audience.jpg">
                    <img src="/images/previous_year/elle.jpg">
                </div>
                <div class="column">
                    <img src="/images/previous_year/dylan.jpg">
                     <img src="/images/previous_year/cinemas.jpg">
                    <img src="/images/previous_year/audience2.jpg"> -->
                </div>
            </div>
        </div>
      </div>
    </section>
</template>

<script>
    import h2 from '@/components/h2';
    export default {
        data: function() {
            return {
                isActive: false
            }
        },
        components: {
            'app-h2': h2,
        },
        computed: {
        },
        props: {
            gallery: Array,
        }
    };
</script>

<style lang="sass" scoped>
    @import '~/assets/css/mq.sass';

    .nopadding
        padding: 0;


    .blackbag
        background: $black;
        padding: 20px;

    .column
        display: flex;
        flex-direction: row;// this is default;


    .polaroid
      width: 80%
      background-color: #FF3332;
      margin: 10px;
      color: black;




    .container
      text-align: center;
      padding: 10px 20px;




</style>
