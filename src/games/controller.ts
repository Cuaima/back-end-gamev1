import { JsonController, Get, Param, Put, Body, NotFoundError, Post, HttpCode } from 'routing-controllers'
import Game from './entity';

@JsonController()
export default class GameController {

    @Get('/games')
    async allGames() {
    const games = await Game.find()
    return { games }
    }

    @Put('/games/:id')
    async updateGame(
    @Param('id') id: number,
    @Body() update: Partial<Game>
    ) {
    const game = await Game.findOne(id)
    if (!game) throw new NotFoundError('Cannot find game')

    return Game.merge(game, update).save()
    }

    // @Post('/games')
    // @HttpCode(201)
    // createGame(
    // @Body() game: Game
    // ) {
    // return game.save()
    // }

    @Post('/games')
    @HttpCode(201)
    createGame(
    @Body() game: Game    
    ) {
    console.log(game, '-test')
    const colorList = ["red", "blue", "green", "yellow", "magenta"]
    const color = () => colorList[Math.floor(Math.random() * colorList.length)]
    game.color = color()
    return game.save()
    }

}