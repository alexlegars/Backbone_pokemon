/**
 * Created by alexandrelegars on 07/12/2016.
 */
var al = al || {};


( function( $, al )
{
    // Namespace des modèles
    al.models = al.models || {};
    // Données et models
    /* Pokemon { id:1, nom:"jack" }  */
    al.models.PokemonsModel = Backbone.Model.extend(
        {
            defaults :
            {
                nom: ""
            }
        }
    );
    /* PokemonCollection [ new Pokemon(), new Pokemon() ]  */

    al.models.PokemonsCollection = Backbone.Collection.extend
    (
        {
            model : al.models.PokemonsModel
        }
    );

} )( jQuery, al );

