import { JsonController, Get, Param, Put, Body, NotFoundError, Post, HttpCode, BadRequestError } from 'routing-controllers'
import Game from './entity';
import { throws } from 'assert';
// import {jsonBoard} from './library';

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
    // game.board = jsonBoard
    return game.save()
    }

    @Put('/games/:id')
    async updateGame(
    @Param('id') id: number,
    @Body() update: Partial<Game>
    ) {
    const game = await Game.findOne(id)
    if (!game) throw new NotFoundError('Cannot find game')
    update.id = undefined
    if (update.color !== undefined && !colorList.includes(update.color)) throw new BadRequestError('Please choose an allowed color')
    // let findColor = colorList.find((color)=> game.color)
    console.log(Game)
    return Game.merge(game, update).save()
    }

}