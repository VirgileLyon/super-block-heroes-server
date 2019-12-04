import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { MonsterModule } from './monster/monsters.module';
import { HeroesModule } from './heroes/heroes.module';
import { ClubModule } from './clubs/clubs.module';
import { CapacityModule } from './capacities/capacities.module';
import { GameModule } from './games/games.module';
import { FriendsModule } from './friends/friends.module';
import { Connection } from 'typeorm';
// import { JwtStrategy } from './auth/JWTStrategy';
// import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    MonsterModule,
    HeroesModule,
    ClubModule,
    CapacityModule,
    GameModule,
    FriendsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
