#/bin/bash

hosts="192.168.100.29 192.168.100.30"
cmd=$@

for foo in ${hosts}; do
  echo "run with ${foo}"
  ${cmd/HOSTHOST/${foo}}
  echo "======================"
done;

