import './components/meteoComponent.js'
 
 new Vue({
    el:'#app',
    data: {
        renderKey:0,
        une_ville:"Sainte-Sophie",
        prochaine_ville:""
    },
    methods:{
        re_render: function(){
            this.une_ville = this.prochaine_ville;
            this.renderKey += 1;
        },
        interval_re_render: function(){
            this.renderKey += 1;
        },
      /*  changer_ville: function(){  
            this.une_ville = this.prochaine_ville;

        },*/
        start_interval: function(){
            setInterval(this.interval_re_render,60000)
        }
    },
    mounted(){
       // this.ma_ville = "Sainte-sophie"
       this.start_interval()

    },


})