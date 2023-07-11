/*
  Warnings:

  - You are about to drop the `IqpAdvisor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `IqpSponsor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `IqpStudent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `IqpAdvisor` DROP FOREIGN KEY `IqpAdvisor_teamId_fkey`;

-- DropForeignKey
ALTER TABLE `IqpSponsor` DROP FOREIGN KEY `IqpSponsor_teamId_fkey`;

-- DropForeignKey
ALTER TABLE `IqpStudent` DROP FOREIGN KEY `IqpStudent_teamId_fkey`;

-- DropTable
DROP TABLE `IqpAdvisor`;

-- DropTable
DROP TABLE `IqpSponsor`;

-- DropTable
DROP TABLE `IqpStudent`;

-- CreateTable
CREATE TABLE `IqpEntity` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `teamId` INTEGER NOT NULL,
    `type` ENUM('STUDENT', 'SPONSOR', 'ADVISOR') NOT NULL,

    UNIQUE INDEX `IqpEntity_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `IqpEntity` ADD CONSTRAINT `IqpEntity_teamId_fkey` FOREIGN KEY (`teamId`) REFERENCES `IqpTeam`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
