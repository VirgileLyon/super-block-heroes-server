
import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hero } from './heroes-entity';

@Injectable()
export class HeroesService {

    constructor(@InjectRepository(Hero) private HeroesRepository: Repository<Hero>) { }

    async getHeroes(Hero: Hero): Promise<Hero[]> {
        return await this.HeroesRepository.find();
    }

    async getHero(_id: number): Promise<Hero[]> {
        return await this.HeroesRepository.find({
            select: ["name"],
            where: [{ "id": _id }]
        });
    }

    async createHero(Hero:Hero) {
        this.HeroesRepository.create(Hero);
    }

    async updateHero(Hero: Hero) {
        this.HeroesRepository.save(Hero)
    }

    async deleteHero(Hero: Hero) {
        this.HeroesRepository.delete(Hero);
    }
}