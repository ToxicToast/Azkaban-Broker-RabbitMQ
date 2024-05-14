export interface OptionProps {
  queueName: string;
  noAck?: boolean;
  brokerUsername: string;
  brokerPassword: string;
  brokerHost: string;
  brokerPort: number;
  consumerTag?: string;
}
