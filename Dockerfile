# This docker file can be used in kubernetes. 
# It accepts all cluster related parameters at run time. 
# It means it's very easy to add new containers to the cluster 
FROM imenco/antmediaserver-base:2.5.3

WORKDIR /tmp
COPY . vms-management-console/
WORKDIR /tmp/vms-management-console
RUN rsync -av --exclude='.git/' ${PWD}/ /usr/local/antmedia/webapps

EXPOSE 5080 5443

ENTRYPOINT ["/usr/local/antmedia/start.sh"]
