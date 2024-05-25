FROM node:latest
RUN npm install -g gatsby-cli
WORKDIR /app

# use this if you dont have project and want to using starter project
# RUN gatsby new . https://github.com/gatsbyjs/gatsby-starter-default

# use this if you have your own project
# COPY my-gatsby-site /app

CMD [ "gatsby", "develop", "--host=0.0.0.0" ]