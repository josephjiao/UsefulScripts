
iptables -A INPUT  -p tcp --dport 1082 -j DROP 
iptables -A INPUT  -p tcp --dport 8086 -j DROP 
iptables -A INPUT  -p tcp --dport 8087 -j DROP 
