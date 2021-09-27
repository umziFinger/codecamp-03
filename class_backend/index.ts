import { createConnection } from "typeorm";
import { ApolloServer, gql } from "apollo-server";
import Board from "./Boards.postgres";
import Product from "./Products.postgres";

const typeDefs = gql`
  input CreateBoardInput {
    writer: String
    title: String
    age: Int
  }

  input UpdateBoardInput {
    number: Int
    writer: String
    title: String
    age: Int
  }

  input CreateProductInput {
    seller: String
    name: String
    detail: String
    price: Int
  }

  input UpdateProductInput {
    seller: String
    name: String
    detail: String
    price: Int
    number: Int
  }

  type Return {
    message: String
    number: Int
  }

  # input number {
  #   number: Int
  # }

  type Board {
    number: Int
    writer: String
    title: String
    age: Int
  }

  type Product {
    number: Int
    name: String
    seller: String
    detail: String
    price: Int
  }

  type Query {
    fetchBoard(number: Int): Board
    fetchBoards: [Board]
    fetchProduct(number: Int): Product
    fetchProducts: [Product]
  }

  type Mutation {
    # createBoard(writer: String, title: String, age: Int): Return
    createBoard(createBoardInput: CreateBoardInput): Return
    updateBoard(updateBoardInput: UpdateBoardInput): Return
    deleteBoard: Return
    createProduct(createProductInput: CreateProductInput): Return
    updateProduct(updateProductInput: UpdateProductInput): Return
    deleteProduct(number: Int): Return
  }
`;

const resolvers = {
  Query: {
    fetchBoard: async (_: any, args: any) => {
      //데이터베이스에서 해당하는 데이터 꺼내서 브라우저에 던져주기(응답주기)

      const result = await Board.findOne({
        where: { number: args.number, deletedAt: null },
      });
      return { writer: result?.writer, title: result?.title, age: result?.age };
    },

    fetchBoards: async () => {
      const result = await Board.find({ where: { deletedAt: null } });
      return result;
    },

    fetchProduct: async (_: any, args: any) => {
      const result = await Product.findOne({
        where: { number: args.number, deletedAt: null },
      });
      return {
        seller: result?.seller,
        detail: result?.detail,
        price: result?.price,
        name: result?.name,
      };
    },

    fetchProducts: async () => {
      const result = await Product.find({ where: { deletedAt: null } });
      return result;
    },
  },
  Mutation: {
    createBoard: async (_: any, args: any) => {
      //데이터베이스 데이터 입력하기
      //   const result = await Board.insert({
      //     title: args.title,
      //     writer: args.writer,
      //     age: args.age,
      //   });
      const result = await Board.insert({
        ...args.createBoardInput,
        // title: args.createBoardInput.title,
        // writer: args.createBoardInput.writer,
        // age: args.createBoardInput.age,
      });

      return { message: "성공했습니다", number: result.identifiers[0].number };
    },
    updateBoard: async (_: any, args: any) => {
      await Board.update(
        { number: args.updateBoardInput.number },
        { ...args.updateBoardInput }
      ); // 앞에 중괄호 : 조건 // 뒤에 중괄호 : 변경할 값
      return { message: "수정완료" };
    },
    // 삭제를 할때 삭제하는것이 아니라 isDelete등의 state를 활용해 fetchBoards를 하면 isDelete가 false인 것만 조회 하도록 만듬
    // deleteBoard: async () => {
    //   await Board.delete({ number: 4 });
    //   return { message: "삭제완료" };
    // },

    deleteBoard: () => {
      Board.update({ number: 2 }, { deletedAt: new Date() });
      return { message: "삭제완료" };
    },

    createProduct: async (_: any, args: any) => {
      const result = await Product.insert({
        ...args.createProductInput,
      });
      return { message: "상품등록 완료", number: result.identifiers[0].number };
    },

    updateProduct: async (_: any, args: any) => {
      await Product.update(
        { number: args.updateProductInput.number },
        { ...args.updateProductInput }
      );
      return { message: "상품수정완료" };
    },

    deleteProduct: async (_: any, args: any) => {
      await Product.update({ number: args.number }, { deletedAt: new Date() });
      return { message: "삭제완료" };
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
})
  .then(() => {
    // 연결성공시 실행
    console.log("접속완료!!!");
    server.listen({ port: 4000 });
  })
  .catch((error) => {
    console.log(error);
  });

//1. DB 만들기
//2. DB와 연결하기
//3. API 만들기
