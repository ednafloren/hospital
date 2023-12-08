-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 06, 2023 at 08:40 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `automated_health_inventory_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `alembic_version`
--

CREATE TABLE `alembic_version` (
  `version_num` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `alembic_version`
--

INSERT INTO `alembic_version` (`version_num`) VALUES
('93cd810429e0');

-- --------------------------------------------------------

--
-- Table structure for table `dispensed_stocks`
--

CREATE TABLE `dispensed_stocks` (
  `medical_supply_quantity` varchar(250) DEFAULT NULL,
  `medicine_quantity` varchar(250) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `status` varchar(100) DEFAULT NULL,
  `medical_supply_id` int(11) DEFAULT NULL,
  `medicine_id` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` varchar(255) DEFAULT NULL,
  `updated_at` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dispensed_stocks`
--

INSERT INTO `dispensed_stocks` (`medical_supply_quantity`, `medicine_quantity`, `id`, `status`, `medical_supply_id`, `medicine_id`, `created_by`, `created_at`, `updated_at`) VALUES
('2packets', '3ackets', 1, 'awaiting dispensery', 7, 1, 1, '2023-11-14 00:39:05.162290', '2023-11-14 00:39:05.162290'),
('4packets', '6packets', 3, 'dispensed', 8, 2, 1, '2023-11-23 23:56:49.218700', '2023-11-24 07:57:54.847968');

-- --------------------------------------------------------

--
-- Table structure for table `medical_supplies`
--

CREATE TABLE `medical_supplies` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `unit_price` varchar(10) DEFAULT NULL,
  `image` varchar(200) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `medical_supply_category_id` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` varchar(255) DEFAULT NULL,
  `updated_at` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `medical_supplies`
--

INSERT INTO `medical_supplies` (`id`, `name`, `unit_price`, `image`, `stock`, `medical_supply_category_id`, `created_by`, `created_at`, `updated_at`) VALUES
(4, 'Thermometer', '600', 'https://m.media-amazon.com/images/I/610lBxabhTL.jpg', 50, 1, 1, '2023-11-08 05:49:13.973516', '2023-11-08 14:00:19.143279'),
(5, 'blood pressure cuffs', '500', 'https://www.medgadget.com/wp-content/uploads/2020/03/Blood-Pressure-Cuffs-Market.jpg', 50, 1, 1, '2023-11-08 23:47:46.408026', '2023-11-09 07:48:44.858669'),
(6, 'Sphygmomanometers', '7000', 'https://c8.alamy.com/comp/FJ206N/aneroid-sphygmomanometer-on-white-background-FJ206N.jpg', 25, 1, 1, '2023-11-08 23:50:50.236833', '2023-11-09 07:51:41.303195'),
(7, 'Bandges', '2000', 'https://images.squarespace-cdn.com/content/v1/5715285107eaa055b9fad7fd/1587430200986-QFKVKIKL8GAG05MN3SUQ/SDP-PROD-18-FR.png', 15, 2, 2, '2023-11-08 23:57:56.289251', '2023-11-09 08:02:48.355095'),
(8, 'Sterile gauze', '1000', 'https://m.media-amazon.com/images/I/61g6eIsXVpL.jpg', 15, 2, 2, '2023-11-09 00:00:32.426580', '2023-11-09 08:01:33.404106'),
(10, 'Syringes', NULL, 'https://media.post.rvohealth.io/wp-content/uploads/2021/02/insulin-syringe-syringes-732x549-thumbnail-732x549.jpg', 65, 4, 2, '2023-11-30 04:38:59.812234', '2023-11-30 04:38:59.812234');

-- --------------------------------------------------------

--
-- Table structure for table `medical_supply_categories`
--

