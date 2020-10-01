---
layout: blog
title: Cara membuat aplikasi NEST.JS Pertama kalian
authors:
  - Fliw
draft: false
date: 2020-10-01T08:18:05.009Z
thumbnail: /images/uploads/1_czxaov35etfe545eiugfqq.png
tags:
  - Nest
  - Javascript
---
Halo Kembali lagi bersama mimin, kali ini mimin akan memberi tutorial singkat bagaimana cara membuat aplikasi website menggunakan NEST.JS.

> NEST JS? Apaan lagi tuh?

mimin comot dari google, nest js adalah :

> NestJS is a framework for a fast development of backend applications whose structure, inspired from Angular, makes it perfect for the realization of projects with MEAN stack.

jadi nest js adalah sebuah framework backend, mirip lah sama seperti express. terinspirasi dari angular, sangat powerful di linkungan MEAN.

link nest js sendiri adalah : [https://nestjs.com/](https://nestjs.com/?ref=hackernoon.com)

### Kapan kita menggunakan NESTJS?

Nest paling cocok untuk mengembangkan aplikasi yang mengelola Request yang banyak dengan Proses data yang kecil di server dan waktu respons yang cepat (e-commerce, Chattingan, dll ..).

### Kenapa harus menggunakan NESTJS?

Banyak banget gais manfaat NEST JS, yang paling penting adalah :

**Type Checking** 

dengan typescript (TS) nest js mengeksploitasi semua kekuatan javascript tanpa mengalami masalah Type.


**Modular**

melalui pembagian menjadi modul kita dapat mengisolasi komponen kita berdasarkan batas domain.


**Injeksi Ketergantungan**

berkat wadah DI kami dapat menulis kode yang dipisahkan dan dapat diuji.


**Adaptor**

Nest mengintegrasikan semua pustaka javascript / skrip yang paling banyak digunakan dan diuji komunitas serta menyediakan semua alat yang dibutuhkan pengembang untuk berkontribusi pada koleksi.


**Angular Like**

struktur yang sudah dikenal memungkinkan kita untuk dengan mudah beralih dari frontend ke backend tanpa harus mengubah pendekatan pengembangan setiap saat.


**CLI**

kami dapat mengembangkan fungsionalitas kami tanpa harus khawatir tentang boilerplate awal.

### Gas Ngoding!

tugas kita ngapain aja? EZ kok cuma TODO list.

* Ambil semua daftar todo (GET)
* Mengambil satu todo (GET \[Id])
* memasukkan todo (POST)
* Edit Todo (PUT)
* delete todo (DELETE)

**STEP 0: Setting up**

Install nest menggunakan NPM :

`npm i -g @nestjs/cli`

`nest new todoBackend`

jalankan `npm run start `

![](/images/uploads/h8xg6re8hlz4ckmajshvvs5r2pj2-ct404tef.png)

**STEP 1: Modul**

Modul adalah mekanisme yang memungkinkan kita untuk memisahkan komponen kita berdasarkan domain tempatnya dan, dalam praktiknya, untuk menginstruksikan kontainer tentang interaksinya dalam fase bootstrap.

Modul utama yang menjalankan bootstrap disebut modul root dan, dalam aplikasi yang dihasilkan melalui CLI, kami menemukannya di folder src di bawah nama AppModule.

Aplikasi kita, karena sangat kecil dan dengan satu fungsionalitas, dapat langsung mengeksploitasi modul root untuk mengelola dependensinya. Setidaknya ada dua alasan bagus kami tidak melakukan ini dalam panduan ini:

* Ini bukan kasus biasa dan akibatnya sulit untuk diterapkan dalam konteks nyata.
* module tidak akan dipisahkan, sehingga kehilangan kemudahan pemeliharaan dan portabilitas kode module.

```typescript
@Module({
  imports: [],
  providers: [],
  controllers: []
})
export class TodoModule {}
```

Saat dibuat, CLI juga akan menangani pembaruan AppModule dengan mengimpor TodoModule sebagai modul fitur 🎉

**STEP 2: Entitas**

Entitas adalah kelas yang memetakan tabel (atau kumpulan) database kita.

Mimin membuat entitas melalui CLI:

`nest generate class todo/entities/Todo --no-spec`

```typescript
export class Todo {
  
  public id: number;
  public title: string;
  public completed: boolean;

  public constructor(title: string) {
    this.title = title;
    this.completed = false;
  }

}
```

**STEP 3: Repositori**

Sekarang kita memiliki entitas kita, kita hanya perlu Menggunakannya melalui ORM!

Untuk panduan ini mimin telah memutuskan untuk menggunakan Typeorm dan menyiapkan koneksi dasar ke database sqlite.

Pertama tama, kita install dulu dependensinya :

`npm i @nestjs/typeorm typeorm sqlite3`

Mimin memodifikasi AppModule dengan mengimpor TypeOrmModule dengan metode statis forRoot, konfigurasi yang kalian butuhkan:

```typescript
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      autoLoadEntities: true,
      synchronize: true,
      database: path.resolve(__dirname, '..', 'db.sqlite')
    }),
    TodoModule
  ]
})
export class AppModule {}
```

Mari tambahkan TypeOrmModule juga di TodoModule, kali ini menggunakan metode forFeature, untuk menentukan Todo sebagai entitas (database) yang akan dikelola:

```typescript
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([Todo])
  ],
  providers: [],
  controllers: []
})
export class TodoModule {}
```

Sekarang setelah mimin mengonfigurasi Typeorm, mimin akhirnya dapat memperbarui entitas Todo mimin dengan semua anotasi yang diperlukan:

```typescript
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public title: string;

  @Column()
  public completed: boolean;

  public constructor(title: string) {
    this.title = title;
    this.completed = false;
  }
}
```

Sobat digitalkode dapat membaca informasi lebih lanjut tentang Typeorm dan penjelasannya dengan melihat tautan yang dilampirkan paling atas.

Untuk metode TypeOrmModule forRoot dan forFeature, kalian dapat melihat bagian database di dokumentasi resmi NestJS: https://docs.nestjs.com/techniques/database

**STEP 4: DTO**

Untuk menghindari mengekspos entitas mimin di logika mimin, mimin menetapkan sekumpulan kelas yang akan digunakan untuk mengelola komunikasi masuk dan keluar dari services mimin: DTO (Data transfer Object).

```typescript
export class AddTodoDto {

  public readonly title: string;

  public constructor(opts?: Partial<AddTodoDto>) {
    Object.assign(this, opts);
  }

}
```

```typescript
export class EditTodoDto {

  public readonly title: string;
  public readonly completed: boolean;

  public constructor(opts?: Partial<EditTodoDto>) {
    Object.assign(this, opts);
  }

}
```

```typescript
export class TodoDto {

  public readonly id: number;
  public readonly title: string;
  public readonly completed: boolean;

  public constructor(opts?: Partial<TodoDto>) {
    Object.assign(this, opts);
  }

}
```

**STEP 5: Service**

services adalah "paket" di mana mimin akan merangkum logika mimin, semacam nerawang fitur yang bakal dipakai.

kuy tentuin object services kita:

`nest generate service todo/services/todo`

Dalam layanan yang dibuat, mimin mengimplementasikan metode  **findAll** ,  **findOne** ,  **add** ,  **edit**  dan  **delete**  yang, melalui DTO, akan digunakan oleh controller.

Untuk memisahkan logika konversi dari Entitas ke DTO (dan sebaliknya) dari logika, mari kita buat TodoMapperService:

`nest generate service todo/services/TodoMapper`

```typescript
import { Injectable } from '@nestjs/common';
import { Todo } from '../../entities';
import { TodoDto } from '../../dto';

@Injectable()
export class TodoMapperService {

  public modelToDto({ id, title, completed }: Todo): TodoDto {
    return new TodoDto({ id, title, completed });
  }

}
```

Sekarang mari kita terapkan TodoService kita: kita input melalui Dependency Injection, Todo Repository yang disediakan oleh Typeorm dan TodoMapperService kita:

```typescript
import { isNullOrUndefined } from 'util';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from '../../entities';
import { TodoDto, AddTodoDto, EditTodoDto } from '../../dto';
import { TodoMapperService } from '../todo-mapper/todo-mapper.service';

@Injectable()
export class TodoService {

  public constructor(
    @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
    private readonly todoMapper: TodoMapperService
  ) {}

  public async findAll(): Promise<TodoDto[]> {
    const todos = await this.todoRepository.find();
    return todos.map(this.todoMapper.modelToDto);
  }

  public async findOne(id: number): Promise<TodoDto> {
    const todo = await this.todoRepository.findOne(id);
    if (isNullOrUndefined(todo)) throw new NotFoundException();
    return this.todoMapper.modelToDto(todo);
  }


  public async add({ title }: AddTodoDto): Promise<TodoDto> {
    let todo = new Todo(title);
    todo = await this.todoRepository.save(todo);
    return this.todoMapper.modelToDto(todo);
  }

  public async edit(id: number, { title, completed }: EditTodoDto): Promise<TodoDto> {
    let todo = await this.todoRepository.findOne(id);

    if (isNullOrUndefined(todo)) throw new NotFoundException();

    todo.completed = completed;
    todo.title = title;

    todo = await this.todoRepository.save(todo);

    return this.todoMapper.modelToDto(todo);
  }

  public async remove(id: number): Promise<Todo> {
    let todo = await this.todoRepository.findOne(id);

    if (isNullOrUndefined(todo)) throw new NotFoundException();

    todo = await this.todoRepository.remove(todo);

    return todo;
  }

}
```

**STEP 6: Controller**

Di sini kita berada di lapisan terakhir pendakian ke gunung NestJS! Anjayy wkkwk ⛰

Untuk membuat pengontrol, mimin akan menggunakan CLI NEST yang sangat berguna untuk terakhir kalinya dengan perintah ini:

`nest generate controller todo/controllers/todo`

kuy terapin metode yang bakal mirror rest lainnya yang mimin cantumin di awal artikel, Dikasih rute dan jan lupa untuk kaitin (hooking) rute dengan TodoService nya.

```typescript
import { TodoService } from './../services/todo/todo.service';
import { TodoDto, AddTodoDto, EditTodoDto } from './../dto';

import {
  Controller, 
  Get,
  Param,
  Post,
  Put,
  Body,
  Delete
} from '@nestjs/common';


@Controller('todos')
export class TodoController {

  public constructor(private readonly todoService: TodoService) {}

  @Get()
  public findAll(): Promise<TodoDto[]> {
    return this.todoService.findAll();
  }

  @Get(':id')
  public findOne(@Param('id') id: number): Promise<TodoDto> {
      return this.todoService.findOne(id);
  }

  @Put(':id')
  public edit(@Param('id') id: number, @Body() todo: EditTodoDto): Promise<TodoDto> {
      return this.todoService.edit(id, todo);
  }

  @Post()
  public add(@Body() todo: AddTodoDto): Promise<TodoDto> {
      return this.todoService.add(todo);
  }

  @Delete(':id')
  public remove(@Param('id') id: number): Promise<TodoDto> {
      return this.todoService.remove(id);
  }

}
```

**STEP 7: Validasi**

DTO nya udah kenceng nih tapi ada yang kurang, yaitu validasi requestnya.

Untuk menangani validasi field kita, NestJS menyediakan pipa validasi yang memanfaatkan library class-transformer dan class-validator. Untuk dapat menggunakannya, kita perlu menginstal dependensinya:

`npm i class-transformer class-validator`

Mari tambahkan ValidationPipe ke pipa global:

```typescript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.listen(3000);
}
bootstrap();
```

jangan lupa dekorasi DTO nnya:

```typescript
import { IsNotEmpty } from 'class-validator';

export class EditTodoDto {

  @IsNotEmpty()
  public readonly title: string;

  public readonly completed: boolean;

  public constructor(opts?: Partial<EditTodoDto>) {
    Object.assign(this, opts);
  }

}
```

Setelah aplikasi kita dikompilasi, semua DTO yang telah kita definisikan sejauh ini akan diubah menjadi objek javascript, ini berarti tidak ada pemeriksaan jenis yang akan dilakukan pada field.

> JAVASCRIPT SAMPAI UBANAN PUN TETAP JAVASCRIPT :laughing:

library kelas-validator juga memiliki satu set validator yang dirancang khusus untuk memeriksa field kita saat runtime:

```typescript
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class EditTodoDto {

  @IsString()
  @IsNotEmpty()
  public readonly title: string;

  @IsBoolean()
  public readonly completed: boolean;

  public constructor(opts?: Partial<EditTodoDto>) {
    Object.assign(this, opts);
  }

}
```

**STEP 8: GAS Jalan**

Simpel kok gais, cuma jalanin command NPM nya:

`npm run start`

kalau mau debugging, commandnya:

`npm run start:debug`

**STEP 9: CORS**

hayooo! tak jamin pasti diantara kalian yang lagi consume API backend dari frontend pasti dicegat sama si CORS ini, karna ini lagi belajar todo aja, kita enable CORS all ya (jangan gunain method ini di production, berabe nanti)

```typescript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.enableCors();

  await app.listen(3000);
}
bootstrap();
```

**STEP 10: Testing**

kita wajib testing aplikasi ya, untuk memeriksa fungsionalitas aplikasi kita.. sebenernya waktu generate new component via CLI kita dibuatkan test file juga, kuy buat:

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { TodoService } from './todo.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Todo } from './../../entities';
import { repositoryMockFactory, MockType } from './../../../utils/test/repository.mock';
import { TodoMapperService } from './../todo-mapper/todo-mapper.service';
import { Repository } from 'typeorm';

describe('TodoService', () => {
  let service: TodoService;
  let repository: MockType<Repository<Todo>>;
  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TodoService,
        TodoMapperService,
        { provide: getRepositoryToken(Todo), useFactory: repositoryMockFactory }
      ],
    }).compile();
    repository = module.get<Repository<Todo>>(getRepositoryToken(Todo)) as unknown as MockType<Repository<Todo>>;
    service = module.get<TodoService>(TodoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should throws exception when todo not exists', async () => {
    repository.findOne.mockReturnValue(Promise.resolve(null));
    await expect(service.findOne(1)).rejects.toThrow('Not Found');
  });

});
```

Sip! aplikasi kita sudah jadi dan work yaa.

### Konklusi

Dengan membuat aplikasi yang dijelaskan dalam artikel ini,kalian dapat melihat secara langsung seberapa cepat dan kuat framework ini: memungkinkan kalian menjadi sangat cepat dan fleksibel tanpa harus menyerah sama sekali. NestJS lulus ujian dengan suara terbanyak dan pantas menempati tempatnya di daftar teratas framework untuk pengembangan web. anjay gak tuh wkwk :laughing:



Demikian Artikel dari saya, semoga bermanfaat, Terimakasih!

\#KeepLearning_KeepNgoding