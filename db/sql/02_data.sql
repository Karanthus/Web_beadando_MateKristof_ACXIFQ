-- Insert mock data into Users table
INSERT INTO Users (username, password_hash, email) VALUES ('test one', 'AAB2C', 'testoneemail@example.com');
INSERT INTO Users (username, password_hash, email) VALUES ('test two', 'ACB3C', 'testtwoemail@example.com');
INSERT INTO Users (username, password_hash, email) VALUES ('test three', 'ABB5C', 'testthreeemail@example.com');

-- Insert mock data into Products table
INSERT INTO Products (name, description, price, stock_quantity) VALUES ('Product A', 'Description for Product A', 10.99, 100);
INSERT INTO Products (name, description, price, stock_quantity) VALUES ('Product B', 'Description for Product B', 15.49, 200);
INSERT INTO Products (name, description, price, stock_quantity) VALUES ('Product C', 'Description for Product C', 7.99, 150);

-- Insert mock data into Orders table
INSERT INTO Orders (user_id, total_amount, status) VALUES (1, 21.98, 'completed');
INSERT INTO Orders (user_id, total_amount, status) VALUES (2, 15.49, 'completed');
INSERT INTO Orders (user_id, total_amount, status) VALUES (3, 39.95, 'completed');

-- Insert mock data into OrderItems table
INSERT INTO OrderItems (order_id, product_id, quantity, price) VALUES (1, 1, 2, 10.99);
INSERT INTO OrderItems (order_id, product_id, quantity, price) VALUES (2, 2, 1, 15.49);
INSERT INTO OrderItems (order_id, product_id, quantity, price) VALUES (3, 3, 5, 7.99);
