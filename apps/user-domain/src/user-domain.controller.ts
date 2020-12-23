import { Controller, Get } from '@nestjs/common';
import { UserDomainService } from './user-domain.service';

@Controller()
export class UserDomainController {
  constructor(private readonly userDomainService: UserDomainService) {}

  @Get()
  getHello(): string {
    return this.userDomainService.getHello();
  }
}
