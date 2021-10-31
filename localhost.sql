-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 31, 2021 at 02:34 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `supply_db`
--
CREATE DATABASE IF NOT EXISTS `supply_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `supply_db`;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `image_url` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `stock`, `status`, `image_url`, `createdAt`, `updatedAt`) VALUES
(1, 'Small Tomato', 18000, 25, 1, 'http://localhost:3000/public/small-tomato.jpg', '2021-10-30 06:01:19', '2021-10-30 06:01:19'),
(2, 'Cabbage', 20000, 20, 1, 'http://localhost:3000/public/cabbage.jpg', '2021-10-30 06:01:49', '2021-10-30 06:01:49'),
(3, 'Chili', 15000, 10, 1, 'http://localhost:3000/public/chili.jpg', '2021-10-30 06:03:14', '2021-10-30 06:03:14'),
(4, 'Peas', 20000, 12, 1, 'http://localhost:3000/public/peas.jpg', '2021-10-30 06:04:34', '2021-10-30 06:04:34'),
(5, 'Cucumber', 18000, 30, 1, 'http://localhost:3000/public/cucumber.jpg', '2021-10-30 06:05:56', '2021-10-30 06:05:56'),
(6, 'Pumpkin', 30000, 40, 1, 'http://localhost:3000/public/pumpkin.jpg', '2021-10-30 06:06:12', '2021-10-30 06:06:12'),
(7, 'Broccoli', 25000, 30, 1, 'http://localhost:3000/public/broccoli.jpg', '2021-10-30 06:06:45', '2021-10-30 06:06:45'),
(8, 'Red Onion', 40000, 40, 1, 'http://localhost:3000/public/red-onion.jpg', '2021-10-30 06:07:46', '2021-10-30 06:07:46'),
(9, 'Tomato', 15000, 35, 1, 'http://localhost:3000/public/tomato.jpg', '2021-10-30 06:09:13', '2021-10-30 06:09:13'),
(10, 'Onion', 17000, 23, 1, 'http://localhost:3000/public/onion.jpg', '2021-10-30 06:10:14', '2021-10-30 06:10:14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
