import { RmqRecord, RmqRecordBuilder } from '@nestjs/microservices';

export function RmqRecordBuilderHelper<T>(data: T): RmqRecord<T> {
  return new RmqRecordBuilder()
    .setOptions({
      contentType: 'application/json; charset=utf-8',
      contentEncoding: 'utf-8',
    })
    .setData(data)
    .build();
}
