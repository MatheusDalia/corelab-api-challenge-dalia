import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateTodosDto } from './create-todos.dto';
import { UpdateTodosDto } from './update-todos.dto';
import { PrismaService } from 'src/infra/prisma/prisma.service';
import { Todo } from '@prisma/client';

@Injectable()
export class TodosService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createItemDto: CreateTodosDto): Promise<Todo> {
    try {
      return await this.prisma.todo.create({ data: createItemDto });
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async findAll(): Promise<Todo[]> {
    return this.prisma.todo.findMany();
  }

  async findOne(id: string): Promise<Todo> {
    // Correct the id type
    const todo = await this.prisma.todo.findUnique({ where: { id } });
    if (!todo) throw new NotFoundException(`Todo with id ${id} not found`);
    return todo;
  }

  async update(id: string, updateTodoDto: UpdateTodosDto): Promise<Todo> {
    // Correct the id and return type
    let updatedTodo;
    try {
      updatedTodo = await this.prisma.todo.update({
        where: { id },
        data: updateTodoDto,
      });
    } catch (error) {
      if (error.code === 'P2025')
        throw new NotFoundException(`Todo with id ${id} not found`);
      throw new BadRequestException(error);
    }
    return updatedTodo;
  }

  async remove(id: string): Promise<Todo> {
    let removedTodo;
    try {
      removedTodo = await this.prisma.todo.delete({ where: { id } });
    } catch (error) {
      if (error.code === 'P2025')
        throw new NotFoundException(`Todo with id ${id} not found`);
      throw new BadRequestException(error);
    }
    return removedTodo;
  }
}
