import { RmqOptions } from '@nestjs/microservices';
import { consumerProvider } from './consumer.provider';
import { OptionProps } from './provider.type';

export const clientProvider = (options: OptionProps): RmqOptions => {
  return consumerProvider(options) as RmqOptions;
};
