/**
 * Created by alexandrelegars on 07/12/2016.
 */

var al = al || {};


(function ($, al)
{
    
    //Données mocks object correspondant à la liste des pokemons
    var pokemons;
    /**
     * Document ready event
     * alias de $(document).ready( function(){} );
     */
    $( function ()
    {
        /**
         *  Réception des données du serveur
         *
         */
        var main = function()
        {
            // Liste de pokemons json
            pokemons = new al.models.PokemonsCollection;

            // Annule le message de chargement
            $( "#loading").remove();


            // Renseigne les éléments de la liste
            var pokemonListView = new al.views.PokemonListView
            (
                {
                    el          : "#pokemon_list"
                    , collection: pokemons
                }
            );

            pokemons.add( new al.models.PokemonsModel({ id:1, nom:"Dracaufeu" }));
            pokemons.add( new al.models.PokemonsModel({ id:2, nom:"Bullbizarre" }));
            pokemons.add( new al.models.PokemonsModel({ id:3, nom:"Mewtwo" }));
            pokemons.add( new al.models.PokemonsModel({ id:4, nom:"Tokipri" }));
            pokemons.add( new al.models.PokemonsModel({ id:5, nom:"Roucoups" }));
            // Renseigne les éléments de la liste

        };
        $( "body" ).append( "<h1 id='loading'>Merci de patienter pendant le chargement des données</h1>" );
        // Active une pseudo requête async HTTP
        setTimeout( main, 3000 );
    });
})(jQuery, al);