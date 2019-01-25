FROM tomcat:latest
MAINTAINER <450416064@qq.com>
ADD public/ /usr/local/tomcat/webapps/ROOT/ 
ADD run.sh /usr/local/sh/run.sh
RUN chmod a+x /usr/local/sh/run.sh
CMD ["/usr/local/sh/run.sh"]
