Access MySQL with prompt the comand:
mysql -h 'server' -u 'user' -p
mysql -h localhost -u root -p


Criate user:
CREATE USER 'newuser'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
CREATE USER 'foo'@'localhost' IDENTIFIED WITH mysql_native_password BY 'bar';


Grant permission for access database:
GRANT ALL aPRIVILEGES ON * . * TO 'foo'@'localhost';


refesh:

FULSH PRIVILEGES;



sudo npm install mysql --save 