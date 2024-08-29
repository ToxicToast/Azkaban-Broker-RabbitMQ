import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { OptionProps } from './provider.type';

export const consumerProvider = (
  options: OptionProps,
): MicroserviceOptions => ({
  transport: Transport.RMQ,
  options: {
    queue: options.queueName,
    queueOptions: {
      durable: true,
    },
    urls: [
      `amqp://${options.brokerUsername}:${options.brokerPassword}@${options.brokerHost}:${options.brokerPort}${options.brokerVHost}`,
    ],
    noAck: options.noAck ?? false,
    consumerTag: options.consumerTag,
    prefetchCount: options.prefetchCount,
  },
});
