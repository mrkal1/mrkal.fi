#!/bin/bash



if [[ $(systemctl show -p SubState --value nginx.service) = dead ]]; then
  echo "someone is dead"
  systemctl start nginx.service
else
    echo "someone is not dead"
fi


cp -a -f . /usr/share/nginx/html/temp