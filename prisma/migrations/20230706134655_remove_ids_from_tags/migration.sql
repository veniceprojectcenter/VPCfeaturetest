/*
  Warnings:

  - The values [IMPACT] on the enum `PROJECT_TYPE` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `tags` on the `Project` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "PROJECT_TYPE_new" AS ENUM ('IQP', 'DATA', 'APP', 'PUBLICATION');
ALTER TABLE "Project" ALTER COLUMN "type" TYPE "PROJECT_TYPE_new" USING ("type"::text::"PROJECT_TYPE_new");
ALTER TYPE "PROJECT_TYPE" RENAME TO "PROJECT_TYPE_old";
ALTER TYPE "PROJECT_TYPE_new" RENAME TO "PROJECT_TYPE";
DROP TYPE "PROJECT_TYPE_old";
COMMIT;

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "tags";

-- CreateTable
CREATE TABLE "tagsOnProject" (
    "projectId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tagsOnProject_pkey" PRIMARY KEY ("projectId","name")
);

-- CreateTable
CREATE TABLE "Tag" (
    "name" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("name")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_key" ON "Tag"("name");

-- AddForeignKey
ALTER TABLE "tagsOnProject" ADD CONSTRAINT "tagsOnProject_name_fkey" FOREIGN KEY ("name") REFERENCES "Tag"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tagsOnProject" ADD CONSTRAINT "tagsOnProject_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
