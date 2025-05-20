import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FileModule } from './module/file/module/fileModule';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        FileModule,
    ],
})
export class AppModule { }