CREATE TABLE `medical_supply_categories` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` varchar(255) DEFAULT NULL,
  `updated_at` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `medical_supply_categories`
--

INSERT INTO `medical_supply_categories` (`id`, `name`, `created_by`, `created_at`, `updated_at`) VALUES
(1, 'Diagnostic Instruments', 1, '2023-11-08 03:45:55.968773', '2023-11-09 08:18:05.419996'),
(2, 'Wound Care Supplies', 1, '2023-11-08 03:52:45.508320', '2023-11-08 03:52:45.508320'),
(3, 'Surgical Instruments', 1, '2023-11-08 03:53:07.191754', '2023-11-08 03:53:07.191754'),
(4, 'Personal Protective Equipment', 1, '2023-11-08 03:53:33.943858', '2023-11-08 03:53:33.943858'),
(5, 'Patient Mobility and Transfer Aids', 1, '2023-11-08 03:53:55.062979', '2023-11-08 03:53:55.062979'),
(6, 'Respiratory Supplies', 1, '2023-11-08 03:54:24.114660', '2023-11-08 03:54:24.114660'),
(7, 'Pharmaceuticals and Medications', 1, '2023-11-08 04:00:59.910678', '2023-11-08 04:00:59.910678');

-- --------------------------------------------------------

--
-- Table structure for table `medicines`
--

CREATE TABLE `medicines` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `unit_price` varchar(10) DEFAULT NULL,
  `image` varchar(200) DEFAULT NULL,
  `stock` varchar(250) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` varchar(255) DEFAULT NULL,
  `updated_at` varchar(255) DEFAULT NULL,
  `medicine_category_id` int(11) DEFAULT NULL,
  `expiry_date` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `medicines`
--

INSERT INTO `medicines` (`id`, `name`, `unit_price`, `image`, `stock`, `created_by`, `created_at`, `updated_at`, `medicine_category_id`, `expiry_date`) VALUES
(1, 'Acetaminophen', '250', 'https://cdn.britannica.com/23/130223-050-99065995/acetaminophen-suppositories.jpg', '25packets', 1, '2023-11-09 01:11:01.036842', '2023-12-05 13:08:56.211681', 1, '2023-12-13'),
(2, 'Opioids', '250', 'https://images.ctfassets.net/pxcfulgsd9e2/articleImage122202/73a27a59493a7a87d2b09eb78e07f7ea/Preventing-opioid-overdoses-HN1678-iStock-872718220-Sized.jpg?f=top&fit=fill&fl=progressive&fm=jpg&h=786&q', '25packets', 1, '2023-11-09 01:14:57.609352', '2023-12-05 13:06:58.381432', 1, '2023-12-13'),
(4, 'Penicillins', '200', 'https://images.ctfassets.net/pxcfulgsd9e2/articleImage122202/73a27a59493a7a87d2b09eb78e07f7ea/Preventing-opioid-overdoses-HN1678-iStock-872718220-Sized.jpg?f=top&fit=fill&fl=progressive&fm=jpg&h=786&q', '30packets', 1, '2023-11-09 01:17:44.111050', '2023-12-05 13:08:03.619851', 1, '2023-12-13'),
(5, 'Antiretrovirals', '150', 'https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/11/HIV-Pills-Overhead-1296x728-Header.jpg?w=1155&h=1528', '30packets', 2, '2023-11-09 01:22:46.477181', '2023-12-05 13:09:43.742775', 3, '2023-12-13'),
(7, 'Quinini', '250', 'https://cpimg.tistatic.com/08065484/b/4/Fest-Quinine-Gold-300mg-Quinine-Sulphate-Tablets-BP.jpg', '12packets', 2, '2023-12-05 04:57:02.796668', '2023-12-05 04:57:02.796668', 3, '2023-12-05');

-- --------------------------------------------------------

--
-- Table structure for table `medicine_categories`
--

CREATE TABLE `medicine_categories` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` varchar(255) DEFAULT NULL,
  `updated_at` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `medicine_categories`
--

INSERT INTO `medicine_categories` (`id`, `name`, `created_by`, `created_at`, `updated_at`) VALUES
(1, 'Analgesics/Pain Relievers', 1, '2023-11-09 01:04:46.470997', '2023-11-09 09:37:48.162953'),
(3, 'Antivirals', 2, '2023-11-09 01:19:41.309303', '2023-11-09 01:19:41.309303');

-- --------------------------------------------------------

--
-- Table structure for table `received_purchases`
--

CREATE TABLE `received_purchases` (
  `id` int(11) NOT NULL,
  `status` varchar(100) DEFAULT NULL,
  `medical_supply_quantity` varchar(250) DEFAULT NULL,
  `medicine_quantity` varchar(250) DEFAULT NULL,
  `stock_order_id` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` varchar(255) DEFAULT NULL,
  `updated_at` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `received_purchases`
--

