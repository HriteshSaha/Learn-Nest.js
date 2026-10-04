import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto.js';
import { updateUserDto } from './dto/update-user.dto.js';

@Controller('users')
export class UsersController {
  @Get("api")
  getUser(@Query("name") name: string){
    const users = {
      "User1": {"id": 1, "name": "Hritesh", "Bike": "BMW"},
      "User2" : {"id": 2, "name": "Animesh", "Bike": "Beneli"}
    }
    if (name) {
      return Object.values(users).filter((user)=>
      user.name.toLowerCase().includes(name.toLowerCase()))
    }
  }
  @Get(":id")
  getSingleUser(@Param("id") id: string){
    return {
      "User1": {"id": 1, "name": "Hritesh", "Bike": "BMW"},
      "User2" : {"id": 2, "name": "Animesh", "Bike": "Beneli"}
    }
  }

  @Post()
  createUser(@Body() createUserDto: createUserDto){
    
    // Logic for what to post

    return {data: createUserDto, message: "User created successfully"}
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() upsateUserDto: updateUserDto){

    // Update Logic

    return {
      data: {id, ...updateUserDto},
      message: "User Updated successfully"
    }
  }

}
