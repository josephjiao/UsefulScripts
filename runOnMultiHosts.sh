#/bin/bash

hosts="192.168.100.29 192.168.100.30"

for foo in ${hosts}; do
  echo "run on ${foo}"
  ssh ${foo} "$@"
  echo "======================"
done;

