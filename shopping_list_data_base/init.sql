
CREATE SCHEMA IF NOT EXISTS merchant;


CREATE table IF NOT EXISTS merchant.merchant_owner (
  user_id BIGSERIAL PRIMARY KEY,
  user_provider_id VARCHAR(255) NOT NULL,
  display_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone_number VARCHAR(20),
  title VARCHAR(100),
  preferred_name VARCHAR(100),
  document_number VARCHAR(50)
);

CREATE index IF NOT EXISTS idx_user_provider_id ON merchant.merchant_owner(user_provider_id);



CREATE table IF NOT EXISTS merchant.address (
  address_id BIGSERIAL PRIMARY KEY,
  merchant_owner_id BIGINT NOT NULL,
  cep VARCHAR(20),
  state VARCHAR(50),
  city VARCHAR(100),
  neighborhood VARCHAR(100),
  street VARCHAR(255),
  number VARCHAR(50),
  complement VARCHAR(255),
  FOREIGN KEY (merchant_owner_id) REFERENCES merchant.merchant_owner(user_id)
);


