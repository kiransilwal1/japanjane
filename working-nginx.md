```
upstream japanjane {
    server 127.0.0.1:5000;
}

server {
    listen 80;
    server_name japanjane.com;

    # Redirect all HTTP requests to HTTPS
    return 301 https://\$host\$request_uri;
}

server {
    listen 443 ssl;
    server_name japanjane.com;

    ssl_certificate /etc/letsencrypt/live/japanjane.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/japanjane.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    # Enable rate limiting
    limit_req zone=mylimit burst=20 nodelay;
    location / {
        proxy_pass http://japanjane;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;

        # Disable buffering for streaming support
        proxy_buffering off;
        proxy_set_header X-Accel-Buffering no;
    }
}

```
