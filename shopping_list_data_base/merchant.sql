CREATE TABLE IF NOT EXISTS merchant.merchant (
  merchant_id BIGSERIAL PRIMARY KEY,
  merchant_name VARCHAR(255) NOT NULL,
  owner_id BIGINT NOT NULL,
  merchant_phone_number VARCHAR(20),
  merchant_document_number VARCHAR(50),
  FOREIGN KEY (owner_id) REFERENCES merchant.merchant_owner(user_id)
);