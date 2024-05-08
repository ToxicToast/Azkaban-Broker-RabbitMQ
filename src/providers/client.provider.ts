import { MqttOptions } from "@nestjs/microservices";
import { consumerProvider } from "./consumer.provider";
import { OptionProps } from "./provider.type";

export const clientProvider = (options: OptionProps): MqttOptions => {
  return consumerProvider(options) as MqttOptions;
};
