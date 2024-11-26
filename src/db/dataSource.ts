import {DataSource} from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "node",
    synchronize: false,
    logging: false,
    entities: [(`${__dirname}/entities/**/*{.ts,.js}`)],
    migrations: [(`${__dirname}/migrations/*{.ts,.js}`)],
})
