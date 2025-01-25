import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: "mysql",
        host: configService.getOrThrow("MYSQL_HOST"),
        post: configService.getOrThrow("MYSQL_PORT"),
        database: configService.getOrThrow("MYSQL_DATABASE"),
        username: configService.getOrThrow("MYSQL_USERNAME"),
        password: configService.getOrThrow("MYSQL_PASSWORD"),
        autoLoadEntities: true,
        synchronize: configService.getOrThrow("MYSQL_SYNCHRONIZE"), // true on dev, but not on prod
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
