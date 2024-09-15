/*
    NGINX is a web server which is mainly used for load-balancing, http caching, and it acts as a reverse proxy...
    -it can handle upto 10k concurrent requests.
    -cache http requests
    -act as a reverse proxy
    -act as a API gateway
    -load balancer / also serve and cache static files like images and videos. etc...
    -handle SSL certificates

    we can make an NGINX server by running a ubuntu image inside a docker container and nginx runs on port 80.
    if we cd into etc/nginx and then ls we see nginx.conf...

    this nginx.conf is the main file used to configure the nginx server to function
*/

