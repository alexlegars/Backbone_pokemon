/**
 * Created by alexandrelegars on 07/12/2016.
 */
var al = al || {};

(function ($, al) {

    al.views = al.views || {};

    al.views.PokemonView = Backbone.View.extend
    (
        {
            tagName : "li",
            model   : null,
            template : _.template( $( "#pokemon-template" ).html() ),
            initialize: function()
            {
                this.listenTo( this.model, "change", this.render );
                this.render();
            },
            events :
            {
                "click a": "linkClicked"
            },
            render: function()
            {
                this.$el.html( this.template( this.model.toJSON() ) );
                return this;// chaining API
            },
            linkClicked : function( event )
            {
                var pokemonRef = this;
                this.$el
                    .append
                    (
                        "<input type='text' placeholder='Modifier la valeur du nom' value='"
                        + this.model.get( "nom" )
                        +"' />"
                    )
                    .children( "input" )
                    .focus()
                    .change
                    (
                        function()
                        {
                            var newpokemon = $(this).val().split( " " );
                            //pokemonRef.$el.trigger( "datachange", {model:pokemonRef.model, values:newpokemon} );
                            // Vérification des données saisies
                            if( newpokemon.length < 2 )
                            {
                                pokemonRef.render();
                                return;
                            }
                            // Modification des valeurs du Model associé
                            pokemonRef.model.set
                            (
                                {
                                    "nom"    : newpokemon
                                }
                            );
                        }
                    )
                    .end()
                    .children( "a" )
                    .hide( "slow" );
                return false;
            }
        }
    );

    al.views.PokemonListView = Backbone.View.extend
    (
        {
            collection : null,
            initialize : function()
            {
                // Liaison événementielle entre la collection et la vue
                //this.collection.on( "add", this.addPokemon, this );
                this.listenTo( this.collection, "add", this.addPokemon );
            },
            addPokemon : function( pokemon )
            {
                var pokemonView =  new al.views.PokemonView( { model : pokemon } );
                this.$el.append(  pokemonView.el );// child views
            }
        }
    );
})( jQuery, al );