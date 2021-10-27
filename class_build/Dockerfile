FROM node:16

WORKDIR /class_build/
# 실행했을때 커서위치
COPY . /class_build/
# 모든 파일을 docker안에 class_build안에 복사

RUN yarn install
RUN yarn build:ssr
# ----- 여기까지가 만들기 ----- #

# ----- 여기가 실행 ----- #

CMD yarn start
# CMD 명령은 파일당 한번밖에 못씀