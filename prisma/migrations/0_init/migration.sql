-- CreateTable
CREATE TABLE `Project` (
    `id` VARCHAR(191) NOT NULL,
    `title` TEXT NOT NULL,
    `description` TEXT NOT NULL,
    `img` VARCHAR(191) NULL,
    `type` ENUM('IQP', 'DATA', 'APP', 'PUBLICATION', 'IMPACT') NOT NULL,
    `term` CHAR(1) NULL,
    `year` INTEGER NOT NULL,

    UNIQUE INDEX `Project_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Dataurl` (
    `id` VARCHAR(191) NOT NULL,
    `projectId` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `text` VARCHAR(191) NOT NULL,
    `type` ENUM('DOWNLOAD', 'EMBED', 'LINK') NOT NULL,

    UNIQUE INDEX `Dataurl_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `IqpTeam` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `projectId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `IqpTeam_id_key`(`id`),
    UNIQUE INDEX `IqpTeam_projectId_key`(`projectId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `IqpEntity` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `teamId` INTEGER NOT NULL,
    `type` ENUM('STUDENT', 'SPONSOR', 'ADVISOR') NOT NULL,

    UNIQUE INDEX `IqpEntity_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `validEmails` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `validEmails_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Maintainer` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Maintainer_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AutoSlideshow` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `slideDelay` DOUBLE NOT NULL,
    `picWidth` INTEGER NOT NULL,
    `picHeight` INTEGER NOT NULL,

    UNIQUE INDEX `AutoSlideshow_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `color` (
    `id` VARCHAR(191) NOT NULL,
    `color` VARCHAR(191) NOT NULL,
    `SlideShowId` INTEGER NOT NULL,

    UNIQUE INDEX `color_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `caption` (
    `id` VARCHAR(191) NOT NULL,
    `caption` VARCHAR(191) NOT NULL,
    `SlideShowId` INTEGER NOT NULL,

    UNIQUE INDEX `caption_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `picture` (
    `id` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `SlideShowId` INTEGER NOT NULL,

    UNIQUE INDEX `picture_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `link` (
    `id` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `SlideShowId` INTEGER NOT NULL,

    UNIQUE INDEX `link_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tagsOnProject` (
    `projectId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `assignedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`projectId`, `name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tag` (
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Tag_name_key`(`name`),
    PRIMARY KEY (`name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OpenDataSection` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `vpcStatement` VARCHAR(191) NOT NULL,
    `openDataParagraph` VARCHAR(191) NOT NULL,
    `openDataPic` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `OpenDataSection_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Dataurl` ADD CONSTRAINT `Dataurl_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `IqpTeam` ADD CONSTRAINT `IqpTeam_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `IqpEntity` ADD CONSTRAINT `IqpEntity_teamId_fkey` FOREIGN KEY (`teamId`) REFERENCES `IqpTeam`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `color` ADD CONSTRAINT `color_SlideShowId_fkey` FOREIGN KEY (`SlideShowId`) REFERENCES `AutoSlideshow`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `caption` ADD CONSTRAINT `caption_SlideShowId_fkey` FOREIGN KEY (`SlideShowId`) REFERENCES `AutoSlideshow`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `picture` ADD CONSTRAINT `picture_SlideShowId_fkey` FOREIGN KEY (`SlideShowId`) REFERENCES `AutoSlideshow`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `link` ADD CONSTRAINT `link_SlideShowId_fkey` FOREIGN KEY (`SlideShowId`) REFERENCES `AutoSlideshow`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tagsOnProject` ADD CONSTRAINT `tagsOnProject_name_fkey` FOREIGN KEY (`name`) REFERENCES `Tag`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tagsOnProject` ADD CONSTRAINT `tagsOnProject_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

