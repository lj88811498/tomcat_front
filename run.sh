#!/bin/sh
source /etc/profile
/usr/local/tomcat/bin/startup.sh
tail -f /usr/local/tomcat/logs/catalina.out