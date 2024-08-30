export interface OptionProps {
  queueName: string;
  noAck?: boolean;
  brokerUsername: string;
  brokerPassword: string;
  brokerHost: string;
  brokerPort: number;
  brokerVHost?: string;
  consumerTag?: string;
  prefetchCount?: number;
}
