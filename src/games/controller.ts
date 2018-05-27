import { JsonController, Get, Param, Put, Body, NotFoundError, Post, HttpCode, BadRequestError } from 'routing-controllers'
import Game from './entity';
import {jsonBoard, moves, changeColor, colorList} from './library';

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
    game.color = changeColor()
    game.board = jsonBoard
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
    console.log('************This is game board-->',game.board, '**************This is update board-->', update.board)
    // if (update.board !== undefined && moves(game.board, update.board)> 1) throw new BadRequestError('Please make only one move per turn')
    return Game.merge(game, update).save()
    }

}