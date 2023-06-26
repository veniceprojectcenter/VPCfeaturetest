-- CreateEnum
CREATE TYPE "DATAURL_TYPE" AS ENUM ('DOWNLOAD', 'EMBED', 'LINK');

-- CreateEnum
CREATE TYPE "PROJECT_TYPE" AS ENUM ('IQP', 'DATA', 'APP', 'PUBLICATION');

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "tags" TEXT[],
    "img" TEXT,
    "type" "PROJECT_TYPE" NOT NULL,
    "term" CHAR(1),
    "year" INTEGER NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dataurl" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "type" "DATAURL_TYPE" NOT NULL,

    CONSTRAINT "Dataurl_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IqpTeam" (
    "id" SERIAL NOT NULL,
    "sponsors" TEXT[],
    "team" TEXT[],
    "projectId" TEXT NOT NULL,
    "advisors" TEXT[],

    CONSTRAINT "IqpTeam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Maintainer" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Maintainer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_id_key" ON "Project"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Dataurl_id_key" ON "Dataurl"("id");

-- CreateIndex
CREATE UNIQUE INDEX "IqpTeam_id_key" ON "IqpTeam"("id");

-- CreateIndex
CREATE UNIQUE INDEX "IqpTeam_projectId_key" ON "IqpTeam"("projectId");

-- CreateIndex
CREATE UNIQUE INDEX "Maintainer_id_key" ON "Maintainer"("id");

-- AddForeignKey
ALTER TABLE "Dataurl" ADD CONSTRAINT "Dataurl_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IqpTeam" ADD CONSTRAINT "IqpTeam_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
