
CREATE SCHEMA IF NOT EXISTS merchant;



CREATE table IF NOT EXISTS merchant.merchant_owner (
  user_id BIGSERIAL PRIMARY KEY,
  user_provider_id VARCHAR(255) NOT NULL UNIQUE,
  display_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone_number VARCHAR(20),
  title VARCHAR(100),
  preferred_name VARCHAR(100),
  document_number VARCHAR(50)
);

CREATE UNIQUE index IF NOT EXISTS idx_user_provider_id ON merchant.merchant_owner(user_provider_id);
