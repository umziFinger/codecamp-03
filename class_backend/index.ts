import { createConnection } from "typeorm";
import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    fetchBoard: String!
  }

  type Mutation {
    createBoard: Int
  }
`;

const resolvers = {
  Query: {
    fetchBoard: () => {
      //데이터베이스에서 해당하는 데이터 꺼내서 브라우저에 던져주기(응답주기)
      return { writer: "철수", title: "제목입니다" };
    },
  },
  Mutation: {
    createBoard: () => {
      //데이터베이스 데이터 입력하기
      return { message: "성공했습니다", number: 3 };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

createConnection({
  type: "postgres",
  database: "postgres",
  username: "postgres",
  password: "postgres2021",
  port: 5007,
  host: "34.64.221.225",
  entities: [__dirname + "/*.postgres.ts"], // postgres.ts로 끝나는 파일이 전부 테이블이라는 것을 알려줌
  logging: true,
  synchronize: true,
}).then(() => {
  // 연결성공시 실행
  console.log("접속완료!!!");
  server.listen({ port: 4000 });
});

//1. DB 만들기
//2. DB와 연결하기
//3. API 만들기
