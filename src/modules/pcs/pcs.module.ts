import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PcsController } from '../../controllers/pcs/pcs.controller';
import { PcsService } from '../../services/pcs/pcs.service';
import { Pc, PcSchema } from '../../schemas/pc.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Pc.name, schema: PcSchema }]),
  ],
  controllers: [PcsController],
  providers: [PcsService],
})
export class PcsModule {}