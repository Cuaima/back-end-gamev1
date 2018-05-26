import { JsonController, Get, Param, Put, Body, NotFoundError, Post, HttpCode } from 'routing-controllers'
import Game from './entity';

const colorList = ["red", "blue", "green", "yellow", "magenta"] //variables

@JsonController()
export default class GameController {

    @Get('/games')
    async allGames() {
    const games = await Game.find()
    return { games }
    }

    @Post('/games')
    @HttpCode(201)
    createGame(
    @Body() game: Game    
    ) {
    const changeColor = () => colorList[Math.floor(Math.random() * colorList.length)] //functions
    game.color = changeColor()
    return game.save()
    }

    @Put('/games/:id')
    async updateGame(
    @Param('id') id: number,
    @Body() update: Partial<Game>
    ) {
    const game = await Game.findOne(id)
    if (!game) throw new NotFoundError('Cannot find game')
    // let findColor = colorList.find((color)=> game.color)
    console.log(Game)
    return Game.merge(game, update).save()
    }

}