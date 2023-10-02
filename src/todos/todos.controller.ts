import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiBadRequestResponse,
  ApiParam,
} from '@nestjs/swagger';
import { UpdateTodosDto } from './update-todos.dto';
import { TodosService } from './todos.service';
import { CreateTodosDto } from './create-todos.dto';
import { UUID } from 'crypto';

@ApiTags('todos')
@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  @ApiOperation({ summary: 'Create a todo' })
  @ApiCreatedResponse({
    description: 'The todo has been successfully created.',
  })
  @ApiBadRequestResponse({ description: 'Bad request.' })
  create(@Body() createTodoDto: CreateTodosDto) {
    return this.todosService.create(createTodoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all todos' })
  @ApiOkResponse({ description: 'Returned all todos.' })
  findAll() {
    return this.todosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a todo by id' })
  @ApiOkResponse({ description: 'Returned todo.' })
  @ApiBadRequestResponse({ description: 'Bad request.' })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'ID of the todo to retrieve',
  })
  findOne(@Param('id', ParseUUIDPipe) id: UUID) {
    return this.todosService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a todo by id' })
  @ApiOkResponse({ description: 'Updated todo.' })
  @ApiBadRequestResponse({ description: 'Bad request.' })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'ID of the todo to update',
  })
  update(
    @Param('id', ParseUUIDPipe) id: UUID,
    @Body() updateTodoDto: UpdateTodosDto,
  ) {
    return this.todosService.update(id, updateTodoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a todo by id' })
  @ApiOkResponse({ description: 'Deleted todo.' })
  @ApiBadRequestResponse({ description: 'Bad request.' })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'ID of the todo to delete',
  })
  remove(@Param('id', ParseUUIDPipe) id: UUID) {
    return this.todosService.remove(id);
  }
}
