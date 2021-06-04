-- MySQL dump 10.13  Distrib 8.0.24, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: sw-project
-- ------------------------------------------------------
-- Server version	8.0.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `chat`
--

DROP TABLE IF EXISTS `chat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chat` (
  `id` int NOT NULL,
  `creation_time` datetime NOT NULL,
  `source_id` int NOT NULL,
  `target_id` int NOT NULL,
  `is_accepted` tinyint NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chat`
--

LOCK TABLES `chat` WRITE;
/*!40000 ALTER TABLE `chat` DISABLE KEYS */;
INSERT INTO `chat` VALUES (1,'2021-06-03 13:39:27',3,5,1);
/*!40000 ALTER TABLE `chat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chat_request`
--

DROP TABLE IF EXISTS `chat_request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chat_request` (
  `id` int NOT NULL,
  `creation_time` datetime NOT NULL,
  `chat_id` int NOT NULL,
  `accepted` tinyint NOT NULL DEFAULT '0',
  `source_id` int NOT NULL,
  `target_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chat_request`
--

LOCK TABLES `chat_request` WRITE;
/*!40000 ALTER TABLE `chat_request` DISABLE KEYS */;
/*!40000 ALTER TABLE `chat_request` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chatmessage`
--

DROP TABLE IF EXISTS `chatmessage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chatmessage` (
  `id` int NOT NULL,
  `creation_time` datetime NOT NULL,
  `text` varchar(10000) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `person_id` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `received` tinyint NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chatmessage`
--

LOCK TABLES `chatmessage` WRITE;
/*!40000 ALTER TABLE `chatmessage` DISABLE KEYS */;
INSERT INTO `chatmessage` VALUES (1,'2021-06-03 13:56:45','Test NAchricht','0',1);
/*!40000 ALTER TABLE `chatmessage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `group_request`
--

DROP TABLE IF EXISTS `group_request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `group_request` (
  `id` int NOT NULL,
  `creation_time` datetime NOT NULL,
  `learngroup_id` int NOT NULL,
  `source_id` int NOT NULL,
  `target_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `group_request`
--

LOCK TABLES `group_request` WRITE;
/*!40000 ALTER TABLE `group_request` DISABLE KEYS */;
/*!40000 ALTER TABLE `group_request` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grouprequest`
--

DROP TABLE IF EXISTS `grouprequest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `grouprequest` (
  `id` int NOT NULL,
  `creation_time` datetime NOT NULL,
  `learngroup_id` int NOT NULL,
  `source_id` int NOT NULL,
  `target_id` int NOT NULL,
  `is_accepted` varchar(45) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grouprequest`
--

LOCK TABLES `grouprequest` WRITE;
/*!40000 ALTER TABLE `grouprequest` DISABLE KEYS */;
INSERT INTO `grouprequest` VALUES (1,'2021-06-03 20:54:31',0,0,0,'1');
/*!40000 ALTER TABLE `grouprequest` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `learngroup`
--

DROP TABLE IF EXISTS `learngroup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `learngroup` (
  `id` int NOT NULL,
  `creation_time` datetime DEFAULT NULL,
  `name` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `participant` int NOT NULL,
  `profile_id` int NOT NULL,
  `learn_profile_id` int NOT NULL,
  `group_size` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `learngroup`
--

LOCK TABLES `learngroup` WRITE;
/*!40000 ALTER TABLE `learngroup` DISABLE KEYS */;
INSERT INTO `learngroup` VALUES (1,'2021-06-03 15:00:12','',0,0,0,0);
/*!40000 ALTER TABLE `learngroup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `learnprofile`
--

DROP TABLE IF EXISTS `learnprofile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `learnprofile` (
  `id` int NOT NULL,
  `creation_time` datetime DEFAULT NULL,
  `study_status` tinyint NOT NULL DEFAULT '0',
  `frequency` int NOT NULL,
  `prev_knowledge` varchar(10000) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `group_size` int NOT NULL,
  `extroversion` tinyint NOT NULL DEFAULT '0',
  `profile_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `learnprofile`
--

LOCK TABLES `learnprofile` WRITE;
/*!40000 ALTER TABLE `learnprofile` DISABLE KEYS */;
INSERT INTO `learnprofile` VALUES (1,'2021-01-17 00:00:00',1,3,'mathe',0,0,6),(2,'2021-05-06 00:00:00',1,0,'string',0,1,0),(3,'2021-05-06 00:00:00',1,0,'string',0,1,0),(4,'2021-05-06 00:00:00',1,0,'string',0,1,0),(5,'2021-05-12 00:00:00',1,0,'string',0,1,0),(6,'2021-05-26 15:53:13',1,0,'string',0,1,0),(7,'2021-05-30 20:04:33',1,0,'string',0,1,0),(8,'2021-05-30 21:48:30',1,0,'string',0,1,0),(9,'2021-05-31 01:16:19',1,0,'string',0,1,0);
/*!40000 ALTER TABLE `learnprofile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `person`
--

DROP TABLE IF EXISTS `person`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `person` (
  `id` int NOT NULL,
  `creation_time` datetime DEFAULT NULL COMMENT 'neu',
  `first_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `last_name` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `google_user_id` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `google_mail` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `person`
--

LOCK TABLES `person` WRITE;
/*!40000 ALTER TABLE `person` DISABLE KEYS */;
INSERT INTO `person` VALUES (1,'2021-01-17 15:29:36','','','3','123@gmail.com'),(2,'2021-05-08 16:41:28','','','psf21','krank@123.de'),(3,'2021-06-03 19:59:06','string','string','string','string'),(4,'2021-06-03 21:06:39','karl','string','string','string');
/*!40000 ALTER TABLE `person` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profile`
--

DROP TABLE IF EXISTS `profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profile` (
  `id` int NOT NULL,
  `creation_time` datetime NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `age` int NOT NULL,
  `adress` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '-',
  `semester` int NOT NULL,
  `degree_course` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `preferences` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '-',
  `person_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profile`
--

LOCK TABLES `profile` WRITE;
/*!40000 ALTER TABLE `profile` DISABLE KEYS */;
INSERT INTO `profile` VALUES (1,'2021-01-17 15:29:36','',2,'awgwag',2,'1','afffaw',2),(3,'2021-05-18 23:12:37','',8,'string',0,'string','string',0),(4,'2021-05-30 19:47:33','',2,'string',0,'string','string',6),(5,'2021-05-25 21:31:50','',15,'string',0,'string','swhsler',0),(6,'2021-05-26 00:30:37','',0,'string',0,'string','string',0),(7,'2021-05-30 16:07:32','string',0,'string',0,'string','string',0),(8,'2021-05-30 19:47:18','string',0,'string',0,'string','string',0),(9,'2021-06-03 15:36:43','tonibas',0,'string',0,'string','string',0),(10,'2021-06-03 20:56:54','string',0,'safwfwfa',0,'string','string',0);
/*!40000 ALTER TABLE `profile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `suggestion`
--

DROP TABLE IF EXISTS `suggestion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `suggestion` (
  `id` int NOT NULL,
  `creation_time` datetime NOT NULL,
  `person_id` int NOT NULL,
  `learn_group_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `suggestion`
--

LOCK TABLES `suggestion` WRITE;
/*!40000 ALTER TABLE `suggestion` DISABLE KEYS */;
/*!40000 ALTER TABLE `suggestion` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-04 13:26:47
