-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: sw-project
-- ------------------------------------------------------
-- Server version	8.0.22

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
  `is_accepted` tinyint NOT NULL,
  `learngroup_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_chat_learngroup1_idx` (`learngroup_id`),
  CONSTRAINT `fk_chat_learngroup1` FOREIGN KEY (`learngroup_id`) REFERENCES `learngroup` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chat`
--

LOCK TABLES `chat` WRITE;
/*!40000 ALTER TABLE `chat` DISABLE KEYS */;
/*!40000 ALTER TABLE `chat` ENABLE KEYS */;
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
  `chat_id` int NOT NULL,
  `person_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_chatmessage_chat1_idx` (`chat_id`),
  KEY `fk_chatmessage_person1_idx` (`person_id`),
  CONSTRAINT `fk_chatmessage_chat1` FOREIGN KEY (`chat_id`) REFERENCES `chat` (`id`),
  CONSTRAINT `fk_chatmessage_person1` FOREIGN KEY (`person_id`) REFERENCES `person` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chatmessage`
--

LOCK TABLES `chatmessage` WRITE;
/*!40000 ALTER TABLE `chatmessage` DISABLE KEYS */;
/*!40000 ALTER TABLE `chatmessage` ENABLE KEYS */;
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
  `is_accepted` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `learngroup_id` int NOT NULL,
  `learnprofile_id` int NOT NULL,
  KEY `fk_grouprequest_learngroup1_idx` (`learngroup_id`),
  KEY `fk_grouprequest_learnprofile1_idx` (`learnprofile_id`),
  CONSTRAINT `fk_grouprequest_learngroup1` FOREIGN KEY (`learngroup_id`) REFERENCES `learngroup` (`id`),
  CONSTRAINT `fk_grouprequest_learnprofile1` FOREIGN KEY (`learnprofile_id`) REFERENCES `learnprofile` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grouprequest`
--

LOCK TABLES `grouprequest` WRITE;
/*!40000 ALTER TABLE `grouprequest` DISABLE KEYS */;
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
  `person_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_learngroup_person1_idx` (`person_id`),
  CONSTRAINT `fk_learngroup_person1` FOREIGN KEY (`person_id`) REFERENCES `person` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `learngroup`
--

LOCK TABLES `learngroup` WRITE;
/*!40000 ALTER TABLE `learngroup` DISABLE KEYS */;
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
  `group_size` int NOT NULL DEFAULT '0',
  `extroversion` tinyint NOT NULL DEFAULT '0',
  `profile_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_learnprofile_profile1_idx` (`profile_id`),
  CONSTRAINT `fk_learnprofile_profile1` FOREIGN KEY (`profile_id`) REFERENCES `profile` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `learnprofile`
--

LOCK TABLES `learnprofile` WRITE;
/*!40000 ALTER TABLE `learnprofile` DISABLE KEYS */;
INSERT INTO `learnprofile` VALUES (1,'2021-06-16 14:30:25',1,1,'1',1,1,1);
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
  `name` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT '-',
  `google_user_id` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT '-',
  `google_mail` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT '-',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `person`
--

LOCK TABLES `person` WRITE;
/*!40000 ALTER TABLE `person` DISABLE KEYS */;
INSERT INTO `person` VALUES (1,'2021-06-16 14:27:02','','Talion 23','soccer97-10@live.de'),(2,'2021-06-16 14:27:57','','Talion 23','soccer97-10@live.de'),(3,'2021-06-16 14:28:45','','Talion 23','soccer97-10@live.de');
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
  `person_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_profile_person1_idx` (`person_id`),
  CONSTRAINT `fk_profile_person1` FOREIGN KEY (`person_id`) REFERENCES `person` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profile`
--

LOCK TABLES `profile` WRITE;
/*!40000 ALTER TABLE `profile` DISABLE KEYS */;
INSERT INTO `profile` VALUES (1,'2021-06-16 14:29:09','Mertcan',22,'Allmandring 1',4,'Wirtschaftsinformatik',1);
/*!40000 ALTER TABLE `profile` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-16 15:04:16
