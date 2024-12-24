import { Body, Controller, Delete, Get, Param, Put, Res } from '@nestjs/common';
import { Response } from 'express';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

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
