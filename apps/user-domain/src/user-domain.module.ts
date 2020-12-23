import { Module } from '@nestjs/common';
import { UserDomainController } from './user-domain.controller';
import { UserDomainService } from './user-domain.service';

import { ServiceBusModule, SbServerOptions } from '@pebula/nesbus';

const sbServerOptions: SbServerOptions[] = [
  {
    client: {
      credentials: {
        connectionString: 'MY_SAS_CONNECTION_STRING',
      },
    },
  },
];
@Module({
  imports: [ServiceBusModule.register({ servers: sbServerOptions })],
  controllers: [UserDomainController],
  providers: [UserDomainService],
})
export class UserDomainModule {}
