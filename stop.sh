#!/bin/bash

if [[ $(systemctl show -p SubState --value nginx.service) = running ]]; then
  echo "someone is not dead"
  systemctl stop nginx.service
else
    echo "someone is dead"
fi

rm -r -f /usr/share/nginx/html/temp/*