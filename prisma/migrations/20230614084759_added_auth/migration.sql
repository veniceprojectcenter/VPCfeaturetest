/*
  Warnings:

  - Added the required column `year` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "term" CHAR(1),
ADD COLUMN     "year" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Maintainer" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Maintainer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Maintainer_id_key" ON "Maintainer"("id");
