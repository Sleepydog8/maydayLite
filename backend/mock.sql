INSERT INTO PERSON VALUES
('1234567890121', 'Firstnameja1', 'Lastnameja1', 'Usernameja1', 'Passwordja1', 'Male', '2000-2-21', '0123456781', 'email@ja.com1', 'profilepic1', 'addressno1', 'street1', 'district1', 'subdistrict1', 'province1', 'postcode1', TRUE, TRUE, FALSE),
('1234567890122', 'Firstnameja2', 'Lastnameja2', 'Usernameja2', 'Passwordja2', 'Female', '2000-2-22', '0123456782', 'email@ja.com2', 'profilepic2', 'addressno2', 'street2', 'district2', 'subdistrict2', 'province2', 'postcode2', TRUE, TRUE, FALSE),
('1234567890123', 'Firstnameja3', 'Lastnameja3', 'Usernameja3', 'Passwordja3', 'Suek', '2000-2-23', '0123456783', 'email@ja.com3', 'profilepic3', 'addressno3', 'street3', 'district3', 'subdistrict3', 'province3', 'postcode3', FALSE, TRUE, FALSE),
('1234567890124', 'Firstnameja4', 'Lastnameja4', 'Usernameja4', 'Passwordja4', 'Suek', '2000-2-24', '0123456784', 'email@ja.com4', 'profilepic4', 'addressno4', 'street4', 'district4', 'subdistrict4', 'province4', 'postcode4', FALSE, TRUE, FALSE);

INSERT INTO SELLER VALUES
('1234567890121', 'shopname1'),
('1234567890122', 'shopname2');

INSERT INTO DADDRESS VALUES
    ('1','1234567890124','Firstnameja3','Lastnameja3','0123456783','addressno1', 'Tiewclub Road','Tiew handsome District','EiEi Sub-district','Kon Lhor Province','99691','ฝากให้อาหารแมวด้วยค้าบ');

INSERT INTO sys_account VALUE
('9999999990','tiewclub','Mayday Bank'),
('9999999991','tiewhandsome','Sleepydog Bank');

INSERT INTO bank_account VALUES 
('1111111110', '1234567890121', 'Mayday Bank', 'Firstnameja1 Lastnameja1'),
('1111111111', '1234567890122', 'Sleepydog Bank', 'Firstnameja2 Lastnameja2');

INSERT INTO ORDERT VALUES
(1, '1234567890123', '9999999990', 1, 5000, 'P', 'TH01234J5678A','ThailandPost', '2021-11-11 13:23:44'),
(2, '1234567890123', '9999999990', 1, 4500, 'P', 'TH01234J5678B','ThailandPost', '2021-11-11 13:24:44'),
(3, '1234567890123', '9999999991', 1, 4500, 'P', 'TH01234J5678C','ThailandPost', '2021-11-11 13:25:44'),
(4, '1234567890123', '9999999991', 1, 4500, 'P', 'TH01234J5678D','ThailandPost', '2021-11-12 13:26:44'),
(5, '1234567890123', '9999999990', 1, 4500, 'P', 'TH01234J5678F','ThailandPost', '2021-11-12 13:40:44');

INSERT INTO PRODUCT VALUES
('1','เสื้อ LV size S color W', 'Louis Vuitton', 'Shirt',  'เสื้อ Louis Vuitton ผู้ชาย ไซส์ S สีขาว', '5000', '4500', 'S', 1, '1234567890121'),
('2','เสื้อ LV size S color B', 'Louis Vuitton', 'Shirt',  'เสื้อ Louis Vuitton ผู้ชาย ไซส์ S สีดำ', '5000', NULL, 'A', NULL, '1234567890121'),
('3','เสื้อ LV size S color R', 'Louis Vuitton', 'Shirt',  'เสื้อ Louis Vuitton ผู้ชาย ไซส์ S สีแดง', '5000', NULL, 'A', NULL, '1234567890121'),
('4','เสื้อ LV size M color W', 'Louis Vuitton', 'Shirt',  'เสื้อ Louis Vuitton ผู้ชาย ไซส์ M สีขาว', '5000', NULL, 'A', NULL, '1234567890121'),
('5','เสื้อ LV size S color W', 'Louis Vuitton', 'Shirt',  'เสื้อ Louis Vuitton ผู้ชาย ไซส์ S สีขาว', '4500', '4500', 'S', 2, '1234567890122'),
('6','เสื้อ LV size S color B', 'Louis Vuitton', 'Shirt',  'เสื้อ Louis Vuitton ผู้ชาย ไซส์ S สีดำ', '4500','4300', 'S', 3, '1234567890122'),
('7','เสื้อ LV size S color R', 'Louis Vuitton', 'Shirt',  'เสื้อ Louis Vuitton ผู้ชาย ไซส์ S สีแดง', '4500', '4205', 'S', 4, '1234567890122'),
('8','รองเท้า Lac color W', 'Lacoste', 'Shoes',  'รองเท้า Lacoste ผู้ชาย ไซส์ 43 สีขาว', '4800', NULL, 'A', NULL, '1234567890122'),
('9','รองเท้า Lac color B', 'Lacoste', 'Shoes',  'รองเท้า Lacoste ผู้ชาย ไซส์ 43 สีดำ', '4800', NULL, 'A', NULL, '1234567890122');

INSERT INTO STOCK VALUES
('1234567890121', 1, '2021-6-7 11:12:13'),
('1234567890121', 2, '2021-6-7 11:12:14'),
('1234567890121', 3, '2021-6-7 11:12:15'),
('1234567890121', 4, '2021-6-7 11:12:16');

INSERT INTO IN_CART VALUES
('1234567890124', '2', '5000', '2021-8-7 11:12:13'),
('1234567890124', '3', '5000', '2021-8-7 11:12:20'),
('1234567890124', '4', '5000', '2021-8-7 11:12:57'),
('1234567890124', '8', '5000', '2021-8-7 11:13:10'),
('1234567890124', '9', '5000', '2021-8-7 11:14:13');
