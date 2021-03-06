CREATE TABLE PERSON(
  CitizenID VARCHAR(13) NOT NULL,
  FirstName VARCHAR(45) NOT NULL,
  LastName VARCHAR(45) NOT NULL,
  Username VARCHAR(45) NOT NULL,
  Password VARCHAR(16) NOT NULL,
  Gender VARCHAR(45) NOT NULL,
  BirthDate DATE NOT NULL,
  PhoneNo VARCHAR(10) NOT NULL,
  Email VARCHAR(45) NOT NULL,
  ProfilePicture VARCHAR(2048) NOT NULL,
  AddressNo VARCHAR(45) NOT NULL,
  Street VARCHAR(45) NOT NULL,
  District VARCHAR(45) NOT NULL,
  SubDistrict VARCHAR(45) NOT NULL,
  Province VARCHAR(45) NOT NULL,
  Postcode VARCHAR(45) NOT NULL,
  BFlag BOOLEAN NOT NULL,
  SFlag BOOLEAN NOT NULL,
  AFlag BOOLEAN NOT NULL,
  PRIMARY KEY (CitizenID)
);

CREATE TABLE SELLER(
    CitizenID VARCHAR(13) NOT NULL, 
    ShopName VARCHAR(45) NOT NULL,
    PRIMARY KEY (CitizenID),
    FOREIGN KEY (CitizenID) REFERENCES PERSON(CitizenID)
);

CREATE TABLE PRODUCT(
  ProductID INT NOT NULL AUTO_INCREMENT,
  Name VARCHAR(45) NOT NULL,
  Brand VARCHAR(45) NOT NULL,
  Category VARCHAR(45) NOT NULL,
  Description VARCHAR(255) NOT NULL DEFAULT '',
  Price Float NOT NULL,
  SoldPrice Float DEFAULT NULL,
  ProductStatus Char NOT NULL,
  OrderID INT DEFAULT NULL,
  CitizenID VARCHAR(13) NOT NULL,
  PRIMARY KEY (ProductID),
  FOREIGN KEY (CitizenID) REFERENCES Seller(CitizenID) ON DELETE CASCADE
);


CREATE TABLE SYS_ACCOUNT (
    AccountNo VARCHAR(10) NOT NULL,
    AccountName VARCHAR(100) NOT NULL,
    BankName VARCHAR(45) NOT NULL,
    PRIMARY KEY (AccountNo)
);

CREATE TABLE BANK_ACCOUNT(
    AccountNo VARCHAR(10) NOT NULL,
    CitizenID VARCHAR(13) NOT NULL,
    BankName VARCHAR(45) NOT NULL,
    AccountName VARCHAR(100) NOT NULL,
    CONSTRAINT pk_BankAccount PRIMARY KEY (CitizenID, AccountNo)
);

CREATE TABLE STOCK(
    CitizenID VARCHAR(13) NOT NULL,
    ProductID INT NOT NULL,
    StockDateTime DATETIME NOT NULL,
    PRIMARY KEY (CitizenID, ProductID),
    FOREIGN KEY (CitizenID) REFERENCES PERSON(CitizenID) ON DELETE CASCADE,
    FOREIGN KEY (ProductID) REFERENCES PRODUCT(ProductID) ON DELETE CASCADE
);

CREATE TABLE DADDRESS (
    DaddressID INT NOT NULL,
    CitizenID VARCHAR(13) NOT NULL,
    FirstName VARCHAR(45) NOT NULL,
    LastName VARCHAR(45) NOT NULL,
    PhoneNo VARCHAR(10) NOT NULL,
    AddressNo VARCHAR(45) NOT NULL,
    Street VARCHAR(45) NOT NULL,
    District VARCHAR(45) NOT NULL,
    SubDistrict VARCHAR(45) NOT NULL,
    Province VARCHAR(45) NOT NULL,
    Postcode VARCHAR(5) NOT NULL,
    Optional VARCHAR(100),
    PRIMARY KEY (DaddressID, CitizenID)
);

CREATE TABLE ORDERT(
  OrderID INT NOT NULL AUTO_INCREMENT,
  BuyerID VARCHAR(13) NOT NULL,
  SysAccountNo VARCHAR(10) DEFAULT NULL,
  DAddressID INT NOT NULL,
  Price FLOAT NOT NULL,
  OrderStatus CHAR NOT NULL,
  TrackingNo VARCHAR(45) DEFAULT NULL,
  LogisticCompany VARCHAR(45) DEFAULT NULL,
  OrderDateTime DATETIME NOT NULL,
  PRIMARY KEY (OrderID),
  FOREIGN KEY (SysAccountNo) REFERENCES SYS_ACCOUNT(AccountNo) ON DELETE CASCADE,
  FOREIGN KEY (DAddressID, BuyerID) REFERENCES DADDRESS(DAddressID, CitizenID) ON DELETE CASCADE
);


CREATE TABLE ADD_TO_WISHLIST(
    AddToWishListDatetime datetime not null,
    CitizenID varchar(13) not null,
    ProductID int not null,
    constraint pk_AddToWishlist primary key (CitizenID, ProductID),
    foreign key (CitizenID) references PERSON(CitizenID) ON DELETE CASCADE,
    foreign key (productid) references product(ProductID) ON DELETE CASCADE
);

CREATE TABLE IN_CART (
    CitizenID VARCHAR(13) NOT NULL,
    ProductID INT NOT NULL,
    Price FLOAT NOT NULL,
    DateTime DATETIME NOT NULL,
    PRIMARY KEY (CitizenID, ProductID),
    FOREIGN KEY (CitizenID) REFERENCES PERSON(CitizenID) ON DELETE CASCADE,
    FOREIGN KEY (ProductID) REFERENCES PRODUCT(ProductID) ON DELETE CASCADE
);


CREATE TABLE TRANSFER_RECORD (
    RecordID INT NOT NULL AUTO_INCREMENT,
    Amount FLOAT NOT NULL,
    TransferRecordDatetime DATETIME NOT NULL,
    AccountNo VARCHAR(10) NOT NULL,
    CitizenID VARCHAR(13) NOT NULL,
    SysAccountNo VARCHAR(10) not null,
    OrderID INT NOT NULL,
    PRIMARY KEY (RecordID),
    CONSTRAINT pk_TransferRecord FOREIGN KEY (CitizenID, AccountNo) REFERENCES BANK_ACCOUNT(CitizenID, AccountNo) ON DELETE CASCADE,
    FOREIGN KEY (SysAccountNo) REFERENCES SYS_ACCOUNT(AccountNo) ON DELETE CASCADE,
    FOREIGN KEY (OrderID) REFERENCES ORDERT(OrderID) ON DELETE CASCADE
);

alter table product add constraint fk_oid FOREIGN KEY (OrderID) REFERENCES Ordert(OrderID);


DELIMITER //
CREATE TRIGGER updateOrderStatus 
AFTER Insert ON TRANSFER_RECORD FOR EACH ROW
BEGIN
    UPDATE Ordert
    SET OrderStatus = "C"
    WHERE Ordert.OrderID = new.OrderID; 
END //
DELIMITER ;

DELIMITER //
CREATE TRIGGER updateProductStatus 
AFTER Update ON Ordert FOR EACH ROW
BEGIN
    IF new.OrderStatus = "O" THEN
        UPDATE Product
        SET ProductStatus = "S"
        WHERE Product.OrderID = new.OrderID;
    END IF;
END //
DELIMITER ;
