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
      `amqp://${options.brokerUsername}:${options.brokerPassword}@${options.brokerHost}:${options.brokerPort}/${options?.brokerVHost}`,
    ],
    noAck: options.noAck ?? false,
    consumerTag: options.consumerTag,
    prefetchCount: options.prefetchCount,
    headers: {
      content_type: 'application/json',
      content_encoding: 'utf-8',
    },
    persistent: true,
  },
});
