-- Insert mock data into Users table
INSERT INTO Users (username, password_hash, email) VALUES ('test one', 'AAB2C', 'testoneemail@example.com');
INSERT INTO Users (username, password_hash, email) VALUES ('test two', 'ACB3C', 'testtwoemail@example.com');
INSERT INTO Users (username, password_hash, email) VALUES ('test three', 'ABB5C', 'testthreeemail@example.com');
insert into Users(username, password_hash, email) values ('admin', 'admin', 'admin@admin.com');

-- Insert mock data into Products table
INSERT INTO Products (name, description, price, stock_quantity) VALUES ('Product A', 'Description for Product A', 10.99, 100);
INSERT INTO Products (name, description, price, stock_quantity) VALUES ('Product B', 'Description for Product B', 15.49, 200);
INSERT INTO Products (name, description, price, stock_quantity) VALUES ('Product C', 'Description for Product C', 7.99, 150);
INSERT INTO Products (name, description, price, stock_quantity) VALUES ('Product D', 'Description for Product D', 22.99, 50);
INSERT INTO Products (name, description, price, stock_quantity) VALUES ('Product E', 'Description for Product E', 5.99, 300);
INSERT INTO Products (name, description, price, stock_quantity) VALUES ('Product F', 'Description for Product F', 8.49, 120);
INSERT INTO Products (name, description, price, stock_quantity) VALUES ('Product G', 'Description for Product G', 19.99, 80);
INSERT INTO Products (name, description, price, stock_quantity) VALUES ('Product H', 'Description for Product H', 12.99, 180);
INSERT INTO Products (name, description, price, stock_quantity) VALUES ('Product I', 'Description for Product I', 25.99, 30);
INSERT INTO Products (name, description, price, stock_quantity) VALUES ('Product J', 'Description for Product J', 17.49, 60);
INSERT INTO Products (name, description, price, stock_quantity) VALUES ('Product K', 'Description for Product K', 10.49, 200);


-- Insert mock data into Orders table
INSERT INTO Orders (user_id, total_amount, status) VALUES (1, 21.98, 'completed');
INSERT INTO Orders (user_id, total_amount, status) VALUES (2, 15.49, 'completed');
INSERT INTO Orders (user_id, total_amount, status) VALUES (3, 39.95, 'completed');
INSERT INTO Orders (user_id, total_amount, status) VALUES (4, 45.98, 'completed');
INSERT INTO Orders (user_id, total_amount, status) VALUES (1, 27.99, 'pending');
INSERT INTO Orders (user_id, total_amount, status) VALUES (2, 80.49, 'completed');
INSERT INTO Orders (user_id, total_amount, status) VALUES (3, 55.99, 'completed');
INSERT INTO Orders (user_id, total_amount, status) VALUES (4, 12.99, 'pending');
INSERT INTO Orders (user_id, total_amount, status) VALUES (1, 89.97, 'completed');
INSERT INTO Orders (user_id, total_amount, status) VALUES (2, 30.49, 'completed');
INSERT INTO Orders (user_id, total_amount, status) VALUES (3, 19.99, 'completed');
INSERT INTO Orders (user_id, total_amount, status) VALUES (4, 72.98, 'pending');


-- Insert mock data into OrderItems table
INSERT INTO OrderItems (order_id, product_id, quantity, price) VALUES (1, 1, 2, 10.99);
INSERT INTO OrderItems (order_id, product_id, quantity, price) VALUES (2, 2, 1, 15.49);
INSERT INTO OrderItems (order_id, product_id, quantity, price) VALUES (3, 3, 5, 7.99);
INSERT INTO OrderItems (order_id, product_id, quantity, price) VALUES (4, 1, 3, 10.99);
INSERT INTO OrderItems (order_id, product_id, quantity, price) VALUES (4, 2, 2, 15.49);
INSERT INTO OrderItems (order_id, product_id, quantity, price) VALUES (5, 3, 1, 7.99);
INSERT INTO OrderItems (order_id, product_id, quantity, price) VALUES (5, 4, 2, 22.99);
INSERT INTO OrderItems (order_id, product_id, quantity, price) VALUES (5, 5, 4, 5.99);
INSERT INTO OrderItems (order_id, product_id, quantity, price) VALUES (5, 6, 1, 8.49);
INSERT INTO OrderItems (order_id, product_id, quantity, price) VALUES (7, 7, 1, 19.99);
INSERT INTO OrderItems (order_id, product_id, quantity, price) VALUES (7, 8, 3, 12.99);
INSERT INTO OrderItems (order_id, product_id, quantity, price) VALUES (8, 9, 1, 25.99);
INSERT INTO OrderItems (order_id, product_id, quantity, price) VALUES (9, 10, 3, 17.49);
INSERT INTO OrderItems (order_id, product_id, quantity, price) VALUES (9, 11, 2, 10.49);
INSERT INTO OrderItems (order_id, product_id, quantity, price) VALUES (10, 1, 2, 19.99);
INSERT INTO OrderItems (order_id, product_id, quantity, price) VALUES (11, 1, 1, 10.99);
INSERT INTO OrderItems (order_id, product_id, quantity, price) VALUES (11, 2, 2, 15.49);
INSERT INTO OrderItems (order_id, product_id, quantity, price) VALUES (12, 3, 4, 7.99);

