# Pokedex
Utilizing the pokeAPI we pull pokemon that we choose for viewing

## about graphql and apolloserver/express
we are using graphql and apolloserver to manage our pokemon api and possibly manage state on a global sense to keep track of user pokemon, opponent pokemon as well as items. I can use sql and sequalize to map out users and multiple rational databases to communicate and cache certain api calls to reduce to the possible drag time of making large calls

## about React
we can use react to call our apollo queries as well as mutations. Must think about changes in state using usestate vs cache in apollo

## react router
we are only placing the socketio in the battle page that is regulated by useeffect