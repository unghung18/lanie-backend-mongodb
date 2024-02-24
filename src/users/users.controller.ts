import { Controller, Get, Body, Put, Param, Delete, Res, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { Response } from 'express';
import { UserIdRequest } from 'src/logger.middleware';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  findAll(@Res() res: Response) {
    return this.usersService.findAll(res);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Res() res: Response) {
    return this.usersService.findOne(id, res);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: UpdateUserDto, @Res() res: Response) {
    return this.usersService.update(id, body, res);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Res() res: Response) {
    return this.usersService.remove(id, res);
  }


}
