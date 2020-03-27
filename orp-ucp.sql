-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.10-MariaDB-log - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             10.3.0.5771
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for orp
DROP DATABASE IF EXISTS `orp`;
CREATE DATABASE IF NOT EXISTS `orp` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `orp`;

-- Dumping structure for table orp.accounts
DROP TABLE IF EXISTS `accounts`;
CREATE TABLE IF NOT EXISTS `accounts` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `steamid` varchar(32) NOT NULL,
  `steamname` varchar(32) DEFAULT NULL,
  `game_version` mediumint(10) unsigned DEFAULT NULL,
  `locale` varchar(6) DEFAULT NULL,
  `email` varchar(28) DEFAULT NULL,
  `time` int(10) unsigned DEFAULT NULL,
  `admin` tinyint(3) unsigned NOT NULL DEFAULT 0,
  `helper` tinyint(3) unsigned NOT NULL DEFAULT 0,
  `registration_time` int(10) unsigned DEFAULT NULL,
  `registration_ip` varchar(16) DEFAULT NULL,
  `count_login` int(10) unsigned DEFAULT NULL,
  `count_kick` int(10) unsigned zerofill DEFAULT NULL,
  `last_login_time` int(10) unsigned DEFAULT NULL,
  `ajail` int(10) unsigned NOT NULL DEFAULT 0,
  `status` int(11) DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `steamid` (`steamid`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table orp.accounts: ~10 rows (approximately)
/*!40000 ALTER TABLE `accounts` DISABLE KEYS */;
INSERT INTO `accounts` (`id`, `steamid`, `steamname`, `game_version`, `locale`, `email`, `time`, `admin`, `helper`, `registration_time`, `registration_ip`, `count_login`, `count_kick`, `last_login_time`, `ajail`, `status`) VALUES
	(14, '76561198291141818', 'Bork', NULL, 'en-GB', NULL, NULL, 5, 0, NULL, '127.0.0.1', NULL, NULL, NULL, 0, 2),
	(15, '76561198448214499', NULL, NULL, NULL, NULL, NULL, 0, 0, NULL, '66.91.242.78', NULL, NULL, NULL, 0, 0),
	(16, '76561198377588641', 'Commodore', NULL, 'en-US', NULL, NULL, 5, 0, NULL, '73.42.144.81', NULL, NULL, NULL, 0, 0),
	(17, '76561198327418783', '666days', NULL, 'en-US', NULL, NULL, 5, 0, NULL, '168.211.219.151', NULL, NULL, NULL, 0, 0),
	(18, '76561198144143595', NULL, NULL, NULL, NULL, NULL, 5, 0, NULL, '193.84.189.246', NULL, NULL, NULL, 0, 0),
	(19, '76561198843486521', 'Orbit', NULL, 'en-US', NULL, NULL, 5, 0, NULL, '196.62.214.197', NULL, NULL, NULL, 0, 0),
	(20, '76561198234984696', 'Misuzu', NULL, 'en-GB', NULL, NULL, 5, 0, NULL, '95.147.5.134', NULL, NULL, NULL, 0, 0),
	(21, '76561198169759819', 'jörr', NULL, 'en-US', NULL, NULL, 5, 0, NULL, '62.65.216.164', NULL, NULL, NULL, 0, 0),
	(22, '76561198187887603', 'ninjur', NULL, 'sv-SE', NULL, NULL, 2, 0, NULL, '158.174.163.154', NULL, NULL, NULL, 0, 0),
	(23, '76561198253091477', 'Raw', NULL, 'en-US', NULL, NULL, 5, 0, NULL, '103.217.166.187', NULL, NULL, NULL, 0, 0);
/*!40000 ALTER TABLE `accounts` ENABLE KEYS */;

-- Dumping structure for table orp.applications
DROP TABLE IF EXISTS `applications`;
CREATE TABLE IF NOT EXISTS `applications` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `steamid` varchar(64) NOT NULL,
  `charname` varchar(50) DEFAULT NULL,
  `charstory` text DEFAULT NULL,
  `question1` text DEFAULT NULL,
  `answer1` text DEFAULT NULL,
  `question2` text DEFAULT NULL,
  `answer2` text DEFAULT NULL,
  `question3` text DEFAULT NULL,
  `answer3` text DEFAULT NULL,
  `question4` text DEFAULT NULL,
  `answer4` text DEFAULT NULL,
  `question5` text DEFAULT NULL,
  `answer5` text DEFAULT NULL,
  `denial_admin` text DEFAULT NULL,
  `denial_reason` text DEFAULT NULL,
  `status` tinyint(3) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

-- Dumping data for table orp.applications: ~21 rows (approximately)
/*!40000 ALTER TABLE `applications` DISABLE KEYS */;
INSERT INTO `applications` (`id`, `steamid`, `charname`, `charstory`, `question1`, `answer1`, `question2`, `answer2`, `question3`, `answer3`, `question4`, `answer4`, `question5`, `answer5`, `denial_admin`, `denial_reason`, `status`) VALUES
	(1, '76561198291141818', 'Phillip_Huff', 'abc', 'Explain what Disturbing Roleplay is. You are free to give examples and define them.', 'aaa', 'What is our stance on Common Courtesy? Describe it in your own words.', 'bbb', 'What is our policy on rape, robbing and scamming?', 'ccc', 'Define Deathmatching and Revenge-Killing, and describe the differences between them in your own words.', 'ddd', 'Define Metagaming and Powergaming, and describe the differences between them in your own words.', 'eee', NULL, NULL, 3),
	(3, '36655064186', 'borkdoggo 69cool', 'mi', 'a', 'suscipit', 'Aliquam', 'molestie', 'pharetra.', 'id', 'nulla', 'laoreet.', 'faucibus,', 'nec', NULL, NULL, 0),
	(4, '88552965266', 'Dakyskye Coolguy69', 'dolor', 'sit', 'nec', 'laoreet', 'Donec', 'eros', 'laoreet', 'Aliquam', 'interdum', 'scelerisque', 'eu', NULL, NULL, 0),
	(5, '19227532376', 'borkdoggo 69cool', 'dolor', 'risus', 'sem.', 'adipiscing', 'at,', 'euismod', 'quam,', 'tincidunt', 'sapien', 'adipiscing', 'fringilla', NULL, NULL, 0),
	(6, '8296198346', 'borkdoggo 69cool', 'Donec', 'faucibus,', 'eros', 'Donec', 'sem.', 'at,', 'enim,', 'faucibus,', 'Lorem', 'scelerisque', 'scelerisque', NULL, NULL, 0),
	(7, '71279733356', 'Khalid Somali', 'pharetra.', 'placerat', 'at,', 'Integer', 'Integer', 'orci', 'quis', 'Sed', 'Sed', 'placerat', 'Nunc', NULL, NULL, 0),
	(8, '89528680961', 'borkdoggo 69cool', 'Donec', 'eros', 'aliquam.', 'sit', 'elementum', 'Quisque', 'mauris', 'nulla', 'rutrum', 'nec,', 'sed', NULL, NULL, 0),
	(9, '81805872036', 'Dakyskye Coolguy69', 'elementum', 'enim,', 'at,', 'amet,', 'vitae', 'nulla', 'enim.', 'euismod.', 'ante.', 'dolor', 'sapien', NULL, NULL, 0),
	(10, '24537985977', 'borkdoggo 69cool', 'tempus', 'at', 'Aliquam', 'at,', 'eu', 'dolor', 'dolor', 'elit.', 'Nulla', 'id', 'quam,', NULL, NULL, 0),
	(11, '72052844026', 'Misuzu Misuzushimi', 'Integer', 'euismod.', 'rutrum', 'pulvinar', 'efficitur', 'fringilla', 'nec', 'sed,', 'amet,', 'a', 'dui', NULL, NULL, 0),
	(12, '33072641941', 'Khalid Somali', 'at', 'dolor', 'mi', 'ut', 'venenatis', 'a', 'dolor', 'blandit.', 'aliquam.', 'fringilla', 'tempus', NULL, NULL, 0),
	(13, '51322167196', 'Echo Bot', 'Donec', 'fringilla', 'enim,', 'elit.', 'Sed', 'mauris', 'ipsum', 'nec,', 'tempus', 'aliquam.', 'dolor', NULL, NULL, 0),
	(14, '22951688084', 'Misuzu Misuzushimi', 'at,', 'quis', 'fringilla', 'Integer', 'amet,', 'fringilla', 'est.', 'ut', 'Sed', 'massa', 'at', NULL, NULL, 0),
	(15, '54122985468', 'Khalid Somali', 'aliquet', 'iaculis', 'consectetur', 'Nulla', 'enim,', 'nulla', 'metus', 'amet,', 'at', 'Sed', 'massa', NULL, NULL, 0),
	(16, '12601048801', 'Logic Idot', 'nulla', 'eu', 'faucibus,', 'ante.', 'blandit.', 'lacus,', 'vestibulum', 'ante.', 'dolor', 'eros', 'eu', NULL, NULL, 0),
	(17, '36429130988', 'Khalid Somali', 'mi', 'facilisis', 'adipiscing', 'Integer', 'dui', 'Nunc', 'molestie', 'quis', 'faucibus,', 'Nulla', 'tincidunt.', NULL, NULL, 0),
	(18, '16156690621', 'Abdul Jabar', 'elit.', 'pharetra.', 'tincidunt', 'a', 'lacus,', 'dui', 'interdum', 'orci', 'at,', 'placerat', 'molestie', NULL, NULL, 0),
	(19, '84331237490', 'borkdoggo 69cool', 'efficitur', 'rutrum', 'consectetur', 'eros', 'egestas', 'leo,', 'sed,', 'est.', 'mauris', 'Nunc', 'vestibulum', NULL, NULL, 1),
	(20, '64035040768', 'Abdul Jabar', 'rutrum', 'venenatis', 'pharetra.', 'vitae', 'a', 'dolor', 'vitae', 'nulla', 'leo,', 'tempus', 'eu', NULL, NULL, 0),
	(21, '84715463822', 'borkdoggo 69cool', 'Aliquam', 'at', 'gravida', 'rutrum', 'vitae', 'euismod.', 'consectetur', 'venenatis', 'suscipit', 'Integer', 'Lorem', NULL, NULL, 0),
	(22, '81705525483', 'Logic Idot', 'ante.', 'Donec', 'Lorem', 'tempus', 'a,', 'suscipit', 'Sed', 'mauris', 'molestie', 'Maecenas', 'Aliquam', NULL, NULL, 0);
/*!40000 ALTER TABLE `applications` ENABLE KEYS */;

-- Dumping structure for table orp.atm
DROP TABLE IF EXISTS `atm`;
CREATE TABLE IF NOT EXISTS `atm` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `modelid` mediumint(8) unsigned NOT NULL,
  `x` float NOT NULL,
  `y` float NOT NULL,
  `z` float NOT NULL,
  `rx` float NOT NULL,
  `ry` float NOT NULL,
  `rz` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table orp.atm: ~2 rows (approximately)
/*!40000 ALTER TABLE `atm` DISABLE KEYS */;
INSERT INTO `atm` (`id`, `modelid`, `x`, `y`, `z`, `rx`, `ry`, `rz`) VALUES
	(1, 494, 129221, 78053, 1458, 0, 90, 0),
	(2, 494, 173869, 211218, 1278.76, 0, -89.7542, 0);
/*!40000 ALTER TABLE `atm` ENABLE KEYS */;

-- Dumping structure for table orp.bans
DROP TABLE IF EXISTS `bans`;
CREATE TABLE IF NOT EXISTS `bans` (
  `id` int(10) unsigned NOT NULL,
  `admin_id` int(10) unsigned NOT NULL,
  `ban_time` int(10) unsigned NOT NULL,
  `expire_time` int(10) unsigned NOT NULL,
  `reason` varchar(128) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `admin_id` (`admin_id`),
  CONSTRAINT `bans_ibfk_1` FOREIGN KEY (`id`) REFERENCES `accounts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bans_ibfk_2` FOREIGN KEY (`admin_id`) REFERENCES `accounts` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table orp.bans: ~0 rows (approximately)
/*!40000 ALTER TABLE `bans` DISABLE KEYS */;
/*!40000 ALTER TABLE `bans` ENABLE KEYS */;

-- Dumping structure for table orp.businesses
DROP TABLE IF EXISTS `businesses`;
CREATE TABLE IF NOT EXISTS `businesses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `markerid` int(11) NOT NULL,
  `owner` int(11) NOT NULL DEFAULT 0,
  `ownership_type` int(11) NOT NULL DEFAULT 0,
  `name` varchar(32) NOT NULL,
  `locked` int(11) NOT NULL DEFAULT 0,
  `type` int(11) NOT NULL,
  `enterable` int(11) NOT NULL DEFAULT 0,
  `price` int(11) NOT NULL DEFAULT 0,
  `dimension` int(11) NOT NULL DEFAULT 0,
  `message` varchar(128) NOT NULL DEFAULT 'This is a default business message.',
  `ix` float NOT NULL DEFAULT 0,
  `iy` float NOT NULL DEFAULT 0,
  `iz` float NOT NULL DEFAULT 0,
  `ia` float NOT NULL DEFAULT 0,
  `ex` float NOT NULL DEFAULT 0,
  `ey` float NOT NULL DEFAULT 0,
  `ez` float NOT NULL DEFAULT 0,
  `ea` float NOT NULL DEFAULT 0,
  `mx` float NOT NULL DEFAULT 0,
  `my` float NOT NULL DEFAULT 0,
  `mz` float NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- Dumping data for table orp.businesses: ~0 rows (approximately)
/*!40000 ALTER TABLE `businesses` DISABLE KEYS */;
INSERT INTO `businesses` (`id`, `markerid`, `owner`, `ownership_type`, `name`, `locked`, `type`, `enterable`, `price`, `dimension`, `message`, `ix`, `iy`, `iz`, `ia`, `ex`, `ey`, `ez`, `ea`, `mx`, `my`, `mz`) VALUES
	(1, 0, 2, 1, 'Test', 0, 2, 0, 10000, 0, 'This is a default business message.', 0, 0, 0, 0, 0, 0, 0, 0, 128789, 77848, 1577);
/*!40000 ALTER TABLE `businesses` ENABLE KEYS */;

-- Dumping structure for table orp.characters
DROP TABLE IF EXISTS `characters`;
CREATE TABLE IF NOT EXISTS `characters` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `accountid` int(11) unsigned NOT NULL,
  `steamid` varchar(32) NOT NULL DEFAULT '',
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `gender` int(11) NOT NULL DEFAULT 0,
  `health` float NOT NULL DEFAULT 100,
  `armour` float NOT NULL DEFAULT 0,
  `cash` int(11) NOT NULL DEFAULT 100,
  `bank` int(11) NOT NULL DEFAULT 1000,
  `paycheck` int(11) NOT NULL DEFAULT 0,
  `level` int(11) NOT NULL DEFAULT 1,
  `exp` int(11) NOT NULL DEFAULT 0,
  `minutes` int(11) NOT NULL DEFAULT 0,
  `playtime` int(11) NOT NULL DEFAULT 0,
  `x` varchar(50) NOT NULL DEFAULT '170694.515625',
  `y` varchar(50) NOT NULL DEFAULT '194947.453125',
  `z` varchar(50) NOT NULL DEFAULT '1396.9643554688',
  `a` varchar(50) NOT NULL DEFAULT '90.0',
  PRIMARY KEY (`id`),
  KEY `FK_characters_accounts` (`accountid`),
  CONSTRAINT `FK_characters_accounts` FOREIGN KEY (`accountid`) REFERENCES `accounts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

-- Dumping data for table orp.characters: ~13 rows (approximately)
/*!40000 ALTER TABLE `characters` DISABLE KEYS */;
INSERT INTO `characters` (`id`, `accountid`, `steamid`, `firstname`, `lastname`, `gender`, `health`, `armour`, `cash`, `bank`, `paycheck`, `level`, `exp`, `minutes`, `playtime`, `x`, `y`, `z`, `a`) VALUES
	(2, 14, '76561198291141818', 'Phillip', 'Hughes', 0, 100, 0, 50, 1000, 0, 3, 17, 38, 0, '122206.6953125', '90836.15625', '1259.1688232422', '-179.77752685547'),
	(6, 16, '76561198377588641', 'Commodore', 'Dev', 0, 100, 0, 100, 1000, 0, 1, 0, 0, 0, '-10369.102539062', '150256.484375', '-24.000240325928', '-68.286560058594'),
	(7, 16, '76561198377588641', 'Marcus', 'Irwin', 0, 100, 0, 100, 1000, 0, 1, 0, 27, 0, '171845.40625', '195565.28125', '1312.7413330078', '-132.51361083984'),
	(8, 17, '76561198327418783', 'Ali', 'Sheldon', 0, 100, 0, 100, 1000, 0, 10, 16, 32, 0, '-15000.25', '-48.0', '1648.001953125', '22.044403076172'),
	(9, 18, '76561198144143595', 'Mike', 'Hawk', 0, 100, 0, 100, 1000, 0, 1, 0, 0, 0, '114055.8359375', '217836.953125', '586.44323730469', '-60.409240722656'),
	(10, 19, '76561198843486521', 'William', 'Grayson', 0, 100, 0, 100, 1000, 0, 10, 2, 33, 0, '162625.125', '199022.046875', '449.8757019043', '175.81140136719'),
	(11, 20, '76561198234984696', 'Keira', 'Lance', 1, 100, 0, 100, 1000, 0, 1, 0, 54, 0, '214005.953125', '127235.1328125', '1398.8698730469', '-102.5037689209'),
	(12, 21, '76561198169759819', 'Vadim', 'Oleg', 0, 100, 0, 50, 1000, 0, 1, 1, 7, 0, '173795.8125', '198638.171875', '2495.2351074219', '106.29983520508'),
	(13, 22, '76561198187887603', 'Subaru', 'Natsuki', 0, 100, 0, 100, 1000, 0, 1, 0, 30, 0, '-9144.0498046875', '-9499.1875', '2053.6196289062', '-0.0054931640625'),
	(14, 14, '76561198291141818', 'Samantha', 'Wright', 1, 100, 0, 100, 1000, 0, 1, 0, 48, 0, '162403.421875', '198632.3125', '363.14999389648', '44.830383300781'),
	(15, 17, '76561198327418783', 'Riley', 'Striker', 0, 100, 0, 100, 1000, 0, 2, 5, 34, 0, '-180506.59375', '-83681.8359375', '1652.0571289062', '-95.346313476562'),
	(16, 23, '76561198253091477', 'Raw', 'Beresford', 1, 100, 0, 100, 1000, 0, 1, 0, 18, 0, '175230.890625', '198898.03125', '2794.0866699219', '-171.93594360352');
/*!40000 ALTER TABLE `characters` ENABLE KEYS */;

-- Dumping structure for table orp.clothing
DROP TABLE IF EXISTS `clothing`;
CREATE TABLE IF NOT EXISTS `clothing` (
  `id` int(11) NOT NULL,
  `hair` int(11) NOT NULL DEFAULT 1,
  `top` int(11) NOT NULL DEFAULT 1,
  `pants` int(11) NOT NULL DEFAULT 1,
  `shoes` int(11) NOT NULL DEFAULT 1,
  `hair_color` int(11) NOT NULL DEFAULT 0,
  `skin_color` int(11) NOT NULL DEFAULT 13158600,
  KEY `id` (`id`),
  CONSTRAINT `clothing_ibfk_1` FOREIGN KEY (`id`) REFERENCES `characters` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table orp.clothing: ~3 rows (approximately)
/*!40000 ALTER TABLE `clothing` DISABLE KEYS */;
INSERT INTO `clothing` (`id`, `hair`, `top`, `pants`, `shoes`, `hair_color`, `skin_color`) VALUES
	(15, 3, 3, 2, 2, 1, 13158600),
	(2, 1, 2, 3, 2, 0, 13158600),
	(16, 1, 1, 1, 1, 0, 13158600);
/*!40000 ALTER TABLE `clothing` ENABLE KEYS */;

-- Dumping structure for table orp.donations
DROP TABLE IF EXISTS `donations`;
CREATE TABLE IF NOT EXISTS `donations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `accountid` int(10) unsigned NOT NULL DEFAULT 0,
  `level` int(11) NOT NULL DEFAULT 0,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `FK__accounts` (`accountid`),
  CONSTRAINT `FK__accounts` FOREIGN KEY (`accountid`) REFERENCES `accounts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table orp.donations: ~0 rows (approximately)
/*!40000 ALTER TABLE `donations` DISABLE KEYS */;
/*!40000 ALTER TABLE `donations` ENABLE KEYS */;

-- Dumping structure for table orp.doors
DROP TABLE IF EXISTS `doors`;
CREATE TABLE IF NOT EXISTS `doors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `model` int(11) NOT NULL,
  `x` int(11) NOT NULL,
  `y` int(11) NOT NULL,
  `z` int(11) NOT NULL,
  `a` int(11) NOT NULL,
  `dimension` int(11) NOT NULL,
  `is_locked` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

-- Dumping data for table orp.doors: ~8 rows (approximately)
/*!40000 ALTER TABLE `doors` DISABLE KEYS */;
INSERT INTO `doors` (`id`, `model`, `x`, `y`, `z`, `a`, `dimension`, `is_locked`) VALUES
	(1, 20, -171043, -33401, 1131, 90, 0, 0),
	(2, 41, -172818, -33414, 1025, 0, 0, 0),
	(3, 23, -171090, -33189, 1130, 0, 0, 0),
	(4, 20, -174799, -36578, 1129, 0, 0, 0),
	(5, 23, -174097, -37446, 1129, 0, 0, 0),
	(6, 23, -174380, -36595, 1468, 0, 0, 0),
	(7, 23, -174139, -37072, 1467, 90, 0, 0),
	(8, 41, -174589, -38487, 1025, -90, 0, 0);
/*!40000 ALTER TABLE `doors` ENABLE KEYS */;

-- Dumping structure for table orp.factions
DROP TABLE IF EXISTS `factions`;
CREATE TABLE IF NOT EXISTS `factions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `short_name` varchar(6) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `motd` varchar(50) DEFAULT 'Default MOTD',
  `leadership_rank` int(11) DEFAULT NULL,
  `radio_dimension` int(11) DEFAULT NULL,
  `bank` int(11) DEFAULT 0,
  `locker_x` int(11) DEFAULT NULL,
  `locker_y` int(11) DEFAULT NULL,
  `locker_z` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- Dumping data for table orp.factions: ~0 rows (approximately)
/*!40000 ALTER TABLE `factions` DISABLE KEYS */;
INSERT INTO `factions` (`id`, `name`, `short_name`, `type`, `motd`, `leadership_rank`, `radio_dimension`, `bank`, `locker_x`, `locker_y`, `locker_z`) VALUES
	(1, 'Nevada Highway Patrol', 'NHP', 2, 'Default MOTD', 10, 0, 0, 2000, 2000, 1600);
/*!40000 ALTER TABLE `factions` ENABLE KEYS */;

-- Dumping structure for table orp.faction_members
DROP TABLE IF EXISTS `faction_members`;
CREATE TABLE IF NOT EXISTS `faction_members` (
  `char_id` int(11) NOT NULL,
  `faction_id` int(11) NOT NULL,
  `rank_id` int(11) NOT NULL,
  KEY `faction_id` (`faction_id`),
  KEY `char_id` (`char_id`),
  CONSTRAINT `faction_members_ibfk_1` FOREIGN KEY (`faction_id`) REFERENCES `factions` (`id`),
  CONSTRAINT `faction_members_ibfk_2` FOREIGN KEY (`char_id`) REFERENCES `characters` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table orp.faction_members: ~2 rows (approximately)
/*!40000 ALTER TABLE `faction_members` DISABLE KEYS */;
INSERT INTO `faction_members` (`char_id`, `faction_id`, `rank_id`) VALUES
	(15, 1, 10),
	(14, 1, 9);
/*!40000 ALTER TABLE `faction_members` ENABLE KEYS */;

-- Dumping structure for table orp.faction_ranks
DROP TABLE IF EXISTS `faction_ranks`;
CREATE TABLE IF NOT EXISTS `faction_ranks` (
  `id` int(11) NOT NULL,
  `rank_id` int(11) NOT NULL,
  `rank_name` varchar(50) NOT NULL,
  `rank_pay` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table orp.faction_ranks: ~10 rows (approximately)
/*!40000 ALTER TABLE `faction_ranks` DISABLE KEYS */;
INSERT INTO `faction_ranks` (`id`, `rank_id`, `rank_name`, `rank_pay`) VALUES
	(1, 10, 'Leader', 0),
	(1, 1, 'Rank 1', 0),
	(1, 2, 'Rank 2', 0),
	(1, 3, 'Rank 3', 0),
	(1, 4, 'Rank 4', 0),
	(1, 5, 'Rank 5', 0),
	(1, 6, 'Rank 6', 0),
	(1, 7, 'Rank 7', 0),
	(1, 8, 'Rank 8', 0),
	(1, 9, 'Co-leader', 0);
/*!40000 ALTER TABLE `faction_ranks` ENABLE KEYS */;

-- Dumping structure for table orp.furnitures
DROP TABLE IF EXISTS `furnitures`;
CREATE TABLE IF NOT EXISTS `furnitures` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `house` int(11) NOT NULL,
  `model` int(10) NOT NULL,
  `x` int(10) NOT NULL DEFAULT 0,
  `y` int(10) NOT NULL DEFAULT 0,
  `z` int(10) NOT NULL DEFAULT 0,
  `rx` int(10) NOT NULL DEFAULT 0,
  `ry` int(10) NOT NULL DEFAULT 0,
  `rz` int(10) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `house` (`house`),
  CONSTRAINT `furnitures_ibfk_1` FOREIGN KEY (`house`) REFERENCES `houses` (`id`) ON DELETE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- Dumping data for table orp.furnitures: ~0 rows (approximately)
/*!40000 ALTER TABLE `furnitures` DISABLE KEYS */;
INSERT INTO `furnitures` (`id`, `house`, `model`, `x`, `y`, `z`, `rx`, `ry`, `rz`) VALUES
	(1, 1, 519, -170016, -33585, 1029, 0, 0, 0);
/*!40000 ALTER TABLE `furnitures` ENABLE KEYS */;

-- Dumping structure for table orp.garages
DROP TABLE IF EXISTS `garages`;
CREATE TABLE IF NOT EXISTS `garages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL DEFAULT 'No Name Garage',
  `owner` int(11) NOT NULL DEFAULT 0,
  `ownership_type` int(11) NOT NULL DEFAULT 0,
  `price` int(11) NOT NULL,
  `dimension` int(11) NOT NULL DEFAULT 0,
  `ix` float NOT NULL DEFAULT 0,
  `iy` float NOT NULL DEFAULT 0,
  `iz` float NOT NULL DEFAULT 0,
  `ia` float NOT NULL DEFAULT 0,
  `ex` float NOT NULL DEFAULT 0,
  `ey` float NOT NULL DEFAULT 0,
  `ez` float NOT NULL DEFAULT 0,
  `ea` float NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table orp.garages: ~0 rows (approximately)
/*!40000 ALTER TABLE `garages` DISABLE KEYS */;
/*!40000 ALTER TABLE `garages` ENABLE KEYS */;

-- Dumping structure for table orp.houses
DROP TABLE IF EXISTS `houses`;
CREATE TABLE IF NOT EXISTS `houses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `doorid` int(11) NOT NULL,
  `owner` int(11) NOT NULL DEFAULT 0,
  `ownership_type` int(11) NOT NULL DEFAULT 0,
  `name` varchar(32) NOT NULL,
  `locked` int(11) NOT NULL DEFAULT 0,
  `type` int(11) NOT NULL,
  `price` int(11) NOT NULL DEFAULT 0,
  `dimension` int(11) NOT NULL DEFAULT 0,
  `message` varchar(128) NOT NULL DEFAULT 'This is a default business message.',
  `ix` varchar(16) NOT NULL DEFAULT '0.0',
  `iy` varchar(16) NOT NULL DEFAULT '0.0',
  `iz` varchar(16) NOT NULL DEFAULT '0.0',
  `ia` varchar(16) NOT NULL DEFAULT '0.0',
  `ex` varchar(16) NOT NULL DEFAULT '0.0',
  `ey` varchar(16) NOT NULL DEFAULT '0.0',
  `ez` varchar(16) NOT NULL DEFAULT '0.0',
  `ea` varchar(16) NOT NULL DEFAULT '0.0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- Dumping data for table orp.houses: ~2 rows (approximately)
/*!40000 ALTER TABLE `houses` DISABLE KEYS */;
INSERT INTO `houses` (`id`, `doorid`, `owner`, `ownership_type`, `name`, `locked`, `type`, `price`, `dimension`, `message`, `ix`, `iy`, `iz`, `ia`, `ex`, `ey`, `ez`, `ea`) VALUES
	(1, 1, 17, 1, 'Testing', 0, 1, 100, 0, 'This is a default house message.', '-170987', '-33223', '1229', '0.0', '-171003', '-33493', '1227', '0.0'),
	(2, 4, 2, 1, 'Bork', 0, 1, 1000, 0, 'This is a default house message.', '-174669', '-36615', '1227', '0.0', '-174915', '-36618', '1227', '0.0');
/*!40000 ALTER TABLE `houses` ENABLE KEYS */;

-- Dumping structure for table orp.inventory
DROP TABLE IF EXISTS `inventory`;
CREATE TABLE IF NOT EXISTS `inventory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `charid` int(11) DEFAULT NULL,
  `itemid` int(11) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- Dumping data for table orp.inventory: ~2 rows (approximately)
/*!40000 ALTER TABLE `inventory` DISABLE KEYS */;
INSERT INTO `inventory` (`id`, `charid`, `itemid`, `amount`) VALUES
	(1, 2, 1, 69),
	(2, 7, 1, 69);
/*!40000 ALTER TABLE `inventory` ENABLE KEYS */;

-- Dumping structure for table orp.ipbans
DROP TABLE IF EXISTS `ipbans`;
CREATE TABLE IF NOT EXISTS `ipbans` (
  `ip` varchar(16) NOT NULL,
  `account_id` int(10) unsigned NOT NULL,
  `admin_id` int(10) unsigned NOT NULL,
  `ban_time` int(10) unsigned NOT NULL,
  `reason` varchar(128) NOT NULL,
  PRIMARY KEY (`ip`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table orp.ipbans: ~0 rows (approximately)
/*!40000 ALTER TABLE `ipbans` DISABLE KEYS */;
/*!40000 ALTER TABLE `ipbans` ENABLE KEYS */;

-- Dumping structure for table orp.jobs
DROP TABLE IF EXISTS `jobs`;
CREATE TABLE IF NOT EXISTS `jobs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL DEFAULT 'No Name Job',
  `type` int(11) NOT NULL,
  `minimum_hours` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table orp.jobs: ~0 rows (approximately)
/*!40000 ALTER TABLE `jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `jobs` ENABLE KEYS */;

-- Dumping structure for table orp.job_coords
DROP TABLE IF EXISTS `job_coords`;
CREATE TABLE IF NOT EXISTS `job_coords` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `jobid` int(11) NOT NULL,
  `x` float NOT NULL,
  `y` float NOT NULL,
  `z` float NOT NULL,
  `a` float NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `jobid` (`jobid`),
  CONSTRAINT `job_coords_ibfk_1` FOREIGN KEY (`jobid`) REFERENCES `jobs` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table orp.job_coords: ~0 rows (approximately)
/*!40000 ALTER TABLE `job_coords` DISABLE KEYS */;
/*!40000 ALTER TABLE `job_coords` ENABLE KEYS */;

-- Dumping structure for table orp.job_ranks
DROP TABLE IF EXISTS `job_ranks`;
CREATE TABLE IF NOT EXISTS `job_ranks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `jobid` int(11) NOT NULL,
  `name` varchar(32) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobid` (`jobid`),
  CONSTRAINT `job_ranks_ibfk_1` FOREIGN KEY (`jobid`) REFERENCES `jobs` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table orp.job_ranks: ~0 rows (approximately)
/*!40000 ALTER TABLE `job_ranks` DISABLE KEYS */;
/*!40000 ALTER TABLE `job_ranks` ENABLE KEYS */;

-- Dumping structure for table orp.kicks
DROP TABLE IF EXISTS `kicks`;
CREATE TABLE IF NOT EXISTS `kicks` (
  `id` int(10) unsigned NOT NULL,
  `admin_id` int(10) unsigned NOT NULL,
  `time` int(10) unsigned NOT NULL,
  `reason` varchar(128) NOT NULL,
  KEY `id` (`id`) USING BTREE,
  CONSTRAINT `kicks_ibfk_1` FOREIGN KEY (`id`) REFERENCES `accounts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table orp.kicks: ~0 rows (approximately)
/*!40000 ALTER TABLE `kicks` DISABLE KEYS */;
/*!40000 ALTER TABLE `kicks` ENABLE KEYS */;

-- Dumping structure for table orp.log_chat
DROP TABLE IF EXISTS `log_chat`;
CREATE TABLE IF NOT EXISTS `log_chat` (
  `id` int(10) unsigned NOT NULL,
  `time` int(10) unsigned NOT NULL,
  `text` varchar(300) NOT NULL,
  KEY `id` (`id`),
  CONSTRAINT `log_chat_ibfk_1` FOREIGN KEY (`id`) REFERENCES `accounts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table orp.log_chat: ~0 rows (approximately)
/*!40000 ALTER TABLE `log_chat` DISABLE KEYS */;
/*!40000 ALTER TABLE `log_chat` ENABLE KEYS */;

-- Dumping structure for table orp.log_login
DROP TABLE IF EXISTS `log_login`;
CREATE TABLE IF NOT EXISTS `log_login` (
  `id` int(10) unsigned NOT NULL,
  `ip` varchar(16) NOT NULL,
  `time` int(10) unsigned NOT NULL,
  `action` enum('ACTION_LOGIN','ACTION_LOGOUT') NOT NULL,
  `service` enum('SERVICE_SERVER','SERVICE_OTHER') NOT NULL,
  KEY `id` (`id`) USING BTREE,
  CONSTRAINT `log_login_ibfk_1` FOREIGN KEY (`id`) REFERENCES `accounts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table orp.log_login: ~0 rows (approximately)
/*!40000 ALTER TABLE `log_login` DISABLE KEYS */;
/*!40000 ALTER TABLE `log_login` ENABLE KEYS */;

-- Dumping structure for table orp.log_reports
DROP TABLE IF EXISTS `log_reports`;
CREATE TABLE IF NOT EXISTS `log_reports` (
  `id` int(10) unsigned NOT NULL,
  `reportedby_id` int(10) unsigned NOT NULL,
  `report_time` int(10) unsigned NOT NULL,
  `message` varchar(128) NOT NULL,
  KEY `id` (`id`),
  CONSTRAINT `log_reports_ibfk_1` FOREIGN KEY (`id`) REFERENCES `accounts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table orp.log_reports: ~0 rows (approximately)
/*!40000 ALTER TABLE `log_reports` DISABLE KEYS */;
/*!40000 ALTER TABLE `log_reports` ENABLE KEYS */;

-- Dumping structure for table orp.log_weaponshot
DROP TABLE IF EXISTS `log_weaponshot`;
CREATE TABLE IF NOT EXISTS `log_weaponshot` (
  `id` int(10) unsigned NOT NULL,
  `time` int(10) unsigned NOT NULL,
  `hittype` tinyint(3) unsigned NOT NULL,
  `hitplayer` int(10) unsigned NOT NULL,
  `hitx` float NOT NULL,
  `hity` float NOT NULL,
  `hitz` float NOT NULL,
  `startx` float NOT NULL,
  `starty` float NOT NULL,
  `startz` float NOT NULL,
  `weapon` tinyint(3) unsigned NOT NULL,
  KEY `id` (`id`),
  CONSTRAINT `log_weaponshot_ibfk_1` FOREIGN KEY (`id`) REFERENCES `accounts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table orp.log_weaponshot: ~0 rows (approximately)
/*!40000 ALTER TABLE `log_weaponshot` DISABLE KEYS */;
/*!40000 ALTER TABLE `log_weaponshot` ENABLE KEYS */;

-- Dumping structure for table orp.log_whitelists
DROP TABLE IF EXISTS `log_whitelists`;
CREATE TABLE IF NOT EXISTS `log_whitelists` (
  `id` int(11) NOT NULL,
  `admin_id` int(11) unsigned NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp(),
  KEY `id` (`id`),
  KEY `admin_id` (`admin_id`),
  CONSTRAINT `log_whitelists_ibfk_1` FOREIGN KEY (`id`) REFERENCES `whitelists` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `log_whitelists_ibfk_2` FOREIGN KEY (`admin_id`) REFERENCES `accounts` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table orp.log_whitelists: ~3 rows (approximately)
/*!40000 ALTER TABLE `log_whitelists` DISABLE KEYS */;
INSERT INTO `log_whitelists` (`id`, `admin_id`, `timestamp`) VALUES
	(1, 17, '2020-01-16 18:49:19'),
	(2, 17, '0000-00-00 00:00:00'),
	(3, 17, '2020-01-20 20:54:59');
/*!40000 ALTER TABLE `log_whitelists` ENABLE KEYS */;

-- Dumping structure for table orp.markers
DROP TABLE IF EXISTS `markers`;
CREATE TABLE IF NOT EXISTS `markers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `model` int(11) NOT NULL,
  `x1` float NOT NULL,
  `y1` float NOT NULL,
  `z1` float NOT NULL,
  `dimension1` int(11) NOT NULL,
  `x2` float DEFAULT 0,
  `y2` float DEFAULT 0,
  `z2` float DEFAULT 0,
  `dimension2` int(11) DEFAULT 0,
  `r` int(11) NOT NULL DEFAULT 255,
  `g` int(11) NOT NULL DEFAULT 204,
  `b` int(11) NOT NULL DEFAULT 0,
  `a` int(11) NOT NULL DEFAULT 200,
  `is_locked` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

-- Dumping data for table orp.markers: ~4 rows (approximately)
/*!40000 ALTER TABLE `markers` DISABLE KEYS */;
INSERT INTO `markers` (`id`, `model`, `x1`, `y1`, `z1`, `dimension1`, `x2`, `y2`, `z2`, `dimension2`, `r`, `g`, `b`, `a`, `is_locked`) VALUES
	(2, 334, 171651, 195404, 584, 0, 171651, 194836, 584, 0, 255, 204, 0, 100, 0),
	(10, 334, 174337, 197699, 1310, 0, 174337, 0, 0, 0, 255, 204, 0, 200, 0),
	(11, 334, 124555, 79447, 1573, 0, 124555, 0, 0, 0, 255, 204, 0, 200, 0),
	(12, 334, 12651, 18769, 1637, 0, 12651, 0, 0, 0, 255, 204, 0, 200, 0);
/*!40000 ALTER TABLE `markers` ENABLE KEYS */;

-- Dumping structure for table orp.multiplechoice
DROP TABLE IF EXISTS `multiplechoice`;
CREATE TABLE IF NOT EXISTS `multiplechoice` (
  `id` int(11) NOT NULL,
  `accountid` int(10) unsigned NOT NULL,
  `multiplechoice` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `FK_multiplechoice_accounts` (`accountid`),
  CONSTRAINT `FK_multiplechoice_accounts` FOREIGN KEY (`accountid`) REFERENCES `accounts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table orp.multiplechoice: ~0 rows (approximately)
/*!40000 ALTER TABLE `multiplechoice` DISABLE KEYS */;
INSERT INTO `multiplechoice` (`id`, `accountid`, `multiplechoice`) VALUES
	(0, 14, '[{"question":"What does Meta-gaming mean?","answer":"Mixing IC information with OOC information.","answers":["Playing a victim.","Mixing IC information with OOC information.","Using hacks."]},{"question":"What type of a server is Onset Roleplay?","answer":"Heavy RP.","answers":["Deathmatch.","Freeroam.","Heavy RP."]},{"question":"Someone approaches you with a hand gun in their hand, how will you react?","answer":"Roleplay fear.","answers":["Run away and bunny hop to avoid getting hit.","Fight them with your fists.","Roleplay fear."]},{"question":"Someone is breaking a rule, what will you do?","answer":"Report him to the administrators.","answers":["You don\'t care.","Report him to the administrators.","Abuse him."]},{"question":"Which situation best describes the meaning of Revenge Killing?","answer":"Mark is killed by someone, he respawns and kills them because of his anger.","answers":["Someone robs Mark, Mark kills him to get his cash back.","Mark is killed by someone, he respawns and kills them because of his anger.","Mark is arrested by a police officer, he spots the police officer off duty and kills him."]},{"question":"Someone is insulting you in an OOC chat, what will you do?","answer":"Report them.","answers":["Report them.","Insult them back.","Kill them."]},{"question":"You somehow manage to duplicate your valuable assets, what will you do?","answer":"Contact the admins.","answers":["Contact the admins.","Give them to your friends.","Sell them for your profit."]},{"question":"How would you define deathmatching?","answer":"Killing someone without a proper in-character reason.","answers":["Killing someone for fun.","Killing someone without a proper in-character reason.","Killing someone because they robbed you."]},{"question":"What kind of Roleplay does the server offer?","answer":"Text-Based Roleplay.","answers":["Text-Based Roleplay.","Voice Roleplay.","Phyiscal Roleplay."]},{"question":"A Law Enforcement Officer tases you. How should you conduct yourself?","answer":"Roleplay the effects of being tased.","answers":["Roleplay the effects of being tased.","Quit the game to avoid being arrested.","Stand up and run."]},{"question":"You have found a bug that helps you make quick cash, what do you do?","answer":"Report it to the developers.","answers":["Use the bug to become rich.","Report it to the developers.","Tell it to everyone so everyone can get rich."]},{"question":"Someone kills you and you kill them after respawing, what would you call this situation?","answer":"Revenge Killing.","answers":["Revenge Killing.","Deathmatch.","Roleplay."]},{"question":"What is the defination of power-gaming?","answer":"Doing unrealistic actions.","answers":["Same as meta-gaming.","Doing unrealistic actions.","Insulting others."]},{"question":"What is the proper use of /me?","answer":"/me withdraws a small baggie from his pocket, examining it.","answers":["/me is superman.","/me uses his commands to spawn a vehicle.","/me withdraws a small baggie from his pocket, examining it."]},{"question":"Someone is selling their account which has a lot of money, what will you do?","answer":"Contact the admins regarding the situation.","answers":["Buy the account and use it to your benefit.","Contact the admins regarding the situation.","Do nothing."]}]');
/*!40000 ALTER TABLE `multiplechoice` ENABLE KEYS */;

-- Dumping structure for table orp.news
DROP TABLE IF EXISTS `news`;
CREATE TABLE IF NOT EXISTS `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(64) NOT NULL,
  `author` varchar(64) NOT NULL,
  `publisher` varchar(64) NOT NULL,
  `body` text NOT NULL,
  `img` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table orp.news: ~0 rows (approximately)
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
/*!40000 ALTER TABLE `news` ENABLE KEYS */;

-- Dumping structure for table orp.pumps
DROP TABLE IF EXISTS `pumps`;
CREATE TABLE IF NOT EXISTS `pumps` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `x` int(11) NOT NULL,
  `y` int(11) NOT NULL,
  `z` int(11) NOT NULL,
  `litres` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=latin1;

-- Dumping data for table orp.pumps: ~30 rows (approximately)
/*!40000 ALTER TABLE `pumps` DISABLE KEYS */;
INSERT INTO `pumps` (`id`, `x`, `y`, `z`, `litres`) VALUES
	(1, 127810, 78431, 1568, 34000),
	(2, 127446, 78415, 1568, 100),
	(3, 127048, 78430, 1568, 100),
	(4, 126678, 78404, 1568, 100),
	(5, 126246, 78420, 1568, 100),
	(6, 125904, 78406, 1568, 200),
	(7, -17171, -2172, 2062, 1000),
	(8, -16814, -3187, 2062, 2000),
	(9, -17155, -3305, 2062, 1000),
	(10, -17526, -2315, 2062, 500),
	(11, -17804, -2415, 2062, 5000),
	(12, -17447, -3387, 2062, 5000),
	(13, -17753, -3526, 2062, 5000),
	(14, -18106, -2502, 2062, 5000),
	(15, -167866, -37112, 1146, 5000),
	(16, -168188, -37103, 1146, 5000),
	(17, -168693, -37095, 1146, 4902),
	(18, -169015, -37088, 1146, 5000),
	(19, 170659, 207324, 1411, 500),
	(20, 170105, 207314, 1410, 500),
	(21, 170630, 206760, 1411, 500),
	(22, 170107, 206783, 1410, 500),
	(23, 170099, 206107, 1410, 500),
	(24, 170647, 206097, 1411, 500),
	(25, 170623, 205561, 1411, 500),
	(26, 170100, 205587, 1411, 4000),
	(27, 42526, 137156, 1569, 5000),
	(28, 42966, 137150, 1569, 500),
	(29, 42524, 136717, 1569, 500),
	(30, 42949, 136744, 1569, 500);
/*!40000 ALTER TABLE `pumps` ENABLE KEYS */;

-- Dumping structure for table orp.speedcams
DROP TABLE IF EXISTS `speedcams`;
CREATE TABLE IF NOT EXISTS `speedcams` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `x` int(11) NOT NULL,
  `y` int(11) NOT NULL,
  `z` int(11) NOT NULL,
  `speed` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- Dumping data for table orp.speedcams: ~19 rows (approximately)
/*!40000 ALTER TABLE `speedcams` DISABLE KEYS */;
INSERT INTO `speedcams` (`id`, `x`, `y`, `z`, `speed`) VALUES
	(1, 122604, 90606, 1161, 100),
	(2, 122657, 92244, 1193, 20),
	(3, 122620, 91578, 1171, 20),
	(4, 165895, 187315, 1206, 50),
	(5, 11320, 18348, 1500, 20),
	(6, 207138, 198511, 1966, 1),
	(7, 214686, 132746, 1476, 40),
	(8, 150763, 190579, 1183, 50),
	(9, -177150, -52326, 1049, 50),
	(10, 111217, -64693, 1276, 70),
	(11, 155328, -56537, 1719, 70),
	(12, 205590, -51608, 1144, 70),
	(13, 221581, 24527, 2796, 70),
	(14, 215374, 53104, 1454, 70),
	(15, 214673, 125744, 1392, 70),
	(16, 218510, 188120, 1190, 70),
	(17, 156343, 220336, 1210, 70),
	(18, 155001, 209966, 1209, 40),
	(19, 155065, 192182, 1183, 60);
/*!40000 ALTER TABLE `speedcams` ENABLE KEYS */;

-- Dumping structure for table orp.vehicles
DROP TABLE IF EXISTS `vehicles`;
CREATE TABLE IF NOT EXISTS `vehicles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `owner` int(11) NOT NULL DEFAULT 0,
  `model` int(11) NOT NULL,
  `plate` varchar(13) NOT NULL DEFAULT 'ONSET',
  `faction` int(11) NOT NULL DEFAULT 0,
  `rental` int(11) NOT NULL DEFAULT 0,
  `x` varchar(50) NOT NULL,
  `y` varchar(50) NOT NULL,
  `z` varchar(50) NOT NULL,
  `a` varchar(50) NOT NULL,
  `r` int(11) NOT NULL,
  `g` int(11) NOT NULL,
  `b` int(11) NOT NULL,
  `litres` int(11) NOT NULL DEFAULT 100,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;

-- Dumping data for table orp.vehicles: ~32 rows (approximately)
/*!40000 ALTER TABLE `vehicles` DISABLE KEYS */;
INSERT INTO `vehicles` (`id`, `owner`, `model`, `plate`, `faction`, `rental`, `x`, `y`, `z`, `a`, `r`, `g`, `b`, `litres`) VALUES
	(1, 2, 12, '1', 0, 0, '129135.2109375', '79771.65625', '1469.5354003906', '-90.713439941406', 255, 255, 255, 100),
	(2, 7, 6, 'Commodore', 0, 0, '130205.15625', '80522.5078125', '1468.7551269531', '-178.45524597168', 255, 255, 255, 100),
	(3, 2, 7, 'Pickup', 0, 0, '128573.125', '79694.5234375', '1467.4923095703', '-89.936798095703', 255, 255, 255, 100),
	(4, 2, 3, 'HIGHWAY', 0, 0, '177662.171875', '211093.546875', '1195.2258300781', '0.056781426072121', 255, 255, 255, 100),
	(5, 2, 3, 'HIGHWAY', 1, 0, '174923.40625', '211088.203125', '1195.1424560547', '0.87984919548035', 255, 255, 255, 94),
	(6, 2, 20, 'HIGHWAY', 0, 0, '176247.453125', '212162.265625', '2151.6293945313', '-90.329650878906', 255, 255, 255, 100),
	(7, 7, 6, 'Test', 0, 0, '169077.515625', '194126.859375', '1209.3485107422', '-19.992433547974', 255, 255, 255, 100),
	(8, 8, 6, 'Sprenner', 0, 0, '162650.484375', '197963.40625', '404.84573364258', '14.56453037262', 255, 255, 255, 100),
	(9, 2, 1, 'GCHECK', 0, 0, '176324.140625', '208510.25', '1194.697265625', '-138.58961486816', 255, 255, 255, 100),
	(10, 0, 1, 'RENTAL', 0, 1, '169640.25', '197343.1875', '1314.2397460938', '145.95010375977', 255, 255, 255, 58),
	(11, 0, 2, 'TEST', 0, 0, '166783.328125', '207633.109375', '1292.4172363281', '94.840942382812', 255, 255, 255, 100),
	(12, 0, 22, 'TEST2', 0, 0, '2334.1088867188', '-882.25219726562', '1562.2126464844', '-157.03549194336', 255, 255, 255, 100),
	(13, 0, 4, 'CHAI', 0, 0, '3136.9360351562', '-1995.2950439453', '1656.9409179688', '-60.376281738281', 255, 255, 255, 100),
	(14, 0, 2, 'TEST419', 0, 0, '162930.109375', '198725.5', '363.14999389648', '160.18859863281', 255, 255, 255, 100),
	(15, 0, 2, 'test', 0, 0, '162830.359375', '198735.828125', '363.14999389648', '78.053558349609', 255, 255, 255, 100),
	(16, 0, 2, 'TEST419', 0, 0, '162472.875', '198905.53125', '363.14999389648', '31.514739990234', 255, 255, 255, 100),
	(17, 0, 2, 'RENTAL', 0, 1, '161775.328125', '198164.234375', '363.14999389648', '92.533752441406', 255, 255, 255, 100),
	(18, 0, 3, 'TEST419', 0, 0, '160403.6875', '198792.859375', '363.14999389648', '98.653228759766', 255, 255, 255, 100),
	(19, 0, 1, 'TEST419', 0, 0, '160030.5', '198528.109375', '363.14999389648', '154.89312744141', 255, 255, 255, 100),
	(20, 0, 2, 'POLICE', 0, 0, '122237.578125', '92989.59375', '1323.4860839844', '72.230743408203', 255, 255, 255, 100),
	(21, 0, 4, 'ONSRP', 1, 0, '193095.296875', '177729.46875', '1307.1500244141', '117.72579956055', 255, 255, 255, 100),
	(22, 0, 25, 'pilot', 0, 0, '150080.953125', '190229.296875', '1287.3604736328', '0.1812744140625', 255, 255, 255, 100),
	(23, 0, 2, 'okay', 0, 0, '166759.375', '206446.296875', '1292.4172363281', '-90.006866455078', 255, 255, 255, 100),
	(24, 0, 4, 'RED', 0, 0, '212291.875', '94244.9765625', '1312.9947509766', '156.80474853516', 255, 255, 255, 100),
	(25, 0, 4, 'red', 0, 0, '68251.5', '-124202.6171875', '3235.0634765625', '101.09225463867', 255, 255, 255, 100),
	(26, 0, 6, 'ali', 0, 0, '-168709.421875', '-38066.51953125', '1145.9063720703', '115.67132568359', 255, 255, 255, 100),
	(27, 0, 4, 'nigger', 0, 0, '-196061.84375', '-46529.95703125', '1131.4172363281', '92.412902832031', 255, 255, 255, 100),
	(28, 0, 4, 'plate', 0, 0, '-170095.1875', '-54311.80859375', '1147.4229736328', '164.35247802734', 255, 255, 255, 100),
	(29, 0, 2, '333', 0, 0, '135748.3125', '193003.703125', '1292.3721923828', '-122.49392700195', 255, 255, 255, 100),
	(30, 0, 4, '666', 0, 0, '138692.15625', '191924.6875', '1282.5255126953', '-58.948059082031', 255, 255, 255, 100),
	(31, 0, 7, '666', 1, 0, '-176065.34375', '-37891.82421875', '1131.0537109375', '144.65368652344', 255, 255, 255, 96),
	(32, 0, 4, 'pd', 1, 0, '174685.203125', '210450.140625', '1291.9010009766', '-72.0', 255, 255, 255, 57);
/*!40000 ALTER TABLE `vehicles` ENABLE KEYS */;

-- Dumping structure for table orp.warrants
DROP TABLE IF EXISTS `warrants`;
CREATE TABLE IF NOT EXISTS `warrants` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `charid` int(11) NOT NULL,
  `warrant` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `warrant` (`warrant`),
  CONSTRAINT `warrants_ibfk_1` FOREIGN KEY (`warrant`) REFERENCES `warrants_pc` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table orp.warrants: ~0 rows (approximately)
/*!40000 ALTER TABLE `warrants` DISABLE KEYS */;
/*!40000 ALTER TABLE `warrants` ENABLE KEYS */;

-- Dumping structure for table orp.warrants_pc
DROP TABLE IF EXISTS `warrants_pc`;
CREATE TABLE IF NOT EXISTS `warrants_pc` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `warrant` varchar(64) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- Dumping data for table orp.warrants_pc: ~3 rows (approximately)
/*!40000 ALTER TABLE `warrants_pc` DISABLE KEYS */;
INSERT INTO `warrants_pc` (`id`, `warrant`) VALUES
	(1, 'Rape'),
	(2, 'Murder'),
	(3, 'Obstruction of Justice');
/*!40000 ALTER TABLE `warrants_pc` ENABLE KEYS */;

-- Dumping structure for table orp.whitelists
DROP TABLE IF EXISTS `whitelists`;
CREATE TABLE IF NOT EXISTS `whitelists` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `steam_id` varchar(17) NOT NULL,
  `allowed` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- Dumping data for table orp.whitelists: ~4 rows (approximately)
/*!40000 ALTER TABLE `whitelists` DISABLE KEYS */;
INSERT INTO `whitelists` (`id`, `steam_id`, `allowed`) VALUES
	(1, '76561198327418783', 1),
	(2, '76561198291141818', 1),
	(3, '76561198234984696', 1),
	(4, '76561198377588641', 1);
/*!40000 ALTER TABLE `whitelists` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
