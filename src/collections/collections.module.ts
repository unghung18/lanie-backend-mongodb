import { Module } from '@nestjs/common';
import { CollectionsService } from './collections.service';
import { CollectionsController } from './collections.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Collection, CollectionSchema } from 'src/schemas/collection.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Collection.name, schema: CollectionSchema }])],
  controllers: [CollectionsController],
  providers: [CollectionsService],
})
export class CollectionsModule { }
