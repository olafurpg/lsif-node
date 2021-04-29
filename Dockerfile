FROM sourcegraph/src-cli:3.16.1@sha256:b5dd688d25557eaa5fb0ec33cf2cc15a87bc72a7f5d9efa6d5e461644e93ac09 AS src-cli

FROM node:14.16-alpine3.10@sha256:13f795b32f45c64be28aeb5263b23c9bf74707d21c07c4161d423ccab03a3fd1

ARG TAG

RUN apk add --no-cache git

COPY --from=src-cli /usr/bin/src /usr/bin

RUN npm install -g @sourcegraph/lsif-tsc@${TAG}

CMD ["/bin/sh"]
