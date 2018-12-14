
drop database bamazone_db;
create database bamazone_db;
use bamazone_db;

create table products(
 id integer (11) AUTO_INCREMENT not null,
 product_name varchar(45) not null,
 department_name varchar(45) not null,
 price integer(5) not null,
 stock_quantity integer (5) not null,
 primary key (id)
);

insert into products (product_name, department_name, price, stock_quantity)
value("chicken", "meat", 4, 100); 
insert into products (product_name, department_name, price, stock_quantity)
value("steak", "meat", 8, 50); 
insert into products (product_name, department_name, price, stock_quantity)
value("lampchop", "meat", 10, 30); 
insert into products (product_name, department_name, price, stock_quantity)
value("garlic", "produce", 3, 50); 
insert into products (product_name, department_name, price, stock_quantity)
value("coffee bean", "bulk", 7, 100); 
insert into products (product_name, department_name, price, stock_quantity)
value("lemon", "produce", 2, 80);
 
insert into products (product_name, department_name, price, stock_quantity)
value("kale", "produce", 1, 30); 
insert into products (product_name, department_name, price, stock_quantity)
value("nuts", "bulk", 6, 40); 
insert into products (product_name, department_name, price, stock_quantity)
value("sugar", "bulk", 2, 100); 
insert into products (product_name, department_name, price, stock_quantity)
value("salt", "bulk", 4, 20);

select * from products;