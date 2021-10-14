/*
  Warnings:

  - You are about to drop the `Books` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pets` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Books";

-- DropTable
DROP TABLE "Pets";

-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "publicationDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pet" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "microchip" BOOLEAN NOT NULL,

    CONSTRAINT "Pet_pkey" PRIMARY KEY ("id")
);
