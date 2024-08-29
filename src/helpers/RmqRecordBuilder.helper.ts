import { RmqRecord, RmqRecordBuilder } from '@nestjs/microservices';

export function RmqRecordBuilderHelper<T>(data: T): RmqRecord<T> {
  return new RmqRecordBuilder(data)
    .setOptions({
      contentType: 'application/json',
      contentEncoding: 'utf-8',
    })
    .build();
}
