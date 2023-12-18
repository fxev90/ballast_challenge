FROM webdevops/php-apache:8.2

WORKDIR /library_api

COPY ./library_api/composer*.json ./

COPY ./library_api .

ENV WEB_DOCUMENT_ROOT=$WEB_DOCUMENT_ROOT
ENV WEB_ALIAS_DOMAIN=$WEB_ALIAS_DOMAIN
# OAuth
RUN apt update
RUN apt install -y libpcre3 libpcre3-dev libpq-dev && pecl install oauth \
    && echo "extension=oauth.so" > /usr/local/etc/php/conf.d/docker-php-ext-oauth.ini
    
RUN pecl install -o -f redis \
&&  rm -rf /tmp/pear \
&&  docker-php-ext-enable redis

RUN docker-php-ext-install mysqli pgsql pdo pdo_mysql pdo_pgsql
RUN composer install
#RUN php artisan migrate --seed

EXPOSE 80