INSERT INTO `received_purchases` (`id`, `status`, `medical_supply_quantity`, `medicine_quantity`, `stock_order_id`, `created_by`, `created_at`, `updated_at`) VALUES
(2, 'Recieved', '8packets', '6packets', 2, 1, '2023-11-10 05:08:05.074309', '2023-11-10 05:08:05.074309'),
(5, 'Recieved', '5packets', '6packets', 4, 2, '2023-11-10 05:46:51.288789', '2023-11-10 14:02:11.606016');

-- --------------------------------------------------------

--
-- Table structure for table `stock_orders`
--

CREATE TABLE `stock_orders` (
  `medical_supply_quantity` varchar(250) DEFAULT NULL,
  `medicine_quantity` varchar(250) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `status` varchar(100) DEFAULT NULL,
  `medical_supply_id` int(11) DEFAULT NULL,
  `medicine_id` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` varchar(255) DEFAULT NULL,
  `updated_at` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `stock_orders`
--

INSERT INTO `stock_orders` (`medical_supply_quantity`, `medicine_quantity`, `id`, `status`, `medical_supply_id`, `medicine_id`, `created_by`, `created_at`, `updated_at`) VALUES
('15packets', '15packets', 2, 'pending', 5, 2, 2, '2023-11-10 02:36:25.190989', '2023-11-10 10:47:20.804625'),
('15packets', '15packets', 4, 'confirmed', 5, 2, 2, '2023-11-10 02:46:47.024448', '2023-11-10 02:46:47.024448');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `contact` varchar(255) DEFAULT NULL,
  `user_type` varchar(100) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `created_at` varchar(255) DEFAULT NULL,
  `updated_at` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `contact`, `user_type`, `password`, `created_at`, `updated_at`) VALUES
(1, 'Abbo Fulumera', 'fulumera@gmail.com', '0787807880', 'Manager', 'scrypt:32768:8:1$JKLUoQrowDtAZmn6$9cd13227d9be26b5907dd431fd69d37201d535acd384f7e27e81ceb5a9289a6cabb2e26112ffbbb936d74c3f22457a35f06bb2391d35db610414163df1a56127', '2023-11-08 03:32:29.073964', '2023-11-08 11:33:31.697965'),
(2, 'Namubiru Edna', 'edna@gmail.com', '0787807881', 'Manager', 'scrypt:32768:8:1$upPVG5oE7x99MHbu$7a89ca51e06402029abfcde3621d6c2a3e37e112361e8e1448736276e0f9fadc7902083064f5ed18990489a9c902ff399a3d2307f045bb92833fd456c12679e3', '2023-11-08 23:52:41.085840', '2023-11-09 07:52:41.085840'),
(3, 'Abbo flo', 'abboflorence152@gmail.com', '0752006673', 'Manager', 'scrypt:32768:8:1$vUc0C8rWwMATgvDw$e629bcd0a0f8f8f881aa9bc1b10dbadd9cf0fedb2580131277d944fa67da5dfab1eb405ba20af9dd78039d233f334220e2925972611aa0f47efa7637f4ad74aa', '2023-11-24 02:26:55.347628', '2023-11-24 10:26:55.363241'),
(4, 'Abbo flo', 'abboflorence152@gmail.com', '0752006673', 'Manager', 'scrypt:32768:8:1$Ut1Y5ErrnJJdjJuu$cb81244827e9471d8b2d63495013797e561edaf863bd0744f215a381277b717387d4e392276991a16cca99221fb2bb56283f8c176058471dcda712c50d8f8823', '2023-11-24 02:26:56.954546', '2023-11-24 10:26:56.954546'),
(5, 'Abbo flo', 'abboflorence152@gmail.com', '0752006673', 'Manager', 'scrypt:32768:8:1$VwK3G20uha7Zd9Ir$b43efbfbac681c67d02e6cb2073c7ceab9f7bdc094a5afcfa7014664ea68421260999f2a29a338f12479ac5e9d54745a0b4086e550b8ef97493acda994ff84fe', '2023-11-24 02:26:57.001412', '2023-11-24 10:26:57.001412'),
(6, 'Akello Mary', 'akello@gmail.com', '0750788008', 'Manager', 'scrypt:32768:8:1$wqDzBKAme4ZjHz9z$b0e66a221594425caa80b38e4e2ea416063445c40188eadcb0553358e56edd8025d87ba4cbd9da56c9e901ccb07fc4131dc8a303e7d632663e0fffeb4f69ae42', '2023-11-26 02:03:45.029556', '2023-11-26 10:03:45.045238');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alembic_version`
--
ALTER TABLE `alembic_version`
  ADD PRIMARY KEY (`version_num`);

--
-- Indexes for table `dispensed_stocks`
--
ALTER TABLE `dispensed_stocks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `created_by` (`created_by`),
  ADD KEY `medical_supply_id` (`medical_supply_id`),
  ADD KEY `medicine_id` (`medicine_id`);

--
-- Indexes for table `medical_supplies`
--
ALTER TABLE `medical_supplies`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD KEY `created_by` (`created_by`),
  ADD KEY `medical_supply_category_id` (`medical_supply_category_id`);

--
-- Indexes for table `medical_supply_categories`
--
ALTER TABLE `medical_supply_categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD KEY `created_by` (`created_by`);

--
-- Indexes for table `medicines`
--
ALTER TABLE `medicines`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD KEY `created_by` (`created_by`),
  ADD KEY `medicine_category_id` (`medicine_category_id`);

--
-- Indexes for table `medicine_categories`
--
ALTER TABLE `medicine_categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD KEY `created_by` (`created_by`);

--
-- Indexes for table `received_purchases`
--
ALTER TABLE `received_purchases`
  ADD PRIMARY KEY (`id`),
  ADD KEY `created_by` (`created_by`),
  ADD KEY `stock_order_id` (`stock_order_id`);

--
-- Indexes for table `stock_orders`
--
ALTER TABLE `stock_orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `created_by` (`created_by`),
  ADD KEY `medical_supply_id` (`medical_supply_id`),
  ADD KEY `medicine_id` (`medicine_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dispensed_stocks`
--
ALTER TABLE `dispensed_stocks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `medical_supplies`
--
ALTER TABLE `medical_supplies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `medical_supply_categories`
--
ALTER TABLE `medical_supply_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `medicines`
--
ALTER TABLE `medicines`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `medicine_categories`
--
ALTER TABLE `medicine_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `received_purchases`
--
ALTER TABLE `received_purchases`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `stock_orders`
--
ALTER TABLE `stock_orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `dispensed_stocks`
--
ALTER TABLE `dispensed_stocks`
  ADD CONSTRAINT `dispensed_stocks_ibfk_1` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `dispensed_stocks_ibfk_2` FOREIGN KEY (`medical_supply_id`) REFERENCES `medical_supplies` (`id`),
  ADD CONSTRAINT `dispensed_stocks_ibfk_3` FOREIGN KEY (`medicine_id`) REFERENCES `medicines` (`id`);

--
-- Constraints for table `medical_supplies`
--
ALTER TABLE `medical_supplies`
  ADD CONSTRAINT `medical_supplies_ibfk_1` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `medical_supplies_ibfk_2` FOREIGN KEY (`medical_supply_category_id`) REFERENCES `medical_supply_categories` (`id`);

--
-- Constraints for table `medical_supply_categories`
--
ALTER TABLE `medical_supply_categories`
  ADD CONSTRAINT `medical_supply_categories_ibfk_1` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `medicines`
--
ALTER TABLE `medicines`
  ADD CONSTRAINT `medicines_ibfk_1` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `medicines_ibfk_2` FOREIGN KEY (`medicine_category_id`) REFERENCES `medicine_categories` (`id`);

--
-- Constraints for table `medicine_categories`
--
ALTER TABLE `medicine_categories`
  ADD CONSTRAINT `medicine_categories_ibfk_1` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `received_purchases`
--
ALTER TABLE `received_purchases`
  ADD CONSTRAINT `received_purchases_ibfk_1` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `received_purchases_ibfk_2` FOREIGN KEY (`stock_order_id`) REFERENCES `stock_orders` (`id`);

--
-- Constraints for table `stock_orders`
--
ALTER TABLE `stock_orders`
  ADD CONSTRAINT `stock_orders_ibfk_1` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `stock_orders_ibfk_2` FOREIGN KEY (`medical_supply_id`) REFERENCES `medical_supplies` (`id`),
  ADD CONSTRAINT `stock_orders_ibfk_3` FOREIGN KEY (`medicine_id`) REFERENCES `medicines` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
