import { RmqRecord, RmqRecordBuilder } from '@nestjs/microservices';

export function RmqRecordBuilderHelper<T>(data: T): RmqRecord<T> {
  const dataString = JSON.stringify(data);
  const base64String = Buffer.from(dataString).toString('base64');
  return new RmqRecordBuilder(base64String)
    .setOptions({
      contentType: 'application/json; charset=utf-8',
      contentEncoding: 'utf-8',
    })
    .build();
}
