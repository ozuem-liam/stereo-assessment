-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: stereo_database
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `media`
--

DROP TABLE IF EXISTS `media`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `media` (
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'Active',
  `updatedAt` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `id` varchar(36) NOT NULL,
  `type` enum('audio','image') NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `isDeleted` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `media`
--

LOCK TABLES `media` WRITE;
/*!40000 ALTER TABLE `media` DISABLE KEYS */;
INSERT INTO `media` VALUES ('will','audio trying','http://res.cloudinary.com/dhjptk5wf/image/upload/v1678145269/ph3fdjmhvkhv7swywtsu.pdf','Active','2023-03-07 01:33:12','2023-03-07 01:33:12','15d2a6dd-6b26-4e0c-b653-a1339e6c611a','audio','2023-03-06 23:28:31',1),('will','audio trying','http://res.cloudinary.com/dhjptk5wf/image/upload/v1678145172/xavvwkq9yqvvap3dgb7a.pdf','Active',NULL,NULL,'2145189b-81cd-473f-bd95-0fff5b0c58f9','audio','2023-03-06 23:26:53',0),('will','audio trying','http://res.cloudinary.com/dhjptk5wf/image/upload/v1678145550/hvavbzof1eahr41ytfws.pdf','Active',NULL,NULL,'2ea63cd6-c031-453c-b5db-f360beb3f4e5','audio','2023-03-06 23:33:12',0),('will','audio trying','http://res.cloudinary.com/dhjptk5wf/image/upload/v1678145032/cx1popxjbopvf9fddpng.pdf','Active',NULL,NULL,'322798cd-1707-48fb-8f59-0dc21571c741','audio','2023-03-06 23:24:35',0),('will','audio trying','http://res.cloudinary.com/dhjptk5wf/image/upload/v1678145335/wudkc6vjzlxmkby6tf8o.pdf','Active',NULL,NULL,'493e5c6a-2f8f-4084-859e-be9035a0d2de','audio','2023-03-06 23:29:37',0),('will','audio trying','http://res.cloudinary.com/dhjptk5wf/image/upload/v1678145651/hj88v9xcrwkjhbnj4sf9.pdf','Active',NULL,NULL,'666d7ec6-1ccb-4cec-9096-5b2d3a3ae203','audio','2023-03-06 23:34:53',0),('will','audio trying','http://res.cloudinary.com/dhjptk5wf/image/upload/v1678144782/seq4yuxtqii7q9uvf6ta.pdf','Active',NULL,NULL,'78887d1a-daab-41b3-8d89-2002ba9b9b7d','audio','2023-03-06 23:20:23',0),('will','audio trying','http://res.cloudinary.com/dhjptk5wf/image/upload/v1678145417/jbnhiaovc1dv75i94yiz.pdf','Active',NULL,NULL,'94c95b03-eac4-4509-bc16-4912fce65878','audio','2023-03-06 23:30:59',0),('will','audio trying','http://res.cloudinary.com/dhjptk5wf/image/upload/v1678144736/rqug3tmaooekrqpkgtji.pdf','Active',NULL,NULL,'b3ed8881-65b2-4695-89c9-259c39b43ceb','audio','2023-03-06 23:19:38',0),('will','audio trying','http://res.cloudinary.com/dhjptk5wf/image/upload/v1678145695/o1z8llgllqwi483q3aj4.pdf','Active',NULL,NULL,'ef5fe69a-fff0-4e9b-9470-1bbeea43e07f','audio','2023-03-06 23:35:36',0),('will','audio trying','http://res.cloudinary.com/dhjptk5wf/image/upload/v1678144637/jniytxm7nh38ohsxpojo.pdf','Active',NULL,NULL,'f5c5e695-4200-4cf1-bd7a-1a7ebf0f9f04','audio','2023-03-06 23:17:58',0);
/*!40000 ALTER TABLE `media` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-07 10:03:20
