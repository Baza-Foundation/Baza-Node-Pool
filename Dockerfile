# Why node:8 and not node:10? Because (a) v8 is LTS, so more likely to be stable, and (b) "npm update" on node:10 breaks on Docker on Linux (but not on OSX, oddly)
FROM node:8-alpine

# Pool will not listen on ports if daemon is not available, so we'll use wait-for-it
# under docker swarm to delay starting pool until daemon is availabel on 11898
ADD https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh /

RUN apk update \
  && apk add npm git boost-dev libressl-dev make \
  && chmod +x /wait-for-it.sh

ADD . /pool/
WORKDIR /pool/

RUN npm update

CMD node init.js
