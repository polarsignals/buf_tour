// package: payment.v1alpha1
// file: payment/v1alpha1/payment.proto

import * as jspb from "google-protobuf";
import * as google_type_money_pb from "../../google/type/money_pb";

export class Order extends jspb.Message {
  getOrderId(): string;
  setOrderId(value: string): void;

  getRecipientId(): string;
  setRecipientId(value: string): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): google_type_money_pb.Money | undefined;
  setAmount(value?: google_type_money_pb.Money): void;

  getPaymentProvider(): PaymentProviderMap[keyof PaymentProviderMap];
  setPaymentProvider(value: PaymentProviderMap[keyof PaymentProviderMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Order.AsObject;
  static toObject(includeInstance: boolean, msg: Order): Order.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Order, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Order;
  static deserializeBinaryFromReader(message: Order, reader: jspb.BinaryReader): Order;
}

export namespace Order {
  export type AsObject = {
    orderId: string,
    recipientId: string,
    amount?: google_type_money_pb.Money.AsObject,
    paymentProvider: PaymentProviderMap[keyof PaymentProviderMap],
  }
}

export interface PaymentProviderMap {
  PAYMENT_PROVIDER_UNSPECIFIED: 0;
  PAYMENT_PROVIDER_STRIPE: 1;
  PAYMENT_PROVIDER_PAYPAL: 2;
  PAYMENT_PROVIDER_APPLE: 3;
}

export const PaymentProvider: PaymentProviderMap;

