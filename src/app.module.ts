import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DepartamentosModule } from './modules/departamentos/departamentos.module';
import { EmpleadosModule } from './modules/empleados/empledos.module';
import { PcsModule } from './modules/pcs/pcs.module';
import { HealthController } from './controllers/health/health.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),

    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>(
          'MONGO_URI',
          'mongodb://localhost:27017/prueba',
        ),
      }),
    }),

    DepartamentosModule,
    EmpleadosModule,
    PcsModule,
  ],
  controllers: [
    AppController,
    HealthController,
  ],
  providers: [
    AppService,
  ],
})
export class AppModule {}