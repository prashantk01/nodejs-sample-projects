# nodejs-sample-projects

1.  deal with json-object and json-parsing
2.  # weather app using mapbox and weatherstack api's

    =>to run weather-app

    node app.js "your place address"

    It will reflect weather details for address. It works in two steps:-
    i. it takes address from user and uses mapbox api to generate latitude and longitude from entered address.

    ii. later it uses weather stack api and gives forecast from entered location points.

3.  # web-server app

    "node src/app.js"

    => here we have created nodejs express server, and hbs for rendering html (hbs is a express. js wrapper for the handlebars. js javascript template engine).

    => this server, you can host on local only till now.

    => it will ask for address from client side and will fetch api details from localhost url.
