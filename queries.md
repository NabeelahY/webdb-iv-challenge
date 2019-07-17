# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

select Products.ProductName, Categories.CategoryName
from Products
left join Categories on Products.Categoryid = Categories.Categoryid

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

select Orders.OrderId, Shippers.ShipperName
from Orders
left join Shippers on Orders.ShipperId = Shippers.ShipperId
where Orders.OrderDate < '1997-01-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

select Products.ProductName, OrderDetails.Quantity
from OrderDetails
left join Products on OrderDetails.ProductId = Products.ProductId
where OrderDetails.OrderId = 10251

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

select Orders.OrderId, Customers.CustomerName, Employees.LastName
from Orders
join Customers
on Customers.CustomerId = Orders.CustomerId
join Employees
on Employees.EmployeeId = Orders.EmployeeId

### (Stretch) Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

select Categories.CategoryName, count(Products.CategoryId) as Count
from Categories
left join Products
on Products.CategoryId = Categories.CategoryId
group by Products.CategoryId
order by count desc

### (Stretch) Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.

select OrderId, count(ProductId) as ItemCount
from OrderDetails
group by OrderId
