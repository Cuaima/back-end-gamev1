import { JsonController, Get, Param, Put, Body, NotFoundError, Post, HttpCode, BadRequestError } from 'routing-controllers'
import Game from './entity';
import {jsonBoard, changeColor, colorList} from './library';

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
    //Question: Do we have to allow the update to be a JSON, to then deconstruct and make into a json file again? Because it already is a json when being passed to the database.
    update.id = undefined
    if (update.color !== undefined && !colorList.includes(update.color)) throw new BadRequestError('Please choose an allowed color')
    //Question: wouldn't an easier way to implement the one move per turn policy be to have a move column that updates the board? Or would that actually be more complicated?
    
    //Note: The logic for the single move allowed function should be here. 
    //Basically, I would run the provided `moves` function and detect if the number of moves were greater than one, and if so, throw a similar error to the one in the code above.
    //However, I am somehow unable to map through the arrays. Given more time, I would be able to find the core of the issue.
    //For a test case of this implementation, please check out the readme file.
    return Game.merge(game, update).save()
    }

}