export interface MerchantDto {
  merchantId: number;
  merchantName: string;
  ownerId: string;
  uri_name: string;
  logoUri: string;
  createdAt: Date;
  updatedAt: Date;
  active: boolean;
}