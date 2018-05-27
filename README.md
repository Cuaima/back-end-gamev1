#API GAME WITH KOA AND TYPESCRIPT
##Welcome, traveler!
If you are here, you are either a Codaisseur instructor or you are lost. 
For more information about the requirements for this project, please take a look at [the instructions](https://github.com/Cuaima/back-end-gamev1/blob/step3/instructions.md).

You will find relevant questions, tags and notes as code comments in the sections where such pieces of text are pertinent. These notes demonstrate the shortcommings and the repercussions of decisions made while implementing the code as well as the reasoning behind my implementations.

One particularly baffling requirement for me was that of a type JSON board in the database. I understand that it is a helpful way of visualizing the board, but my main questions about that decision are as follows:
1. The board itself being a two-dimensional array, would it not be more suitable to make this entry of type array? Or at least convert to it?
2. Does this type of input not violate the **first normal form _(1NF)_**? 
I admit I am not entirely sure of what kind of end result is expected of the game, or what kind of edited values the board pieces would consist of, but I personally believe that a beter solution could be having a separate table for the board, which could use a similar notation as that of chess (although in a smaller scale). 
Still, I admit to being entirely clueless about the way the rest of the API should work, so my suggestion might not be the most optimal. 

Thank you for browsing through my little Typescript experiment. 

_Claw_
